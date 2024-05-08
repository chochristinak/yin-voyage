import sendRequest from "./send-request";
const BASE_URL = '/api/catalogs';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function getRetreatsByCatalog(catalogId) {
    return sendRequest(`${BASE_URL}/${catalogId}/retreats`, 'GET')
  }

