// Configuración general
export const base_url = 'http://192.168.0.16:9000';
export const recintos = 'ue';
const maxregistros = 5000;
const geo_server = `${base_url}/collections/public.${recintos}/items?limit=${maxregistros}`; // direccion del path
const geo_local = 'ue.geojson'; //direccion del local
export const origendatos = geo_local;

export const limite = [
  [-70.50, -23.80],
  [-53.00, -9.50]
];

export const popupFields = [
  "des_dis","des_ue","partido1","partido2","partido3","partido4","partido5",
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

