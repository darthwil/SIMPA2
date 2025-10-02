// ===============================
// predios.js
// ===============================
// Este módulo gestiona el panel de predios, carga los datos desde el servidor,
// construye la tabla de atributos con filtros, sumatorias y paginación,
// y permite resaltar predios en el mapa.
// ===============================

import { base_url, recintos, tableFields, filterFields, sumFields } from "./config.js";

// Variables globales para manejar el estado
let allFeatures = [];       // Todos los predios cargados desde el servidor
let filteredFeatures = [];  // Predios después de aplicar filtros
let currentPage = 1;        // Página actual de la tabla
const pageSize = 50;        // Tamaño de página (50 registros)

// ===============================
// Inicialización del panel de predios
// ===============================
export function initPrediosPanel(map) {
  const panel = document.getElementById('panel-predios');
  const btn = document.getElementById('btn-predios');
  const close = document.getElementById('close-predios');
  const chkVisualizar = document.getElementById('chk-visualizar');

  // Abrir el panel al hacer clic en el botón del menú
  btn.addEventListener('click', () => panel.style.display = 'block');

  // Cerrar el panel y limpiar el estado
  close.addEventListener('click', () => {
    panel.style.display = 'none';
    chkVisualizar.checked = false;
    document.getElementById('chk-buscar').checked = false;
    document.getElementById('panel-atributos').style.display = 'none';

    // Ocultar capa de predios y limpiar selección
    map.setLayoutProperty('l_predios-fill', 'visibility', 'none');
    map.getSource('highlight').setData({ type: 'FeatureCollection', features: [] });
  });

  // Activar/Desactivar visualización de predios en el mapa
  chkVisualizar.addEventListener('change', async e => {
    const vis = e.target.checked ? 'visible' : 'none';
    map.setLayoutProperty('l_predios-fill', 'visibility', vis);

    // Si se activa, cargar los datos desde el servidor
    if (e.target.checked) await refreshPredios(map);
  });

  // Mostrar/Ocultar la tabla de atributos
  document.getElementById('chk-buscar').addEventListener('change', async e => {
    const panelAtrib = document.getElementById('panel-atributos');
    panelAtrib.style.display = e.target.checked ? 'block' : 'none';

    // Si se activa, cargar datos en la tabla
    if (e.target.checked) await refreshPredios(map);
  });
}

// ===============================
// Recargar predios desde el servidor
// ===============================
export async function refreshPredios(map) {
  try {
    // Llamada al servidor para obtener hasta 5000 registros
    const res = await fetch(`${base_url}/collections/public.${recintos}/items?limit=5000`, {
      headers: { 'Accept': 'application/geo+json' }
    });
    const data = await res.json();

    // Actualizar la fuente de datos en el mapa
    if (map.getSource('s_predios')) map.getSource('s_predios').setData(data);

    // Guardar todos los features en memoria
    allFeatures = data.features;
    filteredFeatures = [...allFeatures]; // inicialmente sin filtros
    currentPage = 1; // comenzar en la primera página

    // Construir la tabla de atributos
    buildTable(map);
  } catch (err) {
    console.error('Error cargando predios:', err);
  }
}

// ===============================
// Construcción de la tabla (cabecera y filtros)
// ===============================
function buildTable(map) {
  if (!allFeatures || allFeatures.length === 0) return;

  const thead = document.querySelector('#tabla-atributos thead');
  const filterContainer = document.getElementById('filterContainer');

  // Crear cabecera de tabla con los campos configurados
  thead.innerHTML = '<tr>' + tableFields.map(f => `<th>${f}</th>`).join('') + '</tr>';
  filterContainer.innerHTML = '';

  // Crear inputs de filtro dinámicamente
  filterFields.forEach(f => {
    const input = document.createElement('input');
    input.placeholder = `Filtrar ${f}`;
    input.dataset.field = f;
    // Espacio entre inputs
    input.style.marginRight = '8px'; 
    // Cada vez que el usuario escribe, aplicar filtros
    input.addEventListener('input', () => applyFilters(map));

    filterContainer.appendChild(input);
  });

  // Mostrar la primera página
  updateTableBody(map);
}

// ===============================
// Aplicar filtros sobre el dataset completo
// ===============================
function applyFilters(map) {
  const inputs = document.querySelectorAll('#filterContainer input');
  const filters = {};

  // Construir objeto {campo: valor}
  inputs.forEach(i => { if (i.value) filters[i.dataset.field] = i.value.toLowerCase(); });

  // Filtrar los predios
  filteredFeatures = allFeatures.filter(f =>
    Object.keys(filters).every(field =>
      (f.properties[field] || '').toString().toLowerCase().includes(filters[field])
    )
  );

  currentPage = 1; // volver a la primera página después de filtrar
  updateTableBody(map);
}

// ===============================
// Actualizar el cuerpo de la tabla (paginado)
// ===============================
function updateTableBody(map) {
  const tbody = document.querySelector('#tabla-atributos tbody');
  tbody.innerHTML = '';

  // Calcular número de páginas
  const totalPages = Math.ceil(filteredFeatures.length / pageSize);
  const start = (currentPage - 1) * pageSize;
  const pageFeatures = filteredFeatures.slice(start, start + pageSize);

  // Agregar filas de la página actual
  pageFeatures.forEach(row => {
    const tr = document.createElement('tr');

    // Crear columnas con los campos configurados
    tableFields.forEach(f => {
      const td = document.createElement('td');
      td.textContent = row.properties[f] || '';
      tr.appendChild(td);
    });

    // Evento: al hacer clic en una fila -> resaltar predio en el mapa
    tr.addEventListener('click', () => {
      document.querySelectorAll('#tabla-atributos tbody tr').forEach(r => r.classList.remove('selected'));
      tr.classList.add('selected');

      // Centrar el mapa si es un punto
      if (row.geometry.type === 'Point') {
        map.flyTo({ center: row.geometry.coordinates, zoom: 16 });
      }

      // Mostrar highlight en el mapa
      map.getSource('highlight').setData({ type: 'FeatureCollection', features: [row] });
    });

    tbody.appendChild(tr);
  });

  // Actualizar sumatorias y controles de paginación
  updateSum();
  updatePaginationControls(map, totalPages);
}

// ===============================
// Crear controles de paginación
// ===============================
function updatePaginationControls(map, totalPages) {
  let container = document.getElementById('paginationControls');

  // Si no existe, crear contenedor de paginación
  if (!container) {
    container = document.createElement('div');
    container.id = 'paginationControls';
    container.style.display = 'flex';         // usamos flexbox
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.gap = '12px';             // separación entre elementos
    container.style.padding = '6px';
    document.getElementById('panel-atributos').appendChild(container);
  }

  container.innerHTML = '';

  // Contador de registros (a la izquierda)
  const counter = document.createElement('span');
  counter.style.fontWeight = 'bold';
  counter.textContent = `Total: ${allFeatures.length} | Filtrados: ${filteredFeatures.length}`;

  // Botón anterior
  const prevBtn = document.createElement('button');
  prevBtn.textContent = '⬅️ Anterior';
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      updateTableBody(map);
    }
  });

  // Botón siguiente
  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Siguiente ➡️';
  nextBtn.disabled = currentPage >= totalPages;
  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateTableBody(map);
    }
  });

  // Texto informativo
  const info = document.createElement('span');
  info.textContent = ` Página ${currentPage} de ${totalPages} ( ${filteredFeatures.length} registros ) `;

  // Agregar elementos al contenedor: contador | prev | info | next
  container.appendChild(counter)
  container.appendChild(prevBtn);
  container.appendChild(info);
  container.appendChild(nextBtn);
}

// ===============================
// Calcular sumatorias
// ===============================
function updateSum() {
  const totals = {};
  sumFields.forEach(f => totals[f] = 0);

  // Sumar valores sobre TODOS los registros filtrados (no solo los visibles)
  filteredFeatures.forEach(row => 
    sumFields.forEach(f => totals[f] += parseFloat(row.properties[f]) || 0)
  );

  // Mostrar sumatorias en la tabla
  const sumHeader = document.getElementById('sumHeader');
  const sumRow = document.getElementById('sumRow');
  sumHeader.innerHTML = sumFields.map(f => `<th>${f}</th>`).join('');
  sumRow.innerHTML = sumFields.map(f => `<td>${totals[f].toFixed(2)}</td>`).join('');
}
