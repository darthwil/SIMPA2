
export function initMonitoreoPanel(map) {
  const panel = document.getElementById('panel-monitoreo');
  const btn = document.getElementById('btn-monitoreo');
  const close = document.getElementById('close-monitoreo');
  const chk_votos_anulados = document.getElementById('chk-votos-anulados');
  const legend = document.getElementById('legend-votos-anulados');

  btn.addEventListener('click', () => panel.style.display = 'block');

  close.addEventListener('click', () => {
    panel.style.display = 'none';
    chk_votos_anulados.checked = false;
    map.setLayoutProperty('l_votos-anulados-fill', 'visibility', 'none');
    legend.style.display = "none";
  });

  chk_votos_anulados.addEventListener('change', async e => {
    const vis = e.target.checked ? 'visible' : 'none';
    map.setLayoutProperty('l_votos-anulados-fill', 'visibility', vis);

    if (e.target.checked) {
      // refrescamos predios para asegurarnos de tener datos
      refreshMonitoreo(map,legend);
      
    } else {
      legend.style.display = "none";
    }
  });
}

/**
 * Refresca la clasificación de predios según votos_anulados
 */
export function refreshMonitoreo(map, legendEl) {
  // simplemente recalculemos la clasificación
  clasifica_votosanulados(map, legendEl);
}
/**
 * Clasifica los predios en 3 clases iguales según votos_anulados
 */
function clasifica_votosanulados(map, legendEl) {
  const source = map.getSource("s_predios");
  if (!source) return;

  const data = source._data || source._options.data;
  if (!data || !data.features) return;

  const values = data.features
    .map(f => parseFloat(f.properties.votos_anulados)) // 👈 ahora usa votos_anulados
    .filter(v => !isNaN(v));

  if (values.length === 0) return;

  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.round((max - min) / 3); //redondeado entero

  const breaks = [min + range, min + 2 * range];

  // actualizar estilo de la capa
  map.setPaintProperty('l_votos-anulados-fill', 'circle-color', [
    'case',
    ['<', ['get', 'votos_anulados'], breaks[0]], '#0000ff', // azul bajo
    ['<', ['get', 'votos_anulados'], breaks[1]], '#ffff00', // amarillo medio
    '#ff0000' // rojo alto
  ]);

  // actualizar leyenda en tu div
  legendEl.innerHTML = `
    <strong>Clasificación</strong><br>
    <span style="color:#0000ff">● Bajo&nbsp&nbsp&nbsp:</span> ${min} - ${breaks[0]}<br>
    <span style="color:#ffff00">● Medio:</span> ${breaks[0]} - ${breaks[1]}<br>
    <span style="color:#ff0000">● Alto&nbsp&nbsp&nbsp&nbsp:</span> ${breaks[1]} - ${max}
  `;
  legendEl.style.display = "block";
}


