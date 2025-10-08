// Importar configuraciones y módulos auxiliares
import { base_url, recintos, limite, popupFields, origendatos, origendatos_municipios } from "./config.js";
import { initPrediosPanel, refreshPredios } from "./predios.js";
import { initPopupPredios } from "./popupPredios.js";
import { initMonitoreoPanel, refreshMonitoreo } from "./monitoreo.js";
import { initMunicipiosPanel } from "./municipios.js";


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
        },

        // Capa de poligonos (municipios)
        {
          id: 'l_municipios-fill',
          type: 'fill',
          source: 's_municipios',
          layout: { visibility: 'none' },
          paint: {
            'fill-color': '#fff',
            'fill-opacity': 0
          }          
        },
        {
          id: 'l_municipios-line',
          type: 'line',
          source: 's_municipios',
          layout: { visibility: 'none' },
          paint: {
            'line-color': '#ba3e01ff',
            'line-width': 2
          }
        }
      ]
    },
    center: [-62.0, -16.7],
    //minZoom: 6.3,
    minZoom: 5,
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
    initMunicipiosPanel(map);
    initPopupPredios(map);
    initBasemapSwitcher();
  });
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
