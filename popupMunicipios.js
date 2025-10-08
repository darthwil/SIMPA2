import { popupFields_mun,popupDatos_mun} from "./config.js";

// Popups al hacer clic en un predio
export function initPopupMunicipios(map) {
  
  //map.on('click', 'l_predios-fill', e => {    /* antes cuando era solo para predios*/
  map.on('click','l_municipios-fill', e => {
    const capasInteres = ['l_municipios-fill', 'l_municipios-line']; // capas a considerar    
    const feature = map.queryRenderedFeatures(e.point, { layers: capasInteres })[0];
    //const feature = e.features[0]; //antes era solo con una capa
    const props = feature.properties;

    const nomDep = props[popupFields_mun[0]] ?? 'Sin dato'; // des_dis
    const nomMun  = props[popupFields_mun[1]] ?? 'Sin dato'; // des_ue

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

        // HTML del popup con canvas
    const html = `
      <div style="font-family:Roboto,sans-serif; font-size:13px; padding:6px; max-width:none;">
        <div><strong>Distrito:</strong> ${nomDep}</div>
        <div><strong>Unidad Educativa:</strong> ${nomMun}</div>
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
      const partidos = popupDatos_mun.filter(k => props[k] !== undefined && !isNaN(props[k]));
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

  map.on('mouseenter', 'l_municipios-fill', () => map.getCanvas().style.cursor = 'pointer');
  map.on('mouseleave', 'l_municipios-fill', () => map.getCanvas().style.cursor = '');  
  /*
  map.on('mouseenter', 'l_votos-anulados-fill', () => map.getCanvas().style.cursor = 'pointer');
  map.on('mouseleave', 'l_votos-anulados-fill', () => map.getCanvas().style.cursor = '');
  */
}