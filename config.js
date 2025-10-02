// Configuración general
export const base_url = 'http://192.168.0.16:9000';
export const recintos = 'puntos_random_2000';
const maxregistros = 5000;
const geo_server = `${base_url}/collections/public.${recintos}/items?limit=${maxregistros}`; // direccion del path
const geo_local = 'puntos2000.geojson'; //direccion del local
export const origendatos = geo_local;

export const limite = [
  [-70.50, -23.80],
  [-53.00, -9.50]
];

export const popupFields = [
  "distrito","recinto","partido1","partido2","partido3","partido4","partido5",
  "partido6","partido7","partido8","votos_anulados","actas_anuladas","actas_observadas"
];

export const tableFields = [
  "distrito","recinto","partido1","partido2","partido3","partido4","partido5",
  "partido6","partido7","partido8","votos_anulados","actas_anuladas","actas_observadas"
];

export const filterFields = ["distrito","recinto"];
export const sumFields = [
  "partido1","partido2","partido3","partido4","partido5",
  "partido6","partido7","partido8","votos_anulados","actas_anuladas","actas_observadas"
];

