// Configuración general
export const base_url = 'http://185.216.75.120:9000';
//export const base_url = 'http://127.0.0.1:9000';
export const recintos = 'v_tvotos_tue';
export const municipios = 'v_tmunicipios_v_tvotos_tue';
const maxregistros = 20000;
const geo_server = `${base_url}/collections/public.${recintos}/items?limit=${maxregistros}`; // direccion del path
const geo_server_municipios = `${base_url}/collections/public.${municipios}/items?limit=${maxregistros}`; // direccion del path
const geo_local = 'ue.geojson'; //direccion del local
const geo_local_municipios = 'municipios.geojson'; //direccion del local

export const origendatos = geo_server;
export const origendatos_municipios = geo_server_municipios;

export const limite = [
  [-73.00, -25.00],
  [-54.00, -8.00]
];

export const popupFields = [
  "des_dis","des_ue"
];
export const popupDatos = [
  "partido1","partido2","partido3","partido4","partido5",
  "partido6","partido7","partido8","partido9","votosnulos","actasnulas","actasobservadas"
];
export const tableFields = [
  "des_dis","des_ue","partido1","partido2","partido3","partido4","partido5",
  "partido6","partido7","partido8","partido9","votosnulos","actasnulas","actasobservadas"
];

export const filterFields = ["des_dis","des_ue"];
export const sumFields = [
  "partido1","partido2","partido3","partido4","partido5",
  "partido6","partido7","partido8","partido9","votosnulos","actasnulas","actasobservadas"
];

export const popupFields_mun = [
  "departamen","provincia","municipio"
];
export const popupDatos_mun = [
  "partido1","partido2","partido3","partido4","partido5",
  "partido6","partido7","partido8","partido9","votosnulos","actasnulas","actasobservadas"
];
export const tableFields_mun = [
  "departamen","provincia","municipio","partido1","partido2","partido3","partido4","partido5",
  "partido6","partido7","partido8","partido9","votosnulos","actasnulas","actasobservadas"
];

export const filterFields_mun = ["departamen","provincia","municipio"];
export const sumFields_mun = [
  "partido1","partido2","partido3","partido4","partido5",
  "partido6","partido7","partido8","partido9","votosnulos","actasnulas","actasobservadas"
];

