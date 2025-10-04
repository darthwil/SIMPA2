// Importar configuraciones y módulos auxiliares
import { base_url, recintos, limite, popupFields, origendatos, origendatos_municipios } from "./config.js";
import { initPrediosPanel, refreshPredios } from "./predios.js";
import { initMonitoreoPanel, refreshMonitoreo } from "./monitoreo.js";
//import { initMunicipiosPanel } from "./municipios.js";

// Variable global del mapa
export let map;

function initMap() {
  // Crear mapa base con fuentes y capas
  map = new maplibregl.Map({
    container: 'map',
    style: {
      version: 8,
      sources: {
        // Capas base raster: satélite y calles
        s_satelite: {
          type: 'raster',
          tiles: [
            'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
          ],
          tileSize: 256
        },
        s_osm: {
          type: 'raster',
          tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png']
        },
        // Fuente GeoJSON con datos de predios
        s_predios: {
          type: 'geojson',
          //data: `${base_url}/collections/public.${recintos}/items?limit=5000`
          data: origendatos
        },
        // Fuente vacía para resaltar predios
        highlight_predios: { type: 'geojson', data: { type: 'FeatureCollection', features: [] } },
        // Fuente GeoJSON con datos de municipios
        s_municipios: {
          type: 'geojson',
          data: origendatos_municipios
        },
        // Fuente vacía para resaltar municipios
        highlight_municipios: { type: 'geojson', data: { type: 'FeatureCollection', features: [] } },

      },
      layers: [
        // Capas base
        { id: 'l_satelite', type: 'raster', source: 's_satelite', layout: { visibility: 'none' } },
        { id: 'l_calles', type: 'raster', source: 's_osm', layout: { visibility: 'visible' } },
        // Capa de puntos (predios)
        {
          id: 'l_predios-fill',
          type: 'circle',
          source: 's_predios',
          paint: { 'circle-radius': 6, 'circle-color': '#088', 'circle-stroke-color': '#088', 'circle-stroke-width': 1 },
          layout: { visibility: 'none' }
        },
        // Capa adicional (ejemplo)
        {
          id: 'l_votos-anulados-fill',
          type: 'circle',
          source: 's_predios',
          paint: { 'circle-radius': 6, 'circle-color': '#888', 'circle-stroke-color': '#000', 'circle-stroke-width': 1 },
          layout: { visibility: 'none' }
        }
        /*
       // Capa de poligonos (municipios)
       {
         id: 'l_municipios-fill',
         type: 'polygon',
         source: 's_municipios',
         paint: { 'circle-radius': 6, 'circle-color': '#088', 'circle-stroke-color': '#088', 'circle-stroke-width': 1 },
         layout: { visibility: 'none' }
       }
       */
      ]
    },
    center: [-62.0, -16.7],
    minZoom: 6.3,
    maxZoom: 18.4,
    maxBounds: limite
  });

  // Cuando el mapa cargue
  map.on('load', () => {
    // Capa para destacar un punto
    map.addLayer({
      id: 'highlight-point',
      type: 'circle',
      source: 'highlight_predios',
      paint: {
        'circle-radius': 7,
        'circle-color': '#72eef6ff',
        'circle-stroke-color': '#d70f0fff',
        'circle-stroke-width': 2
      }
    });

    // Inicializar módulos y funciones
    initPrediosPanel(map);
    initMonitoreoPanel(map);
    //initMunicipiosPanel(map);
    initPopups();
    initBasemapSwitcher();
  });
}

// Popups al hacer clic en un predio
function initPopups() {
  map.on('click', 'l_predios-fill', e => {
    const f = e.features[0];
    const props = f.properties;

    const desDis = props.des_dis ?? 'Sin dato';
    const desUe = props.des_ue ?? 'Sin dato';

    // 🎨 Colores por partido (puedes ampliar esta lista)
    const coloresPartido = {
      'partido1': '#4CAF50',
      'partido2': '#E53935',
      'partido3': '#1E88E5',
      'partido4': '#FDD835',
      'partido5': '#8E24AA',
      'partido6': '#FB8C00',
      'partido7': '#00BCD4',
      'partido8': '#9E0E9E',
      'partido9': '#919E9E',
      'votosnulos': '#1E9E9E',
      'actasnulas': '#9ECE90',
      'actasobservadas': '#769C9E'
    };

    // Campos que representan partidos (puedes ajustar esta lista)
    const camposPartidos = ['partido1', 'partido2', 'partido3', 'partido4', 'partido5', 'partido6', 'partido7', 'partido8', 'partido9', 'votosnulos', 'actasnulas', 'actasobservadas'];

    // HTML del popup con canvas
    const html = `
      <div style="font-family:Roboto,sans-serif; font-size:13px; padding:6px; max-width:none;">
        <div><strong>Distrito:</strong> ${desDis}</div>
        <div><strong>Unidad Educativa:</strong> ${desUe}</div>
        <canvas id="popupChart" width="440" height="260" style="margin-top:10px;"></canvas>
      </div>
    `;

    const popup = new maplibregl.Popup({ maxWidth: "none" })
      .setLngLat(e.lngLat)
      .setHTML(html)
      .addTo(map);

    setTimeout(() => {
      const ctx = document.getElementById('popupChart');
      if (!ctx) return;

      // Filtrar solo partidos con valores numéricos
      const partidos = camposPartidos.filter(k => props[k] !== undefined && !isNaN(props[k]));
      const valores = partidos.map(k => parseFloat(props[k]));
      const colores = partidos.map(k => coloresPartido[k] || '#ccc');

      if (partidos.length === 0) {
        ctx.insertAdjacentHTML('beforebegin', '<p>Sin datos de partidos</p>');
        return;
      }

      // Crear el gráfico con Chart.js
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: partidos,
          datasets: [{
            label: 'Votos por partido',
            data: valores,
            backgroundColor: colores,
            borderColor: '#333',
            borderWidth: 1
          }]
        },
        options: {
          responsive: false,
          plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
            datalabels: {
              color: '#000',
              anchor: 'end',
              align: 'start',
              font: { weight: 'bold', size: 11 },
              formatter: (value) => value
            }
          },
          scales: {
            y: { beginAtZero: true, grid: { color: '#ddd' }, ticks: { font: { size: 11 } } },
            x: { ticks: { font: { size: 11 }, color: '#333' }, grid: { display: false } }
          }
        },
        plugins: [ChartDataLabels]  // Importante para que funcione
      });

    }, 120);
  });

  map.on('mouseenter', 'l_predios-fill', () => map.getCanvas().style.cursor = 'pointer');
  map.on('mouseleave', 'l_predios-fill', () => map.getCanvas().style.cursor = '');
}






// Selector de mapa base (calles, satélite, híbrido)
function initBasemapSwitcher() {
  document.querySelectorAll('input[name="basemap"]').forEach(radio => {
    radio.addEventListener('change', e => {
      if (e.target.value === 'calles') {
        map.setPaintProperty('l_calles', 'raster-opacity', 1);
        map.setLayoutProperty('l_satelite', 'visibility', 'none');
        map.setLayoutProperty('l_calles', 'visibility', 'visible');
      } else if (e.target.value === 'satelite') {
        map.setLayoutProperty('l_satelite', 'visibility', 'visible');
        map.setLayoutProperty('l_calles', 'visibility', 'none');
      } else if (e.target.value === 'hibrido') {
        map.setPaintProperty('l_calles', 'raster-opacity', 0.5);
        map.setLayoutProperty('l_satelite', 'visibility', 'visible');
        map.setLayoutProperty('l_calles', 'visibility', 'visible');
      }
    });
  });
}

// Iniciar el mapa al cargar la página
document.addEventListener('DOMContentLoaded', initMap);
