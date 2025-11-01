/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./mun/colapsaPanelLateral.js":
/*!************************************!*\
  !*** ./mun/colapsaPanelLateral.js ***!
  \************************************/
/***/ (() => {

const btn = document.getElementById('toggle-panels-btn');
const panel = document.querySelector('.side-panels-container');

btn.addEventListener('click', () => {
  console.log('togglePanels cargado', document.getElementById('toggle-panels-btn'));

  const collapsed = panel.classList.toggle('collapsed');
  btn.textContent = collapsed ? '▶' : '◀';
  console.log('togglePanels cargado', document.getElementById('toggle-panels-btn'));

});

/***/ }),

/***/ "./mun/config.js":
/*!***********************!*\
  !*** ./mun/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatosNuloBlanco: () => (/* binding */ DatosNuloBlanco),
/* harmony export */   GanadorPartido: () => (/* binding */ GanadorPartido),
/* harmony export */   base_url: () => (/* binding */ base_url),
/* harmony export */   coloresPartido: () => (/* binding */ coloresPartido),
/* harmony export */   filterFields: () => (/* binding */ filterFields),
/* harmony export */   filterFields_mun: () => (/* binding */ filterFields_mun),
/* harmony export */   getGeoServerGanadoresRecintos: () => (/* binding */ getGeoServerGanadoresRecintos),
/* harmony export */   getGeoServerMunicipios: () => (/* binding */ getGeoServerMunicipios),
/* harmony export */   getGeoServerRecintos: () => (/* binding */ getGeoServerRecintos),
/* harmony export */   limite: () => (/* binding */ limite),
/* harmony export */   param_codmunicipio: () => (/* binding */ param_codmunicipio),
/* harmony export */   param_tipoeleccion: () => (/* binding */ param_tipoeleccion),
/* harmony export */   param_tipoencuesta: () => (/* binding */ param_tipoencuesta),
/* harmony export */   popupDatos: () => (/* binding */ popupDatos),
/* harmony export */   popupDatos_mun: () => (/* binding */ popupDatos_mun),
/* harmony export */   popupFields: () => (/* binding */ popupFields),
/* harmony export */   popupFields_mun: () => (/* binding */ popupFields_mun),
/* harmony export */   sumFields: () => (/* binding */ sumFields),
/* harmony export */   sumFields_mun: () => (/* binding */ sumFields_mun),
/* harmony export */   tableFields: () => (/* binding */ tableFields),
/* harmony export */   tableFields_mun: () => (/* binding */ tableFields_mun)
/* harmony export */ });
/*    //TODAVIA ESTO PERO SERA PARA RECIBIR EL FILTRO
// 1. Obtener la cadena de búsqueda (query string) de la URL actual
const params = new URLSearchParams(window.location.search);

// 2. Extraer el valor del parámetro 'codigo_municipio'
// Importante: El valor que recuperas es la cadena '070101', sin las comillas simples
// que estaban en la URL para hacerlo visible como string, ya que URLSearchParams
// lo decodifica automáticamente.
const codigoMunicipio = params.get('codigo_municipio'); 

// 3. Verificar si el valor existe
if (!codigoMunicipio) {
    console.error("El parámetro 'codigo_municipio' no fue encontrado en la URL.");
    // Puedes retornar o usar un valor por defecto aquí si es necesario
    return; 
}

// 4. Crear el filtro CQL2
// El valor debe ir entre comillas simples en el filtro CQL2 si es un STRING.
const filtro_raw = `codigo_municipio='${codigoMunicipio}'`; 

// 5. Codificar el filtro para la URL
const cql2_filter = encodeURIComponent(filtro_raw);

// 6. Construir la URL final con el filtro
const geo_server_municipios = `${base_url}/collections/${esq}.${municipios}/items?limit=${maxregistros}&filter=${cql2_filter}`;

console.log("URL de pg_featureserv generada:", geo_server_municipios);
// URL resultante (ejemplo):
// .../items?limit=1000&filter=codigo_municipio%3D'070101'

*/




// Configuración general
const base_url = 'http://185.216.75.120:9000';
//export const base_url = 'http://127.0.0.1:9000';

//const esque = 'sig';
const esq = 'elecciones';

const recintos = 'v_recintosvotos_partido';
const municipios = 'v_municipios_recintosvotospartido';
const ganadores_predios = 'v_ganadoresrecintos_partido';
const maxregistros = 20000;
const param_codmunicipio = 'codigo_municipio';
const param_tipoeleccion = 'tipo_eleccion';
const param_tipoencuesta = 'tipo_encuesta';
//const geo_server = `${base_url}/collections/${esq}.${recintos}/items?limit=${maxregistros}`; // direccion del path

//const geo_server_municipios = `${base_url}/collections/${esq}.${municipios}/items?limit=${maxregistros}`; // direccion del path
//const geo_server_ganadores_predios = `${base_url}/collections/${esq}.${ganadores_predios}/items?limit=${maxregistros}`; // direccion del path

const geo_local = 'ue.geojson'; //direccion del local
const geo_local_municipios = 'municipios.geojson'; //direccion del local

const campo_codmunicpio_recinto = 'fcod_mun';
const campo_codmunicpio_municipio = 'cod_pol_mun';
const campo_tipoeleccion = 'tipo_eleccion';
const campo_tipoencuesta = 'tipo_encuesta';

//export const origendatos = geo_server; //geo_server;
//export const origendatos_municipios = geo_server_municipios; //geo_server_municipios;
//export const origendatos_ganadores_predios = geo_server_ganadores_predios; //geo_server_ganadores;

// Colores por partido 
const coloresPartido = {
  //'partido1': '#4CAF50',
  'pdc': '#ec0f0bff',
  'libre': '#1E88E5',
  'unidad': '#FDD835',
  'map-ipsp': '#FB8C00',
  'lyp-adn': '#00BCD4',
  'fp': '#9E0E9E',
  'apb-sumate': '#05822fff',
  'ap': '#282683ff',
  'nulo': '#b9b9b9ff',
  'blanco': '#949493ff'    
};

const limite = [
  [-73.00, -25.00],
  [-54.00, -8.00]
];

const popupFields = [
  "descripcion_recinto"
];
const popupDatos = [
  "pdc", "libre","unidad", "mas_ipsp", "lyp_adn", "fp", "apb_sumate", "ap", "nulo", "blanco"
];
const DatosNuloBlanco = ["nulo", "blanco"]

const tableFields = [
  "descripcion_recinto", "pdc", "libre","unidad", "mas_ipsp", "lyp_adn", "fp", "apb_sumate", "ap", "nulo", "blanco"
];

const filterFields = ["descripcion_recinto"];
const sumFields = [
  "pdc", "libre","unidad", "mas_ipsp", "lyp_adn", "fp", "apb_sumate", "ap", "nulo", "blanco"
];

const popupFields_mun = [
  "departamen", "provincia", "municipio"
];
const popupDatos_mun = [
  "pdc", "libre","unidad", "mas_ipsp", "lyp_adn", "fp", "apb_sumate", "ap", "nulo", "blanco"
];
const tableFields_mun = [
  "departamen", "provincia", "municipio", "pdc", "libre","unidad", "mas_ipsp", "lyp_adn", "fp", "apb_sumate", "ap", "nulo", "blanco"
];

const filterFields_mun = ["departamen", "provincia", "municipio"];
const sumFields_mun = [
  "pdc", "libre","unidad", "mas_ipsp", "lyp_adn", "fp", "apb_sumate", "ap", "nulo", "blanco"
];
const GanadorPartido = ["partidoganador"]

//  CASO CODMUNICIPIO - 
function getGeoServerRecintos(codigoMunicipio, tipoEleccion,tipoEncuesta) {
  const codigoMunicipio_num = Number(codigoMunicipio);
  if (codigoMunicipio && tipoEleccion && tipoEncuesta) {  /* municipio y eleccion y encuesta  */
    const filtro_raw = `${campo_codmunicpio_recinto}=${codigoMunicipio_num} AND ${campo_tipoeleccion}='${tipoEleccion}' AND ${campo_tipoencuesta}='${tipoEncuesta}'` ;  // uso la ' para el espacio TIPOELECCION
    const cql2_filter = encodeURIComponent(filtro_raw);
    return `${base_url}/collections/${esq}.${recintos}/items?limit=${maxregistros}&filter=${cql2_filter}`;
  } else if (!codigoMunicipio && tipoEleccion && tipoEncuesta) {    /* eleccion y encuesta  */
    const filtro_raw = `${campo_tipoeleccion}='${tipoEleccion}' AND ${campo_tipoencuesta}='${tipoEncuesta}'`;
    const cql2_filter = encodeURIComponent(filtro_raw);
    return `${base_url}/collections/${esq}.${recintos}/items?limit=${maxregistros}&filter=${cql2_filter}`;
  } 
}

function getGeoServerMunicipios(codigoMunicipio, tipoEleccion,tipoEncuesta) {
  const codigoMunicipio_num = Number(codigoMunicipio);
  if (codigoMunicipio && tipoEleccion && tipoEncuesta) {    /* municipio y eleccion  y encuesta*/
    const filtro_raw = `${campo_codmunicpio_municipio}=${codigoMunicipio_num} AND ${campo_tipoeleccion}='${tipoEleccion}' AND ${campo_tipoencuesta}='${tipoEncuesta}'` ;  // uso la ' para el espacio`;
    const cql2_filter = encodeURIComponent(filtro_raw);
    return `${base_url}/collections/${esq}.${municipios}/items?limit=${maxregistros}&filter=${cql2_filter}`;
  } else if (!codigoMunicipio && tipoEleccion && tipoEncuesta) {    /* eleccion y encuesta */
    const filtro_raw = `${campo_tipoeleccion}='${tipoEleccion}' AND ${campo_tipoencuesta}='${tipoEncuesta}'`;
    const cql2_filter = encodeURIComponent(filtro_raw);
    return `${base_url}/collections/${esq}.${municipios}/items?limit=${maxregistros}&filter=${cql2_filter}`;
  } 
}
function getGeoServerGanadoresRecintos(codigoMunicipio, tipoEleccion,tipoEncuesta) {
  const codigoMunicipio_num = Number(codigoMunicipio);
  if (codigoMunicipio && tipoEleccion && tipoEncuesta) {     /* municipio y eleccion y encuesta  */
    const filtro_raw = `${campo_codmunicpio_recinto}=${codigoMunicipio_num} AND ${campo_tipoeleccion}='${tipoEleccion}' AND ${campo_tipoencuesta}='${tipoEncuesta}'` ;  // uso la ' para el espacio`;
    const cql2_filter = encodeURIComponent(filtro_raw);
    return `${base_url}/collections/${esq}.${ganadores_predios}/items?limit=${maxregistros}&filter=${cql2_filter}`;
  } else if (!codigoMunicipio && tipoEleccion && tipoEncuesta ) {    /* eleccion y encuesta */
    const filtro_raw = `${campo_tipoeleccion}='${tipoEleccion}' AND ${campo_tipoencuesta}='${tipoEncuesta}'`;
    const cql2_filter = encodeURIComponent(filtro_raw);
    return `${base_url}/collections/${esq}.${ganadores_predios}/items?limit=${maxregistros}&filter=${cql2_filter}`;
  } 
}

/***/ }),

/***/ "./mun/main.js":
/*!*********************!*\
  !*** ./mun/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   mostrarLoader: () => (/* binding */ mostrarLoader),
/* harmony export */   ocultarLoader: () => (/* binding */ ocultarLoader),
/* harmony export */   origendatos: () => (/* binding */ origendatos),
/* harmony export */   origendatos_ganadores_predios: () => (/* binding */ origendatos_ganadores_predios),
/* harmony export */   origendatos_municipios: () => (/* binding */ origendatos_municipios)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./mun/config.js");
/* harmony import */ var _predios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./predios.js */ "./mun/predios.js");
/* harmony import */ var _popupPredios_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popupPredios.js */ "./mun/popupPredios.js");
/* harmony import */ var _monitoreo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monitoreo.js */ "./mun/monitoreo.js");
/* harmony import */ var _municipios_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./municipios.js */ "./mun/municipios.js");
/* harmony import */ var _popupMunicipios_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popupMunicipios.js */ "./mun/popupMunicipios.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./mun/styles.css");
/* harmony import */ var _colapsaPanelLateral_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./colapsaPanelLateral.js */ "./mun/colapsaPanelLateral.js");
/* harmony import */ var _colapsaPanelLateral_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_colapsaPanelLateral_js__WEBPACK_IMPORTED_MODULE_7__);
// Importar configuraciones y módulos auxiliares







/* //// PARA PRODUCCION */



const params = new URLSearchParams(window.location.search);
const Codigo_Municipio = params.get(_config_js__WEBPACK_IMPORTED_MODULE_0__.param_codmunicipio);
const Tipo_Eleccion = params.get(_config_js__WEBPACK_IMPORTED_MODULE_0__.param_tipoeleccion);
const Tipo_Encuesta = params.get(_config_js__WEBPACK_IMPORTED_MODULE_0__.param_tipoencuesta);


console.log('codmunicipio',Codigo_Municipio);
console.log('tipoeleccoin',Tipo_Eleccion);
console.log('tipoeleccoin',Tipo_Encuesta);

console.log('origndatos',(0,_config_js__WEBPACK_IMPORTED_MODULE_0__.getGeoServerRecintos)(Codigo_Municipio,Tipo_Eleccion,Tipo_Encuesta));
const origendatos = (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.getGeoServerRecintos)(Codigo_Municipio,Tipo_Eleccion,Tipo_Encuesta);

console.log('origendatos_municipios',(0,_config_js__WEBPACK_IMPORTED_MODULE_0__.getGeoServerMunicipios)(Codigo_Municipio,Tipo_Eleccion,Tipo_Encuesta));
const origendatos_municipios = (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.getGeoServerMunicipios)(Codigo_Municipio,Tipo_Eleccion,Tipo_Encuesta);

console.log('origendatos_ganadores_predios',(0,_config_js__WEBPACK_IMPORTED_MODULE_0__.getGeoServerGanadoresRecintos)(Codigo_Municipio,Tipo_Eleccion,Tipo_Encuesta));
const origendatos_ganadores_predios = (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.getGeoServerGanadoresRecintos)(Codigo_Municipio,Tipo_Eleccion,Tipo_Encuesta);


/*//// PARA PRODUCCION*/
// Variable global del mapa
let map;

// mostrar cargando
function mostrarLoader() {
  document.getElementById('loading').style.display = 'flex';
}
// ocultar cargando
function ocultarLoader() {
  document.getElementById('loading').style.display = 'none';
}

function initMap() {
  // mostrar cargando
  mostrarLoader();

  // Crear mapa base con fuentes y capas
  map = new maplibregl.Map({
    container: 'map',
    style: {
      version: 8,
      sources: {
        // Origenes raster: satélite y calles
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
        }
      },
      layers: [
        // Capas base raster: satelite y calles
        { id: 'l_satelite', type: 'raster', source: 's_satelite', layout: { visibility: 'none' } },
        { id: 'l_calles', type: 'raster', source: 's_osm', layout: { visibility: 'visible' } }        
      ]
    },
    center: [-62.0, -16.7],
    minZoom: 5,
    maxZoom: 18.4,
    maxBounds: _config_js__WEBPACK_IMPORTED_MODULE_0__.limite    
  });

  // Cuando el mapa termina de cargar los mapa base
  map.on('load', () => {
    // ocultar cargando todo
    //ocultarLoader();
    // Agregar guentes geojson
    map.addSource('s_predios', { type: 'geojson', data: origendatos });
    map.addSource('s_municipios', { type: 'geojson', data: origendatos_municipios });
    map.addSource('highlight_predios', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
    map.addSource('highlight_municipios', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
    map.addSource('s_ganadores_predios', { type: 'geojson', data: origendatos_ganadores_predios });

    //Agrega capas en orden de profundidad
    //Municipios debajo de predios
    map.addLayer({
      id: 'l_municipios-fill',
      type: 'fill',
      source: 's_municipios',
      layout: { visibility: 'none' },
      paint: { 'fill-color': '#fff', 'fill-opacity': 0 }
    });
    map.addLayer({
      id: 'l_municipios-line',
      type: 'line',
      source: 's_municipios',
      layout: { visibility: 'none' },
      paint: { 'line-color': '#ba3e01ff', 'line-width': 2 }
    });
    
    // Predios encima
    map.addLayer({
      id: 'l_predios-fill',
      type: 'circle',
      source: 's_predios',
      paint: { 'circle-radius': 6, 'circle-color': '#088', 'circle-stroke-color': '#088', 'circle-stroke-width': 1 },
      layout: { visibility: 'none' }
    });

    // Predios Clasifica votos nulos
    map.addLayer({
      id: 'l_votos-anulados-fill',
      type: 'circle',
      source: 's_predios',
      paint: { 'circle-radius': 6, 'circle-color': '#888', 'circle-stroke-color': '#000', 'circle-stroke-width': 1 },
      layout: { visibility: 'none' }
    });  

    // Predios Clasifica ganadores
    map.addLayer({
      id: 'l_ganadores-predios-fill',
      type: 'circle',
      source: 's_ganadores_predios',
      paint: { 'circle-radius': 6, 'circle-color': '#888', 'circle-stroke-color': '#000', 'circle-stroke-width': 1 },
      layout: { visibility: 'none' }
    });  

    // Capas para highlight o seleccionadas encima de todas
    map.addLayer({
      id: 'highlight-mun',
      type: 'fill',
      source: 'highlight_municipios',
      paint: { 'fill-color': '#72eef6ff', 'fill-opacity': 0.4 }
    });
    map.addLayer({
      id: 'highlight-point',
      type: 'circle',
      source: 'highlight_predios',
      paint: { 'circle-radius': 7, 'circle-color': '#72eef6ff', 'circle-stroke-color': '#d70f0fff', 'circle-stroke-width': 2 }
    });

    // Inicializar módulos y funciones
    (0,_predios_js__WEBPACK_IMPORTED_MODULE_1__.initPrediosPanel)(map);
    (0,_monitoreo_js__WEBPACK_IMPORTED_MODULE_3__.initMonitoreoPanel)(map);
    (0,_municipios_js__WEBPACK_IMPORTED_MODULE_4__.initMunicipiosPanel)(map);
    (0,_popupPredios_js__WEBPACK_IMPORTED_MODULE_2__.initPopupPredios)(map);
    (0,_popupMunicipios_js__WEBPACK_IMPORTED_MODULE_5__.initPopupMunicipios)(map);
    initBasemapSwitcher();
    ocultarLoader();
  });
  
}


// Control de Selector de mapa base (calles, satélite, híbrido)
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


/***/ }),

/***/ "./mun/monitoreo.js":
/*!**************************!*\
  !*** ./mun/monitoreo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initMonitoreoPanel: () => (/* binding */ initMonitoreoPanel)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./mun/config.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./mun/main.js");



const legend_votos_anulados_predios = document.getElementById('legend-votos-anulados-predios');
const legend_votos_ganadores_predios = document.getElementById('legend-votos-ganadores-predios');
const votosnulos = _config_js__WEBPACK_IMPORTED_MODULE_0__.DatosNuloBlanco[0];
const ganador_partido = _config_js__WEBPACK_IMPORTED_MODULE_0__.GanadorPartido[0];

function initMonitoreoPanel(map) {
  const panel = document.getElementById('panel-monitoreo');
  const btn = document.getElementById('btn-monitoreo');
  const close = document.getElementById('close-monitoreo');
  const chk_votos_anulados_predios = document.getElementById('chk-votos-anulados-predios');
  const chk_votos_ganadores_predios = document.getElementById('chk-votos-ganadores-predios');

  btn.addEventListener('click', () => {    
    const estado_panel = window.getComputedStyle(panel).display;
    if (estado_panel === 'block') {
      panel.style.display = 'none';
      chk_votos_anulados_predios.checked = false;
      chk_votos_ganadores_predios.checked = false;      
      // Ocultamos capa de votos anulados y ganadores predios
      map.setLayoutProperty('l_votos-anulados-fill', 'visibility', 'none');
      map.setLayoutProperty('l_ganadores-predios-fill', 'visibility', 'none');
    } else if (estado_panel === 'none') {
      panel.style.display ='block'
    }
  });

  /*  /// esto ya no se hace todo en el boton btn monitoreo
  close.addEventListener('click', () => {
    panel.style.display = 'none';
    chk_votos_anulados_predios.checked = false;
    map.setLayoutProperty('l_votos-anulados-fill', 'visibility', 'none');
    chk_votos_ganadores_predios.checked = false;
    map.setLayoutProperty('l_ganadores-predios-fill', 'visibility', 'none');
  });
*/
  // Puedes añadir eventos si quieres colapsar/expandir cada subpanel al click
  document.querySelectorAll('.subpanel').forEach((subpanel, index) => {
    const title = subpanel.querySelector('strong');
    const content = Array.from(subpanel.children).filter(el => el !== title);

    // Guardamos el texto base
    const baseText = title.textContent.trim();
    title.dataset.baseText = baseText;
    title.style.cursor = 'pointer';

    // Inicial: el primer subpanel expandido, los demás colapsados
    if (index === 0) {
      content.forEach(el => el.style.display = 'block');
      title.textContent = `🔽 ${baseText}`;
    } else {
      content.forEach(el => el.style.display = 'none');
      title.textContent = `▶️ ${baseText}`;
    }

    // Evento click para alternar
    title.addEventListener('click', () => {
      const isCollapsed = content[0].style.display === 'none';
      content.forEach(el => el.style.display = isCollapsed ? 'block' : 'none');
      title.textContent = `${isCollapsed ? '🔽' : '▶️'} ${title.dataset.baseText}`;
    });
    
  });

  //  cuando checamos votos anulados de predios
  chk_votos_anulados_predios.addEventListener('change', async e => {  
    //const vis = e.target.checked ? 'visible' : 'none';  //// esto ya no va    
    if (e.target.checked) {      
      await refreshMonitoreoPredios(map);
      map.setLayoutProperty('l_votos-anulados-fill', 'visibility', 'visible');            
    } else{
      map.setLayoutProperty('l_votos-anulados-fill', 'visibility', 'none');            
    }
  });

  // cuando checamos ganadores por predios
  chk_votos_ganadores_predios.addEventListener('change', async e => {
    //const vis = e.target.checked ? 'visible' : 'none';  //// esto ya no va
    
    if (e.target.checked) {            
      await refreshMonitoreo_GanadoresPredios(map);
      map.setLayoutProperty('l_ganadores-predios-fill', 'visibility', 'visible');
    } else {
      map.setLayoutProperty('l_ganadores-predios-fill', 'visibility', 'none');
    }
  });
}

/* Refresca la clasificación de predios según votos_anulados  */
async function refreshMonitoreoPredios(map) {
  (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.mostrarLoader)();
  // 1. Cargar/Actualizar los datos más recientes del servidor
  //    Esto actualiza la fuente 's_predios'.  
  await refreshPredios(map);
  
  // simplemente recalculemos la clasificación
  clasifica_votosanulados_predios(map, legend_votos_anulados_predios);
  (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.ocultarLoader)();
}

// ===============================
// Recargar predios desde el servidor
// ===============================
async function refreshPredios(map) {
  try {
    // Llamada al servidor para obtener hasta 5000 registros    
    const res = await fetch(_main_js__WEBPACK_IMPORTED_MODULE_1__.origendatos, {
      headers: { 'Accept': 'application/geo+json' }
    });
    const data = await res.json();

    // Actualizar la fuente de datos en el mapa
    if (map.getSource('s_predios')) map.getSource('s_predios').setData(data);    
    
  } catch (err) {
    console.error('Error cargando predios:', err);
  }
}

/* Clasifica los predios en 3 clases iguales según votos_anulados */
function clasifica_votosanulados_predios(map, legendEl) {
  const source = map.getSource("s_predios");
  if (!source) return;

  const data = source._data || source._options.data;
  if (!data || !data.features) return;

  const values = data.features
    // Antes de clasificar evitamos trabajar con valores nulos para  errores al clasificar  
    .map(f => parseFloat(f.properties[votosnulos]))     //aqui trabajamos con los votosnulos
    .filter(v => v != null && !isNaN(v));
    /*
    .map(f => parseFloat(f.properties.votosnulos)) // 👈 ahora usa votos_anulados
    .filter(v => !isNaN(v));
    */

  if (values.length === 0) return;

  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.round((max - min) / 3); //redondeado entero

  const breaks = [min + range, min + 2 * range];

  /*
  // para ver error 
  console.log(map.getLayer('l_votos-anulados-fill'));
  console.log(
    "Ejemplo properties:",
    data.features[0].properties,
    "valor usado en get:",
    data.features[0].properties[votosnulos]
  );
  */

    // actualizar estilo de la capa
  map.setPaintProperty('l_votos-anulados-fill', 'circle-opacity', [
        'case',
        // Si el valor NO es nulo Y es mayor que -1 (es un número positivo o cero)
        ['all', ['!=', ['get', votosnulos], null], ['>=', ['get', votosnulos], 0]], 
        1, // Muestra los válidos (opacidad 1)
        0  // Oculta los nulos y no-numéricos (opacidad 0)
    ]);
  map.setPaintProperty('l_votos-anulados-fill', 'circle-stroke-width', 0); // <-- sin borde
  
    map.setPaintProperty('l_votos-anulados-fill', 'circle-color', [
    'case',
    ['==', ['get', votosnulos], null], 'rgba(0,0,0,0)',  // gris para valores null que no se pueden sumar
    ['<', ['get', votosnulos], breaks[0]], '#0000ff', // azul bajo
    ['<', ['get', votosnulos], breaks[1]], '#ffff00', // amarillo medio

    '#ff0000' // rojo alto
  ]);  

  // actualizar leyenda en tu div
  legendEl.innerHTML = `
    <span>Clasificacion</span><br>
    <span style="color:#0000ff">● Bajo&nbsp&nbsp&nbsp:</span> ${min} - ${breaks[0]}<br>
    <span style="color:#ffff00">● Medio:</span> ${breaks[0]} - ${breaks[1]}<br>
    <span style="color:#ff0000">● Alto&nbsp&nbsp&nbsp&nbsp:</span> ${breaks[1]} - ${max}    
    
  `;
  legendEl.style.display = "block";
}

/* Refresca la clasificación de ganadores segun recinto  */

async function refreshMonitoreo_GanadoresPredios(map) {
  (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.mostrarLoader)();
  // Cargar/Actualizar los datos más recientes del servidor
  //    Esto actualiza la fuente 's_ganadores_predios'.
  await refreshGanadoresPredios(map);
  // simplemente recalculemos la clasificación
  clasifica_ganadores_predios(map, legend_votos_ganadores_predios);
  (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.ocultarLoader)();
}
  
// ===============================
// Recargar ganadores desde el servidor

async function refreshGanadoresPredios(map) {
  try {    
    const res = await fetch(_main_js__WEBPACK_IMPORTED_MODULE_1__.origendatos_ganadores_predios, {
      headers: { 'Accept': 'application/geo+json' }
    });
    const data = await res.json();

    // Actualizar la fuente de datos en el mapa
    if (map.getSource('s_ganadores_predios')) map.getSource('s_ganadores_predios').setData(data);  
  } catch (err) {
    console.error('Error cargando ganadores predios:', err);
  }
}

/* Clasifica los ganadores por predios según que partido gano */
function clasifica_ganadores_predios(map, legendEl) {
    const source = map.getSource("s_ganadores_predios");
    if (!source) return;

    const data = source._data || source._options.data;
    if (!data || !data.features) return;

    // 1) Obtener solo los valores únicos para saber qué mostrar en la leyenda.
    const partidosExistentes = new Set(
        data.features
            .map(f => f.properties[ganador_partido]) 
            .filter(v => v != null && v !== "" && v !== 'SIN VOTO')      //IMPOARNTA aqui filtramos sin voto pa q no muestre ni nulos ni vacios
    );

    
    // Nota: Aunque no se usará para el color, se usa para limitar la leyenda a los partidos presentes.

    if (partidosExistentes.size === 0) return;

    // 2) Construir la expresión CASE de MapLibre.
    const matchExpr = ['match', ['get', ganador_partido]];

    // Iterar directamente sobre la paleta de colores (objeto), manteniendo un orden controlado.
    Object.entries(_config_js__WEBPACK_IMPORTED_MODULE_0__.coloresPartido).forEach(([partido, color]) => {
        matchExpr.push(partido, color);
    });

    // *** RECOMENDACIÓN CLAVE: Mantener un FALLBACK a pesar de la certeza. ***
    // Esto asegura que la expresión MapLibre sea válida y cubra valores null/vacío
    // que MapLibre no "matchea" con las otras claves. Usamos un color discreto (negro).
    matchExpr.push('#000000'); 

    

    
    // Aplicar el estilo
    map.setPaintProperty('l_ganadores-predios-fill', 'circle-color', matchExpr); 

     //****** IMPORTANTE aqui se aplica elfriltro pa no mostrarLOS SIN VOTO ******
    map.setFilter('l_ganadores-predios-fill', [
        'all',
        ['!=', ['get', ganador_partido], 'SIN VOTO']
    ]);

    // 3) Construir leyenda simplificada
    let html = `<span>Clasificacion</span><br>`;

    // Iterar sobre la PALETA_PARTIDOS para un orden controlado y solo incluir los existentes en los datos.
    Object.entries(_config_js__WEBPACK_IMPORTED_MODULE_0__.coloresPartido).forEach(([partido, color]) => {
        if (partidosExistentes.has(partido)) {
             html += `<span style="color:${color}; font-size: 1.2em;">●</span> ${partido}<br>`;
        }
    });

    // *** Eliminado: Bloque de leyenda "Otros/Sin Dato" ***
    
    legendEl.innerHTML = html;
    legendEl.style.display = "block";
}



/***/ }),

/***/ "./mun/municipios.js":
/*!***************************!*\
  !*** ./mun/municipios.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForzarRemoverPanelAtributosMun: () => (/* binding */ ForzarRemoverPanelAtributosMun),
/* harmony export */   getChkBuscar_PanelAtributos_Mun: () => (/* binding */ getChkBuscar_PanelAtributos_Mun),
/* harmony export */   initMunicipiosPanel: () => (/* binding */ initMunicipiosPanel),
/* harmony export */   refreshMunicipios: () => (/* binding */ refreshMunicipios)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./mun/config.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./mun/main.js");
/* harmony import */ var _predios_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./predios.js */ "./mun/predios.js");





// Variables globales para manejar el estado
let allFeatures = [];       // Todos los predios cargados desde el servidor
let filteredFeatures = [];  // Predios después de aplicar filtros
let currentPage = 1;        // Página actual de la tabla
const pageSize = 50;        // Tamaño de página (50 registros)

let chkBuscarMun;
let panelAtributosMun;
// ===============================
// Inicialización del panel de municipios
// ===============================
function initMunicipiosPanel(map) {
  const panel = document.getElementById('panel-municipios');
  const btn = document.getElementById('btn-municipios');
  const close = document.getElementById('close-municipios');
  const chkVisualizar = document.getElementById('chk-mun-ver');
  panelAtributosMun = document.getElementById('panel-atributos-mun');
  chkBuscarMun = document.getElementById('chk-mun-buscar');

  // Abrir el panel al hacer clic en el botón del menú
  //btn.addEventListener('click', () => panel.style.display = 'block');
  btn.addEventListener('click', () => {
    const estado_panel = window.getComputedStyle(panel).display;
    if (estado_panel === 'block') {
      panel.style.display = 'none';
      chkVisualizar.checked = false;
      chkBuscarMun.checked = false;
      //document.getElementById('panel-atributos-mun').style.display = 'none';   ///esto ya no va se lo hara por transicion
      ocultarPanelMun();
      // Ocultar capa de municipios y limpiar selección
      map.setLayoutProperty('l_municipios-fill', 'visibility', 'none');      //oculto fill
      map.setLayoutProperty('l_municipios-line', 'visibility', 'none');        //ojo tambien ocultar line porq se maneja fondo y borde
      map.getSource('highlight_municipios').setData({ type: 'FeatureCollection', features: [] });
    } else if (estado_panel === 'none') {
      panel.style.display = 'block'
    }
  });

  /*   //// esto ya no va se hace en btn-municipios
  // Cerrar el panel y limpiar el estado
  close.addEventListener('click', () => {
    panel.style.display = 'none';
    chkVisualizar.checked = false;
    document.getElementById('chk-mun-buscar').checked = false;
    document.getElementById('panel-atributos-mun').style.display = 'none';

    // Ocultar capa de predios y limpiar selección
    map.setLayoutProperty('l_municipios-fill', 'visibility', 'none');
    map.setLayoutProperty('l_municipios-line', 'visibility', 'none');
    map.getSource('highlight_municipios').setData({ type: 'FeatureCollection', features: [] });
  });
*/
  // Activar/Desactivar visualización de predios en el mapa
  chkVisualizar.addEventListener('change', async e => {
    const vis = e.target.checked ? 'visible' : 'none';
    map.setLayoutProperty('l_municipios-fill', 'visibility', vis);
    map.setLayoutProperty('l_municipios-line', 'visibility', vis);

    // Si se activa, cargar los datos desde el servidor
    if (e.target.checked) {
      (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.mostrarLoader)();
      await refreshMunicipios(map);
      (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.ocultarLoader)();
      
      //zoom a municipios
      const source = map.getSource('s_municipios');
      console.log('NNONOOOO entra  source muni',source);
      if (source && source._data && source._data.features.length > 0) {
        // Calculamos el centro de todos los municipios juntos
        console.log('entra a sorce muni',source);
        const center = turf.center(source._data).geometry.coordinates;
        map.flyTo({
          center: center,
          zoom: 10,   // ajusta según necesites
          speed: 0.8,
          curve: 1.2,
          essential: true
        });

      }
    }
  });

  function mostrarPanelMun() {
    // 1. Lo pone en el flujo para que pueda hacer la transición.
    panelAtributosMun.style.display = 'block';

    // 2. Añade la clase 'show' (opacity: 0 -> 1).
    setTimeout(() => {
      panelAtributosMun.classList.add('show');
    }, 10);
  }

  function ocultarPanelMun() {
    // 1. Quita la clase 'show' (opacity: 1 -> 0).
    panelAtributosMun.classList.remove('show');

    // 2. Espera la transición (1.5s) para liberar el espacio totalmente.
    setTimeout(() => {
      if (!panelAtributosMun.classList.contains('show')) {
        panelAtributosMun.style.display = 'none';
      }
    }, 1500);
  }

  // Mostrar/Ocultar la tabla de atributos
  chkBuscarMun.addEventListener('change', async e => {
    

    // limpiar selección de predios
    map.getSource('highlight_municipios').setData({ type: 'FeatureCollection', features: [] });
    // Si se activa, cargar datos en la tabla
    if (e.target.checked) {
      //Usa las variables importadas y la función importada
      const { chkBuscar: chkbuscar_predio, panelAtributos: panelatributos_predio} = (0,_predios_js__WEBPACK_IMPORTED_MODULE_2__.getChkBuscar_PanelAtributos_predios)();
      if (chkbuscar_predio) chkbuscar_predio.checked = false;
      if (panelatributos_predio) (0,_predios_js__WEBPACK_IMPORTED_MODULE_2__.ForzarRemoverPanelAtributos)(panelatributos_predio);

      mostrarPanelMun();
      (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.mostrarLoader)();
      await refreshMunicipios(map);
      (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.ocultarLoader)();
    } else {
      ocultarPanelMun();
    }
  });
}

function getChkBuscar_PanelAtributos_Mun() { 
  return { chkBuscarMun, panelAtributosMun }; 
}
// Exportamos una función para que el otro JS la llame y obtenga las referencias

// funcino q se utilizara en otro js para remover el espacio ocupado 
function ForzarRemoverPanelAtributosMun(panel_aremover) {
    if (panel_aremover) {
        panel_aremover.classList.remove('show');
        panel_aremover.style.display = 'none';
        // Limpieza de datos        
    }
}




// ===============================
// Recargar municipios desde el servidor
// ===============================
async function refreshMunicipios(map) {
  try {
    const res = await fetch(_main_js__WEBPACK_IMPORTED_MODULE_1__.origendatos_municipios, {
      headers: { 'Accept': 'application/geo+json' }
    });
    const data = await res.json();

    // Actualizar la fuente de datos en el mapa
    if (map.getSource('s_municipios')) map.getSource('s_municipios').setData(data);

    // Guardar todos los features en memoria
    allFeatures = data.features;
    filteredFeatures = [...allFeatures]; // inicialmente sin filtros
    currentPage = 1; // comenzar en la primera página

    // Construir la tabla de atributos

    buildTable(map);

  } catch (err) {
    console.error('Error cargando municipios:', err);
  }
}

// ===============================
// Construcción de la tabla (cabecera y filtros)
// ===============================
function buildTable(map) {
  if (!allFeatures || allFeatures.length === 0) return;

  const thead = document.querySelector('#tabla-atributos-mun thead');
  const filterContainer = document.getElementById('filterContainer-mun');

  // Crear cabecera de tabla con los campos configurados
  thead.innerHTML = '<tr>' + _config_js__WEBPACK_IMPORTED_MODULE_0__.tableFields_mun.map(f => `<th>${f}</th>`).join('') + '</tr>';
  filterContainer.innerHTML = '';

  // Crear inputs de filtro dinámicamente
  _config_js__WEBPACK_IMPORTED_MODULE_0__.filterFields_mun.forEach(f => {
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
  const inputs = document.querySelectorAll('#filterContainer-mun input');
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
  const tbody = document.querySelector('#tabla-atributos-mun tbody');
  tbody.innerHTML = '';

  // Calcular número de páginas
  const totalPages = Math.ceil(filteredFeatures.length / pageSize);
  const start = (currentPage - 1) * pageSize;
  const pageFeatures = filteredFeatures.slice(start, start + pageSize);

  // Agregar filas de la página actual
  pageFeatures.forEach(row => {
    const tr = document.createElement('tr');

    // Crear columnas con los campos configurados
    _config_js__WEBPACK_IMPORTED_MODULE_0__.tableFields_mun.forEach(f => {
      const td = document.createElement('td');
      td.textContent = row.properties[f] || '';
      tr.appendChild(td);
    });

    // Evento: al hacer clic en una fila -> resaltar predio en el mapa
    tr.addEventListener('click', () => {
      document.querySelectorAll('#tabla-atributos-mun tbody tr').forEach(r => r.classList.remove('selected'));
      tr.classList.add('selected');
      // Centrar el mapa si es un punto o si es poligono
      if (row.geometry.type === 'Point') {
        map.flyTo({ center: row.geometry.coordinates, zoom: 16 });
      } else if (row.geometry.type === 'Polygon' || row.geometry.type === 'MultiPolygon') {
        const centroid = turf.centerOfMass(row);
        map.flyTo({ center: centroid.geometry.coordinates, zoom: 10 });
      }

      // Mostrar highlight en el mapa
      map.getSource('highlight_municipios').setData({ type: 'FeatureCollection', features: [row] });
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
    document.getElementById('panel-atributos-mun').appendChild(container);
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
  _config_js__WEBPACK_IMPORTED_MODULE_0__.sumFields_mun.forEach(f => totals[f] = 0);

  // Sumar valores sobre TODOS los registros filtrados (no solo los visibles)
  filteredFeatures.forEach(row =>
    _config_js__WEBPACK_IMPORTED_MODULE_0__.sumFields_mun.forEach(f => totals[f] += parseFloat(row.properties[f]) || 0)
  );

  // Mostrar sumatorias en la tabla
  const sumHeader = document.getElementById('sumHeader-mun');
  const sumRow = document.getElementById('sumRow-mun');
  sumHeader.innerHTML = _config_js__WEBPACK_IMPORTED_MODULE_0__.sumFields_mun.map(f => `<th>${f}</th>`).join('');
  sumRow.innerHTML = _config_js__WEBPACK_IMPORTED_MODULE_0__.sumFields_mun.map(f => `<td>${totals[f].toFixed(0)}</td>`).join('');
}

/***/ }),

/***/ "./mun/popupMunicipios.js":
/*!********************************!*\
  !*** ./mun/popupMunicipios.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initPopupMunicipios: () => (/* binding */ initPopupMunicipios)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./mun/config.js");


// Popups al hacer clic en un predio
function initPopupMunicipios(map) {


  map.on('click', 'l_municipios-fill', e => {
    // Verificar si también hay predios bajo el clic
    const predios = map.queryRenderedFeatures(e.point, { layers: ['l_predios-fill', 'l_votos-anulados-fill'] });
    if (predios.length > 0) {
      // Hay un predio encima → no mostrar municipio
      return;
    }

    const capasInteres = ['l_municipios-fill']; // capas a considerar    
    const feature = map.queryRenderedFeatures(e.point, { layers: capasInteres })[0];
    //const feature = e.features[0]; //antes era solo con una capa
    const props = feature.properties;

    const nomDep = props[_config_js__WEBPACK_IMPORTED_MODULE_0__.popupFields_mun[0]] ?? 'Sin dato'; // dep
    const nomProv = props[_config_js__WEBPACK_IMPORTED_MODULE_0__.popupFields_mun[1]] ?? 'Sin dato'; // prov
    const nomMun = props[_config_js__WEBPACK_IMPORTED_MODULE_0__.popupFields_mun[2]] ?? 'Sin dato'; // mun

 /*    // 🎨 Colores por partido (puedes ampliar esta lista)
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
    }; */

    // HTML del popup con canvas
    const html = `
      <div style="font-family:Roboto,sans-serif; font-size:13px; padding:6px; max-width:none;">
        <div><strong>Departamento:</strong> ${nomDep}</div>
        <div><strong>Provincia:</strong> ${nomProv}</div>
        <div><strong>Municipio:</strong> ${nomMun}</div>
        <canvas id="popupChart-Mun" width="440" height="260" style="margin-top:10px;"></canvas>
      </div>
    `;

    const popup = new maplibregl.Popup({ maxWidth: "none" })
      .setLngLat(e.lngLat)
      .setHTML(html)
      .addTo(map);

    setTimeout(() => {
      const ctx = document.getElementById('popupChart-Mun');
      if (!ctx) return;

      // Filtrar solo partidos con valores numéricos
      const partidos = _config_js__WEBPACK_IMPORTED_MODULE_0__.popupDatos_mun.filter(k => props[k] !== undefined && !isNaN(props[k]));
      const valores = partidos.map(k => parseFloat(props[k]));
      const colores = partidos.map(k => _config_js__WEBPACK_IMPORTED_MODULE_0__.coloresPartido[k] || '#ccc');

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

}

/***/ }),

/***/ "./mun/popupPredios.js":
/*!*****************************!*\
  !*** ./mun/popupPredios.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initPopupPredios: () => (/* binding */ initPopupPredios)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./mun/config.js");


// Popups al hacer clic en un predio
function initPopupPredios(map) {
	 
	// **TARGET DE CLIC:** Escuchamos la capa de clasificación activa
	map.on('click', ['l_predios-fill'], e => {
		//const capasInteres = ['l_predios-fill', 'l_votos-anulados-fill']; 
    const capasInteres = ['l_predios-fill']; 
		const features = map.queryRenderedFeatures(e.point, { layers: capasInteres });

		// Si no hay features en absoluto, salimos de forma segura.
		if (features.length === 0) {
			return;
		}

		// ENCONTRAR LA FEATURE CON DATOS RELEVANTES (Votos/Partidos)
		const featureConDatos = features.find(feature => {
			// Verificamos si alguna de las claves en popupDatos existe y tiene un valor numérico
			return _config_js__WEBPACK_IMPORTED_MODULE_0__.popupDatos.some(key => 
				feature.properties[key] !== undefined && !isNaN(parseFloat(feature.properties[key]))
			);
		});

		let props;
		let nomUe;
		let html;
    let popup; 

		if (featureConDatos) {
			// **CASO 1: HAY DATOS VÁLIDOS PARA EL GRÁFICO**
			props = featureConDatos.properties;
			nomUe = props[_config_js__WEBPACK_IMPORTED_MODULE_0__.popupFields[0]] ?? 'Sin dato';

			// HTML del popup con canvas
			html = `
				<div style="font-family:Roboto,sans-serif; font-size:13px; padding:6px; max-width:none;"> 
     		  <div><strong>Unidad Educativa:</strong> ${nomUe}</div>
				  <canvas id="popupChart-Predio" width="440" height="260" style="margin-top:10px;"></canvas>
				</div>
			`;
			
			// Crea el popup
			popup = new maplibregl.Popup({ maxWidth: "none" })
				.setLngLat(e.lngLat)
				.setHTML(html) 
				.addTo(map);

			// Genera el gráfico 
			// **RESTAURADO A setTimeout para garantizar que el DOM esté listo para Chart.js**
			setTimeout(() => { 
				const ctx = document.getElementById('popupChart-Predio');
				if (!ctx) return;

				// El filtro original: Asume que si no es NaN (en su forma de string o number), es válido.
				const partidos = _config_js__WEBPACK_IMPORTED_MODULE_0__.popupDatos.filter(k => props[k] !== undefined && !isNaN(props[k]));
				
				const valores = partidos.map(k => parseFloat(props[k]));
				const colores = partidos.map(k => _config_js__WEBPACK_IMPORTED_MODULE_0__.coloresPartido[k] || '#ccc');

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
					plugins: [ChartDataLabels]  // Importante para que funcione
				});
			}, 120); // Tiempo de espera
			
		} else {
			// **CASO 2: NO HAY DATOS VÁLIDOS (Se muestra la lista de UEs nulas)**
			
			// 1. Filtrar todos los features que no tienen datos válidos
			const featuresSinDatos = features.filter(feature => {
				return !_config_js__WEBPACK_IMPORTED_MODULE_0__.popupDatos.some(key => 
					feature.properties[key] !== undefined && !isNaN(parseFloat(feature.properties[key]))
				);
			});
			
			// 2. Extraer los nombres únicos (nomUe) de estos features
			const nombresUnicosSinDatos = [...new Set(
				featuresSinDatos
					.map(f => f.properties[_config_js__WEBPACK_IMPORTED_MODULE_0__.popupFields[0]] ?? 'Sin dato')
					.filter(name => name !== 'Sin dato') 
			)];
			
			// 3. Generar la lista HTML
			let listaHTML = '';
			if (nombresUnicosSinDatos.length > 0) {
				listaHTML = `<ul style="list-style:disc; margin-left:20px; padding:0;">
					${nombresUnicosSinDatos.map(nombre => `<li>${nombre}</li>`).join('')}
				</ul>`;
			} else {
				listaHTML = '<p>No se pudieron determinar los nombres de las UEs en esta ubicación.</p>';
			}

			// HTML informativo simple (popup)
			html = `
				<div style="font-family:Roboto,sans-serif; font-size:13px; padding:6px; max-width: 300px;">
					<strong style="color: #993333;">Recintos sin registro de votos con la misma ubicacion geografica:</strong>
					<p style="margin-top: 5px; margin-bottom: 5px;">Unidades Educativas:</p>
					${listaHTML}
				</div>
			`;
			
			// Crea el popup
			popup = new maplibregl.Popup({ maxWidth: "320px" })
				.setLngLat(e.lngLat)
				.setHTML(html)
				.addTo(map);
		}
	});

	// Aseguramos que el cursor cambie en ambas capas para indicar clickability
	map.on('mouseenter', 'l_predios-fill', () => map.getCanvas().style.cursor = 'pointer');
	map.on('mouseleave', 'l_predios-fill', () => map.getCanvas().style.cursor = '');
	map.on('mouseenter', 'l_votos-anulados-fill', () => map.getCanvas().style.cursor = 'pointer');
	map.on('mouseleave', 'l_votos-anulados-fill', () => map.getCanvas().style.cursor = '');
}


/***/ }),

/***/ "./mun/predios.js":
/*!************************!*\
  !*** ./mun/predios.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForzarRemoverPanelAtributos: () => (/* binding */ ForzarRemoverPanelAtributos),
/* harmony export */   getChkBuscar_PanelAtributos_predios: () => (/* binding */ getChkBuscar_PanelAtributos_predios),
/* harmony export */   initPrediosPanel: () => (/* binding */ initPrediosPanel),
/* harmony export */   refreshPredios: () => (/* binding */ refreshPredios)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./mun/config.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./mun/main.js");
/* harmony import */ var _municipios_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./municipios.js */ "./mun/municipios.js");
// ===============================
// predios.js
// ===============================
// Este módulo gestiona el panel de predios, carga los datos desde el servidor,
// construye la tabla de atributos con filtros, sumatorias y paginación,
// y permite resaltar predios en el mapa.
// ===============================





// Variables globales para manejar el estado
let allFeatures = [];       // Todos los predios cargados desde el servidor
let filteredFeatures = [];  // Predios después de aplicar filtros
let currentPage = 1;        // Página actual de la tabla
const pageSize = 50;        // Tamaño de página (50 registros)

let chkBuscar;
let panelAtributos;

// ===============================
// Inicialización del panel de predios
// ===============================
function initPrediosPanel(map) {
  const panel = document.getElementById('panel-predios');
  const btn = document.getElementById('btn-predios');
  const close = document.getElementById('close-predios');
  const chkVisualizar = document.getElementById('chk-visualizar');
  chkBuscar = document.getElementById('chk-buscar');
  panelAtributos = document.getElementById('panel-atributos');

  // Abrir el panel al hacer clic en el botón del menú
  //btn.addEventListener('click', () => panel.style.display = 'block');  //antes
  btn.addEventListener('click', () => {
    const estado_panel = window.getComputedStyle(panel).display;
    if (estado_panel === 'block') {
      panel.style.display = 'none';
      chkVisualizar.checked = false;
      chkBuscar.checked = false;
      //document.getElementById('panel-atributos').style.display = 'none';    //ya no va esto se lo hace con mostrar ocultar con transicion
      ocultarPanelAtributos();
      // Ocultar capa de predios y limpiar selección
      map.setLayoutProperty('l_predios-fill', 'visibility', 'none');
      map.getSource('highlight_predios').setData({ type: 'FeatureCollection', features: [] });
    } else if (estado_panel === 'none') {
      panel.style.display = 'block'
    }
  });

  /* ////////ya no porq se hace ahora desde el boton btn-predios
  // Cerrar el panel y limpiar el estado
  close.addEventListener('click', () => {
    panel.style.display = 'none';
    chkVisualizar.checked = false;
    document.getElementById('chk-buscar').checked = false;
    document.getElementById('panel-atributos').style.display = 'none';

    // Ocultar capa de predios y limpiar selección
    map.setLayoutProperty('l_predios-fill', 'visibility', 'none');
    map.getSource('highlight_predios').setData({ type: 'FeatureCollection', features: [] });
  });
  */

  // Activar/Desactivar visualización de predios en el mapa
  chkVisualizar.addEventListener('change', async e => {
    const vis = e.target.checked ? 'visible' : 'none';
    map.setLayoutProperty('l_predios-fill', 'visibility', vis);

    // Si se activa, cargar los datos desde el servidor
    if (e.target.checked) {
      (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.mostrarLoader)();
      await refreshPredios(map);
      (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.ocultarLoader)();
      const source = map.getSource('s_municipios');
      console.log('NNONOOOO entra  source muni',source);
      if (source && source._data && source._data.features.length > 0) {
        // Calculamos el centro de todos los municipios juntos
        console.log('entra a sorce muni',source);
        const center = turf.center(source._data).geometry.coordinates;
        map.flyTo({
          center: center,
          zoom: 10,   // ajusta según necesites
          speed: 0.8,
          curve: 1.2,
          essential: true
        });

      }
    }
  });

  function mostrarPanelAtributos() {
    panelAtributos.style.display = 'block';
    setTimeout(() => {
      panelAtributos.classList.add('show');
    }, 10);
  }

  function ocultarPanelAtributos() {
    panelAtributos.classList.remove('show');
    setTimeout(() => {
      // Solo aplica 'display: none' si el panel no fue marcado nuevamente durante el delay.
      // Esto previene un error si el usuario marca/desmarca rápidamente.
      if (!panelAtributos.classList.contains('show')) {
        panelAtributos.style.display = 'none'; // REMUEVE totalmente el elemento
        //console.log('Estado de display DESPUÉS de ocultar:', panelAtributos.style.display);
      }
    }, 1500); // <-- ESTE VALOR DEBE COINCIDIR CON TU TRANSITION TIME (1.5s)
  }

  // Mostrar/Ocultar la tabla de atributos
  chkBuscar.addEventListener('change', async e => {

    // limpiar selección de predios
    map.getSource('highlight_predios').setData({ type: 'FeatureCollection', features: [] });
    // Si se activa, cargar datos en la tabla
    if (e.target.checked) {
      const { chkBuscarMun: chkbuscar_mun, panelAtributosMun: panelatributos_mun } = (0,_municipios_js__WEBPACK_IMPORTED_MODULE_2__.getChkBuscar_PanelAtributos_Mun)();
      //removemos panel atributos municipios para q se vea panel atributos predios
      if (chkbuscar_mun) chkbuscar_mun.checked = false;
      if (panelatributos_mun) (0,_municipios_js__WEBPACK_IMPORTED_MODULE_2__.ForzarRemoverPanelAtributosMun)(panelatributos_mun);
      mostrarPanelAtributos()
      ;(0,_main_js__WEBPACK_IMPORTED_MODULE_1__.mostrarLoader)();
      await refreshPredios(map);
      (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.ocultarLoader)();
    } else {
      ocultarPanelAtributos();
    }
  });

}

// Exportamos una función para que el otro JS la llame y obtenga las referencias
function getChkBuscar_PanelAtributos_predios() {
  // 🚨 2. EXPORTACIÓN DE VALORES: Devuelve las referencias que ya han sido asignadas
  return { chkBuscar, panelAtributos };
}
// funcino q se utilizara en otro js para remover el espacio ocupado 
function ForzarRemoverPanelAtributos(panel_aremover) {
  if (panel_aremover) {
    panel_aremover.classList.remove('show');
    panel_aremover.style.display = 'none';
    // Limpieza de datos        
  }
}

// ===============================
// Recargar predios desde el servidor
// ===============================
async function refreshPredios(map) {
  try {
    // Llamada al servidor para obtener hasta 5000 registros
    //const res = await fetch(`${base_url}/collections/public.${recintos}/items?limit=5000`, {

    const res = await fetch(_main_js__WEBPACK_IMPORTED_MODULE_1__.origendatos, {
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
  thead.innerHTML = '<tr>' + _config_js__WEBPACK_IMPORTED_MODULE_0__.tableFields.map(f => `<th>${f}</th>`).join('') + '</tr>';
  filterContainer.innerHTML = '';

  // Crear inputs de filtro dinámicamente
  _config_js__WEBPACK_IMPORTED_MODULE_0__.filterFields.forEach(f => {
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
    _config_js__WEBPACK_IMPORTED_MODULE_0__.tableFields.forEach(f => {
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
      map.getSource('highlight_predios').setData({ type: 'FeatureCollection', features: [row] });
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
  _config_js__WEBPACK_IMPORTED_MODULE_0__.sumFields.forEach(f => totals[f] = 0);

  // Sumar valores sobre TODOS los registros filtrados (no solo los visibles)
  filteredFeatures.forEach(row =>
    _config_js__WEBPACK_IMPORTED_MODULE_0__.sumFields.forEach(f => totals[f] += parseFloat(row.properties[f]) || 0)
  );

  // Mostrar sumatorias en la tabla
  const sumHeader = document.getElementById('sumHeader');
  const sumRow = document.getElementById('sumRow');
  sumHeader.innerHTML = _config_js__WEBPACK_IMPORTED_MODULE_0__.sumFields.map(f => `<th>${f}</th>`).join('');
  sumRow.innerHTML = _config_js__WEBPACK_IMPORTED_MODULE_0__.sumFields.map(f => `<td>${totals[f].toFixed(0)}</td>`).join('');
}


/***/ }),

/***/ "./mun/styles.css":
/*!************************!*\
  !*** ./mun/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./mun/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./mun/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./mun/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body { margin:0; padding:0; height:100%; font-family:"Roboto",sans-serif;overflow: hidden;overscroll-behavior: none;}
#map { width:100%; height:100dvh; position:absolute; top:0; left:0; z-index:0; }
.app-header { position:absolute; top:0; left:0; width:100%; background:#46545f; color:#fff; padding:4px; text-align:center; 
            font-weight:bold; z-index:1000;font-size:16px; }
.menu-bar { position:absolute; top:26px; left:0; width:100%; display:flex; gap:2px; background:#46545f; padding:5px; 
            box-shadow:0 2px 4px rgba(0,0,0,0.2); z-index:1000;   }
.menu-bar button { background:#46545f; color:#fff; border:none; padding:8px 14px; border-radius:6px; cursor:pointer;font-size:14px; }
.menu-bar button:hover { background:rgb(123, 142, 162); }
/*.basemap-panel { position:absolute; top:120px; right:10px; background:#fff; padding:10px; border-radius:8px; font-size:14px; z-index:1000; }*/
.basemap-panel { width: 165px; background:rgba(255,255,255,0.6);   /* antes  #fff; */  padding: 10px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.3);font-size: 14px;display: visible; }
      

.atributos-panel { position:absolute; bottom:0; left:0; width:100%; max-height:35%; min-height:0; background:rgba(255,255,255,0.8); 
                  overflow:auto; border-top:2px solid #ccc; z-index:1000; padding:0px; font-size:13px; transition: width 1.5s ease, opacity 1.5s ease, padding 1.5s ease; 
                  opacity:0;pointer-events: none; display: none;}
.atributos-panel.show { opacity:1; pointer-events:auto; }                
.atributos-panel table { width:100%; border-collapse:collapse; }
.atributos-panel th, .atributos-panel td { border:1px solid #ccc; padding:4px; }

.atributos-panel-mun { position:absolute; bottom:0; left:0; width:100%; max-height:35%; min-height:0; background:rgba(255,255,255,0.8); 
                  overflow:auto; border-top:2px solid #ccc; z-index:1000; padding:0px; font-size:13px; transition: width 1.5s ease, opacity 1.5s ease, padding 1.5s ease; 
                  opacity:0;pointer-events: none; display: none;}
.atributos-panel-mun.show { opacity:1; pointer-events:auto; }                

.atributos-panel-mun table { width:100%; border-collapse:collapse; }
.atributos-panel-mun th, .atributos-panel td { border:1px solid #ccc; padding:4px; }

/*.atributos-panel th { background:#f0f0f0; position:sticky; top:0; z-index:10; }*/
/* ==== Sticky Sections ==== */

/* Encabezado principal */
#atributos-header { background:#e0e0e0; padding: 6px; font-weight: bold; position: sticky; top: 0; z-index: 20; border-bottom: 1px solid #999; 
                  min-width: 1500px; /* asegura scroll horizontal */ }
/* Filtros */
#filterContainer { background: rgb(176, 191, 207); position: sticky; top: 0px; /* debajo del header */ z-index: 19;  /*border-bottom: 1px solid #ccc;*/
                  min-width: 1500px; /* asegura scroll horizontal */;border-radius: 4px; padding: 6px; box-shadow: 2px 2px 6px rgb(0,0,0); }
#filterContainer-mun { background: #f0f0f0; padding: 6px; position: sticky; top: 0px; /* debajo del header */ z-index: 19; border-bottom: 1px solid #ccc;
                      min-width: 1500px; /* asegura scroll horizontal */ }
/* Totales */
#sumContainer { background: #fdfdfd; padding: 0px; position: sticky; top: 30px; /* debajo de filtros */ z-index: 18; border-bottom: 1px solid #ccc; 
              min-width: 1500px; /* asegura scroll horizontal */ }
#sumContainer-mun { background: #fdfdfd; padding: 0px; position: sticky; top: 30px; /* debajo de filtros */ z-index: 18; border-bottom: 1px solid #ccc;
                  min-width: 1500px; /* asegura scroll horizontal */ }
/* asegurar layout de la tabla */
#tabla-atributos { min-width: 1500px; /* asegura scroll horizontal */ border-collapse: collapse; /*table-layout: fixed;  */ /* ayuda a mantener columnas alineadas */
                  white-space: nowrap; /* evita que se partan las palabras */ border-radius: 4px; padding: 6px; box-shadow: 2px 2px 6px rgb(0,0,0); }
#tabla-atributos-mun { min-width: 1500px; /* asegura scroll horizontal */  border-collapse: collapse; /*table-layout: fixed;  */ /* ayuda a mantener columnas alineadas */
                      white-space: nowrap; /* evita que se partan las palabras */ }
/* make thead act as sticky header group (más fiable que th individuales) */
#tabla-atributos thead { position: sticky; top: 80px;                 /* ajusta este valor si cambias alturas de header/filtros/sumas */
                        display: table-header-group; z-index: 200;    /* alto para que quede encima de todo */ 
                        background: rgb(176, 191, 207);       /* fondo opaco para que no se vea lo que está debajo */
                        border-bottom: 1px solid #ccc; border-radius: 4px; padding: 4px; box-shadow: 2px 2px 6px rgb(0,0,0); }
#tabla-atributos-mun thead { position: sticky; top: 80px;                 /* ajusta este valor si cambias alturas de header/filtros/sumas */
                            display: table-header-group;  z-index: 200;   /* alto para que quede encima de todo */ 
                            background: #f0f0f0;       /* fondo opaco para que no se vea lo que está debajo */
                            border-bottom: 1px solid #ccc; }
/* estilo de las celdas de la cabecera */
#tabla-atributos thead th { padding: 6px 8px; text-align: center; vertical-align: middle; background: inherit; /* toma el background del thead */ }
#tabla-atributos-mun thead th { padding: 6px 8px; text-align: center; vertical-align: middle; background: inherit; /* toma el background del thead */ }

/* -----  PANELES LATERALES ------------ */
/* Contenedor para los paneles laterales */
.side-panels-container {
  position: absolute;
  left: 0px;
  top: 100px; /* punto de inicio desde el top del mapa */
  display: flex;
  flex-direction: column;
  gap: 10px; /* espacio entre paneles */
  z-index: 2000;  
  max-height: calc(100vh - 120px); /* ajusta 120px según tu header/menú */
  overflow-y: auto;

  background: rgba(123, 142, 162,0.5); /* fondo blanco con transparencia */
  /*backdrop-filter: blur(4px);    */      /* blur bonito sobre el mapa */
  border-radius: 8px;
  padding: 5px;
  box-shadow: 2px 2px 6px rgb(0,0,0);
  
}

.side-panels-container { scrollbar-width: thin;  /* Firefox */ scrollbar-color: #888 transparent;  /* Firefox */ transition: width 1.5s ease, opacity 1.5s ease, padding 1.5s ease; }
/* Chrome / Edge */
.side-panels-container::-webkit-scrollbar { width: 6px; }
.side-panels-container::-webkit-scrollbar-thumb { background: #888; border-radius: 3px; }
.side-panels-container::-webkit-scrollbar-thumb:hover { background: #555; }
.side-panels-container.collapsed { width: 0 !important; opacity: 0; pointer-events: none; /* para no clickear elementos cuando está colapsado */ }
#toggle-panels-btn { position: absolute; top: 68px; left: 0; z-index: 9999; color: #ffffff; border: none; cursor: pointer; padding: 6px 8px; font-size: 14px; border-radius: 0 4px 4px 0;
                    background:#46545f;}
#toggle-panels-btn:hover { background:rgb(123, 142, 162); }
.side-panel {  width: 165px; background:rgba(255,255,255,0.6);   /* antes  #fff; */  padding: 10px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.3);font-size: 14px;
            display: none; /* inicialmente ocultos */ }   
/* subpanels monitoreo*/           
.subpanel { padding: 8px 0; }
.subpanel strong { display: block; margin-bottom: 4px; color: #333; }
.side-panel hr { border: none; border-top: 1px solid #ccc; margin: 6px 0; }
/* -----  PANELES LATERALES ------------ */


/* PARA FILA SELECCIONADA ATRIBUTOS*/
.selected { background-color:#72eef6ff; }

/* LEYENDA MONITOREO */
#legend-votos-anulados-predios {font-size: 14px; padding: 6px; border: 1px solid #ccc; border-radius: 6px; background: rgba(123, 142, 162,0.5);
                    display:none; margin-top: 5px;}
#legend-votos-ganadores-predios {font-size: 14px; padding: 6px; border: 1px solid #ccc; border-radius: 6px; background: rgba(123, 142, 162,0.5);  /* antes #cfd5d3; */
                    display:none; margin-top: 5px;}
/* POPUPS*/
.maplibregl-popup { font-family: "Roboto", sans-serif; font-size: 13px; color: #333; }
.maplibregl-popup-content { padding: 8px 12px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.25);}

/*CARGANDO TODO*/
#loading { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(255, 255, 255, 0.95); border: 1px solid #ccc;
          border-radius: 8px; padding: 12px 20px; font-family: sans-serif; font-size: 14px; display: flex; align-items: center; gap: 10px; z-index: 9999;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1); }

.spinner { width: 18px; height: 18px; border: 3px solid #ccc; border-top: 3px solid #007bff; border-radius: 50%; animation: spin 1s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
 
footer { position: absolute; bottom: 1rem; width: 100%; text-align: center; font-size: 0.8rem; color: #7c8590; }`, "",{"version":3,"sources":["webpack://./mun/styles.css"],"names":[],"mappings":"AAAA,aAAa,QAAQ,EAAE,SAAS,EAAE,WAAW,EAAE,+BAA+B,CAAC,gBAAgB,CAAC,yBAAyB,CAAC;AAC1H,OAAO,UAAU,EAAE,aAAa,EAAE,iBAAiB,EAAE,KAAK,EAAE,MAAM,EAAE,SAAS,EAAE;AAC/E,cAAc,iBAAiB,EAAE,KAAK,EAAE,MAAM,EAAE,UAAU,EAAE,kBAAkB,EAAE,UAAU,EAAE,WAAW,EAAE,iBAAiB;YAC9G,gBAAgB,EAAE,YAAY,CAAC,cAAc,EAAE;AAC3D,YAAY,iBAAiB,EAAE,QAAQ,EAAE,MAAM,EAAE,UAAU,EAAE,YAAY,EAAE,OAAO,EAAE,kBAAkB,EAAE,WAAW;YACvG,oCAAoC,EAAE,YAAY,IAAI;AAClE,mBAAmB,kBAAkB,EAAE,UAAU,EAAE,WAAW,EAAE,gBAAgB,EAAE,iBAAiB,EAAE,cAAc,CAAC,cAAc,EAAE;AACpI,yBAAyB,6BAA6B,EAAE;AACxD,+IAA+I;AAC/I,iBAAiB,YAAY,EAAE,gCAAgC,IAAI,iBAAiB,GAAG,aAAa,EAAE,kBAAkB,EAAE,qCAAqC,CAAC,eAAe,CAAC,gBAAgB,EAAE;;;AAGlM,mBAAmB,iBAAiB,EAAE,QAAQ,EAAE,MAAM,EAAE,UAAU,EAAE,cAAc,EAAE,YAAY,EAAE,gCAAgC;kBAChH,aAAa,EAAE,yBAAyB,EAAE,YAAY,EAAE,WAAW,EAAE,cAAc,EAAE,iEAAiE;kBACtJ,SAAS,CAAC,oBAAoB,EAAE,aAAa,CAAC;AAChE,wBAAwB,SAAS,EAAE,mBAAmB,EAAE;AACxD,yBAAyB,UAAU,EAAE,wBAAwB,EAAE;AAC/D,2CAA2C,qBAAqB,EAAE,WAAW,EAAE;;AAE/E,uBAAuB,iBAAiB,EAAE,QAAQ,EAAE,MAAM,EAAE,UAAU,EAAE,cAAc,EAAE,YAAY,EAAE,gCAAgC;kBACpH,aAAa,EAAE,yBAAyB,EAAE,YAAY,EAAE,WAAW,EAAE,cAAc,EAAE,iEAAiE;kBACtJ,SAAS,CAAC,oBAAoB,EAAE,aAAa,CAAC;AAChE,4BAA4B,SAAS,EAAE,mBAAmB,EAAE;;AAE5D,6BAA6B,UAAU,EAAE,wBAAwB,EAAE;AACnE,+CAA+C,qBAAqB,EAAE,WAAW,EAAE;;AAEnF,kFAAkF;AAClF,8BAA8B;;AAE9B,yBAAyB;AACzB,oBAAoB,kBAAkB,EAAE,YAAY,EAAE,iBAAiB,EAAE,gBAAgB,EAAE,MAAM,EAAE,WAAW,EAAE,6BAA6B;kBAC3H,iBAAiB,EAAE,8BAA8B,EAAE;AACrE,YAAY;AACZ,mBAAmB,8BAA8B,EAAE,gBAAgB,EAAE,QAAQ,EAAE,sBAAsB,EAAE,WAAW,GAAG,iCAAiC;kBACpI,iBAAiB,EAAE,8BAA8B,EAAE,kBAAkB,EAAE,YAAY,EAAE,kCAAkC,EAAE;AAC3I,uBAAuB,mBAAmB,EAAE,YAAY,EAAE,gBAAgB,EAAE,QAAQ,EAAE,sBAAsB,EAAE,WAAW,EAAE,6BAA6B;sBAClI,iBAAiB,EAAE,8BAA8B,EAAE;AACzE,YAAY;AACZ,gBAAgB,mBAAmB,EAAE,YAAY,EAAE,gBAAgB,EAAE,SAAS,EAAE,sBAAsB,EAAE,WAAW,EAAE,6BAA6B;cACpI,iBAAiB,EAAE,8BAA8B,EAAE;AACjE,oBAAoB,mBAAmB,EAAE,YAAY,EAAE,gBAAgB,EAAE,SAAS,EAAE,sBAAsB,EAAE,WAAW,EAAE,6BAA6B;kBACpI,iBAAiB,EAAE,8BAA8B,EAAE;AACrE,gCAAgC;AAChC,mBAAmB,iBAAiB,EAAE,8BAA8B,EAAE,yBAAyB,EAAE,yBAAyB,EAAE,wCAAwC;kBAClJ,mBAAmB,EAAE,qCAAqC,EAAE,kBAAkB,EAAE,YAAY,EAAE,kCAAkC,EAAE;AACpJ,uBAAuB,iBAAiB,EAAE,8BAA8B,GAAG,yBAAyB,EAAE,yBAAyB,EAAE,wCAAwC;sBACnJ,mBAAmB,EAAE,qCAAqC,EAAE;AAClF,2EAA2E;AAC3E,yBAAyB,gBAAgB,EAAE,SAAS,kBAAkB,iEAAiE;wBAC/G,2BAA2B,EAAE,YAAY,KAAK,uCAAuC;wBACrF,8BAA8B,QAAQ,sDAAsD;wBAC5F,6BAA6B,EAAE,kBAAkB,EAAE,YAAY,EAAE,kCAAkC,EAAE;AAC7H,6BAA6B,gBAAgB,EAAE,SAAS,kBAAkB,iEAAiE;4BAC/G,2BAA2B,GAAG,YAAY,IAAI,uCAAuC;4BACrF,mBAAmB,QAAQ,sDAAsD;4BACjF,6BAA6B,EAAE;AAC3D,wCAAwC;AACxC,4BAA4B,gBAAgB,EAAE,kBAAkB,EAAE,sBAAsB,EAAE,mBAAmB,EAAE,iCAAiC,EAAE;AAClJ,gCAAgC,gBAAgB,EAAE,kBAAkB,EAAE,sBAAsB,EAAE,mBAAmB,EAAE,iCAAiC,EAAE;;AAEtJ,0CAA0C;AAC1C,0CAA0C;AAC1C;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU,EAAE,0CAA0C;EACtD,aAAa;EACb,sBAAsB;EACtB,SAAS,EAAE,0BAA0B;EACrC,aAAa;EACb,+BAA+B,EAAE,sCAAsC;EACvE,gBAAgB;;EAEhB,mCAAmC,EAAE,mCAAmC;EACxE,kCAAkC,OAAO,8BAA8B;EACvE,kBAAkB;EAClB,YAAY;EACZ,kCAAkC;;AAEpC;;AAEA,yBAAyB,qBAAqB,GAAG,YAAY,EAAE,iCAAiC,GAAG,YAAY,EAAE,iEAAiE,EAAE;AACpL,kBAAkB;AAClB,4CAA4C,UAAU,EAAE;AACxD,kDAAkD,gBAAgB,EAAE,kBAAkB,EAAE;AACxF,wDAAwD,gBAAgB,EAAE;AAC1E,mCAAmC,mBAAmB,EAAE,UAAU,EAAE,oBAAoB,EAAE,qDAAqD,EAAE;AACjJ,qBAAqB,kBAAkB,EAAE,SAAS,EAAE,OAAO,EAAE,aAAa,EAAE,cAAc,EAAE,YAAY,EAAE,eAAe,EAAE,gBAAgB,EAAE,eAAe,EAAE,0BAA0B;oBACpK,kBAAkB,CAAC;AACvC,2BAA2B,6BAA6B,EAAE;AAC1D,eAAe,YAAY,EAAE,gCAAgC,IAAI,iBAAiB,GAAG,aAAa,EAAE,kBAAkB,EAAE,qCAAqC,CAAC,eAAe;YACjK,aAAa,EAAE,yBAAyB,EAAE;AACtD,uBAAuB;AACvB,YAAY,cAAc,EAAE;AAC5B,mBAAmB,cAAc,EAAE,kBAAkB,EAAE,WAAW,EAAE;AACpE,iBAAiB,YAAY,EAAE,0BAA0B,EAAE,aAAa,EAAE;AAC1E,0CAA0C;;;AAG1C,oCAAoC;AACpC,YAAY,0BAA0B,EAAE;;AAExC,sBAAsB;AACtB,gCAAgC,eAAe,EAAE,YAAY,EAAE,sBAAsB,EAAE,kBAAkB,EAAE,mCAAmC;oBAC1H,YAAY,EAAE,eAAe,CAAC;AAClD,iCAAiC,eAAe,EAAE,YAAY,EAAE,sBAAsB,EAAE,kBAAkB,EAAE,mCAAmC,GAAG,mBAAmB;oBACjJ,YAAY,EAAE,eAAe,CAAC;AAClD,UAAU;AACV,oBAAoB,iCAAiC,EAAE,eAAe,EAAE,WAAW,EAAE;AACrF,4BAA4B,iBAAiB,EAAE,kBAAkB,EAAE,sCAAsC,CAAC;;AAE1G,gBAAgB;AAChB,WAAW,kBAAkB,EAAE,QAAQ,EAAE,SAAS,EAAE,gCAAgC,EAAE,qCAAqC,EAAE,sBAAsB;UACzI,kBAAkB,EAAE,kBAAkB,EAAE,uBAAuB,EAAE,eAAe,EAAE,aAAa,EAAE,mBAAmB,EAAE,SAAS,EAAE,aAAa;UAC9I,qCAAqC,EAAE;;AAEjD,WAAW,WAAW,EAAE,YAAY,EAAE,sBAAsB,EAAE,6BAA6B,EAAE,kBAAkB,EAAE,kCAAkC,EAAE;AACrJ,kBAAkB,KAAK,yBAAyB,EAAE,EAAE;;AAEpD,SAAS,kBAAkB,EAAE,YAAY,EAAE,WAAW,EAAE,kBAAkB,EAAE,iBAAiB,EAAE,cAAc,EAAE","sourcesContent":["html, body { margin:0; padding:0; height:100%; font-family:\"Roboto\",sans-serif;overflow: hidden;overscroll-behavior: none;}\r\n#map { width:100%; height:100dvh; position:absolute; top:0; left:0; z-index:0; }\r\n.app-header { position:absolute; top:0; left:0; width:100%; background:#46545f; color:#fff; padding:4px; text-align:center; \r\n            font-weight:bold; z-index:1000;font-size:16px; }\r\n.menu-bar { position:absolute; top:26px; left:0; width:100%; display:flex; gap:2px; background:#46545f; padding:5px; \r\n            box-shadow:0 2px 4px rgba(0,0,0,0.2); z-index:1000;   }\r\n.menu-bar button { background:#46545f; color:#fff; border:none; padding:8px 14px; border-radius:6px; cursor:pointer;font-size:14px; }\r\n.menu-bar button:hover { background:rgb(123, 142, 162); }\r\n/*.basemap-panel { position:absolute; top:120px; right:10px; background:#fff; padding:10px; border-radius:8px; font-size:14px; z-index:1000; }*/\r\n.basemap-panel { width: 165px; background:rgba(255,255,255,0.6);   /* antes  #fff; */  padding: 10px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.3);font-size: 14px;display: visible; }\r\n      \r\n\r\n.atributos-panel { position:absolute; bottom:0; left:0; width:100%; max-height:35%; min-height:0; background:rgba(255,255,255,0.8); \r\n                  overflow:auto; border-top:2px solid #ccc; z-index:1000; padding:0px; font-size:13px; transition: width 1.5s ease, opacity 1.5s ease, padding 1.5s ease; \r\n                  opacity:0;pointer-events: none; display: none;}\r\n.atributos-panel.show { opacity:1; pointer-events:auto; }                \r\n.atributos-panel table { width:100%; border-collapse:collapse; }\r\n.atributos-panel th, .atributos-panel td { border:1px solid #ccc; padding:4px; }\r\n\r\n.atributos-panel-mun { position:absolute; bottom:0; left:0; width:100%; max-height:35%; min-height:0; background:rgba(255,255,255,0.8); \r\n                  overflow:auto; border-top:2px solid #ccc; z-index:1000; padding:0px; font-size:13px; transition: width 1.5s ease, opacity 1.5s ease, padding 1.5s ease; \r\n                  opacity:0;pointer-events: none; display: none;}\r\n.atributos-panel-mun.show { opacity:1; pointer-events:auto; }                \r\n\r\n.atributos-panel-mun table { width:100%; border-collapse:collapse; }\r\n.atributos-panel-mun th, .atributos-panel td { border:1px solid #ccc; padding:4px; }\r\n\r\n/*.atributos-panel th { background:#f0f0f0; position:sticky; top:0; z-index:10; }*/\r\n/* ==== Sticky Sections ==== */\r\n\r\n/* Encabezado principal */\r\n#atributos-header { background:#e0e0e0; padding: 6px; font-weight: bold; position: sticky; top: 0; z-index: 20; border-bottom: 1px solid #999; \r\n                  min-width: 1500px; /* asegura scroll horizontal */ }\r\n/* Filtros */\r\n#filterContainer { background: rgb(176, 191, 207); position: sticky; top: 0px; /* debajo del header */ z-index: 19;  /*border-bottom: 1px solid #ccc;*/\r\n                  min-width: 1500px; /* asegura scroll horizontal */;border-radius: 4px; padding: 6px; box-shadow: 2px 2px 6px rgb(0,0,0); }\r\n#filterContainer-mun { background: #f0f0f0; padding: 6px; position: sticky; top: 0px; /* debajo del header */ z-index: 19; border-bottom: 1px solid #ccc;\r\n                      min-width: 1500px; /* asegura scroll horizontal */ }\r\n/* Totales */\r\n#sumContainer { background: #fdfdfd; padding: 0px; position: sticky; top: 30px; /* debajo de filtros */ z-index: 18; border-bottom: 1px solid #ccc; \r\n              min-width: 1500px; /* asegura scroll horizontal */ }\r\n#sumContainer-mun { background: #fdfdfd; padding: 0px; position: sticky; top: 30px; /* debajo de filtros */ z-index: 18; border-bottom: 1px solid #ccc;\r\n                  min-width: 1500px; /* asegura scroll horizontal */ }\r\n/* asegurar layout de la tabla */\r\n#tabla-atributos { min-width: 1500px; /* asegura scroll horizontal */ border-collapse: collapse; /*table-layout: fixed;  */ /* ayuda a mantener columnas alineadas */\r\n                  white-space: nowrap; /* evita que se partan las palabras */ border-radius: 4px; padding: 6px; box-shadow: 2px 2px 6px rgb(0,0,0); }\r\n#tabla-atributos-mun { min-width: 1500px; /* asegura scroll horizontal */  border-collapse: collapse; /*table-layout: fixed;  */ /* ayuda a mantener columnas alineadas */\r\n                      white-space: nowrap; /* evita que se partan las palabras */ }\r\n/* make thead act as sticky header group (más fiable que th individuales) */\r\n#tabla-atributos thead { position: sticky; top: 80px;                 /* ajusta este valor si cambias alturas de header/filtros/sumas */\r\n                        display: table-header-group; z-index: 200;    /* alto para que quede encima de todo */ \r\n                        background: rgb(176, 191, 207);       /* fondo opaco para que no se vea lo que está debajo */\r\n                        border-bottom: 1px solid #ccc; border-radius: 4px; padding: 4px; box-shadow: 2px 2px 6px rgb(0,0,0); }\r\n#tabla-atributos-mun thead { position: sticky; top: 80px;                 /* ajusta este valor si cambias alturas de header/filtros/sumas */\r\n                            display: table-header-group;  z-index: 200;   /* alto para que quede encima de todo */ \r\n                            background: #f0f0f0;       /* fondo opaco para que no se vea lo que está debajo */\r\n                            border-bottom: 1px solid #ccc; }\r\n/* estilo de las celdas de la cabecera */\r\n#tabla-atributos thead th { padding: 6px 8px; text-align: center; vertical-align: middle; background: inherit; /* toma el background del thead */ }\r\n#tabla-atributos-mun thead th { padding: 6px 8px; text-align: center; vertical-align: middle; background: inherit; /* toma el background del thead */ }\r\n\r\n/* -----  PANELES LATERALES ------------ */\r\n/* Contenedor para los paneles laterales */\r\n.side-panels-container {\r\n  position: absolute;\r\n  left: 0px;\r\n  top: 100px; /* punto de inicio desde el top del mapa */\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px; /* espacio entre paneles */\r\n  z-index: 2000;  \r\n  max-height: calc(100vh - 120px); /* ajusta 120px según tu header/menú */\r\n  overflow-y: auto;\r\n\r\n  background: rgba(123, 142, 162,0.5); /* fondo blanco con transparencia */\r\n  /*backdrop-filter: blur(4px);    */      /* blur bonito sobre el mapa */\r\n  border-radius: 8px;\r\n  padding: 5px;\r\n  box-shadow: 2px 2px 6px rgb(0,0,0);\r\n  \r\n}\r\n\r\n.side-panels-container { scrollbar-width: thin;  /* Firefox */ scrollbar-color: #888 transparent;  /* Firefox */ transition: width 1.5s ease, opacity 1.5s ease, padding 1.5s ease; }\r\n/* Chrome / Edge */\r\n.side-panels-container::-webkit-scrollbar { width: 6px; }\r\n.side-panels-container::-webkit-scrollbar-thumb { background: #888; border-radius: 3px; }\r\n.side-panels-container::-webkit-scrollbar-thumb:hover { background: #555; }\r\n.side-panels-container.collapsed { width: 0 !important; opacity: 0; pointer-events: none; /* para no clickear elementos cuando está colapsado */ }\r\n#toggle-panels-btn { position: absolute; top: 68px; left: 0; z-index: 9999; color: #ffffff; border: none; cursor: pointer; padding: 6px 8px; font-size: 14px; border-radius: 0 4px 4px 0;\r\n                    background:#46545f;}\r\n#toggle-panels-btn:hover { background:rgb(123, 142, 162); }\r\n.side-panel {  width: 165px; background:rgba(255,255,255,0.6);   /* antes  #fff; */  padding: 10px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.3);font-size: 14px;\r\n            display: none; /* inicialmente ocultos */ }   \r\n/* subpanels monitoreo*/           \r\n.subpanel { padding: 8px 0; }\r\n.subpanel strong { display: block; margin-bottom: 4px; color: #333; }\r\n.side-panel hr { border: none; border-top: 1px solid #ccc; margin: 6px 0; }\r\n/* -----  PANELES LATERALES ------------ */\r\n\r\n\r\n/* PARA FILA SELECCIONADA ATRIBUTOS*/\r\n.selected { background-color:#72eef6ff; }\r\n\r\n/* LEYENDA MONITOREO */\r\n#legend-votos-anulados-predios {font-size: 14px; padding: 6px; border: 1px solid #ccc; border-radius: 6px; background: rgba(123, 142, 162,0.5);\r\n                    display:none; margin-top: 5px;}\r\n#legend-votos-ganadores-predios {font-size: 14px; padding: 6px; border: 1px solid #ccc; border-radius: 6px; background: rgba(123, 142, 162,0.5);  /* antes #cfd5d3; */\r\n                    display:none; margin-top: 5px;}\r\n/* POPUPS*/\r\n.maplibregl-popup { font-family: \"Roboto\", sans-serif; font-size: 13px; color: #333; }\r\n.maplibregl-popup-content { padding: 8px 12px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.25);}\r\n\r\n/*CARGANDO TODO*/\r\n#loading { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(255, 255, 255, 0.95); border: 1px solid #ccc;\r\n          border-radius: 8px; padding: 12px 20px; font-family: sans-serif; font-size: 14px; display: flex; align-items: center; gap: 10px; z-index: 9999;\r\n          box-shadow: 0 2px 6px rgba(0,0,0,0.1); }\r\n\r\n.spinner { width: 18px; height: 18px; border: 3px solid #ccc; border-top: 3px solid #007bff; border-radius: 50%; animation: spin 1s linear infinite; }\r\n@keyframes spin { to { transform: rotate(360deg); } }\r\n \r\nfooter { position: absolute; bottom: 1rem; width: 100%; text-align: center; font-size: 0.8rem; color: #7c8590; }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./mun/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=darthwil.js.map