import sendRequest from "./send-request";
const BASE_URL = '/api/retreats';

export async function getAll() {
  return sendRequest(BASE_URL);
}
// This function is never actually used in SEI CAFE,
// it's only provided here to remind you to follow
// RESTful routing, etc.
export async function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function bookSpot(id){
  return sendRequest(`${BASE_URL}/${id}/availability`, 'PUT')
}

export function create(retreatId, newReview) {
  console.log(retreatId, newReview)
  return sendRequest(`${BASE_URL}/${retreatId}/reviews`, 'POST', {newReview});
}

export function editReview(retreatId, editReview) {
  console.log(retreatId, editReview)
  return sendRequest(`${BASE_URL}/${retreatId}/reviews/${reviewId}/edit`, 'GET', {retreatId, editReview, reviewId});
}

export function updateReview(retreatId, updateReview) {
  console.log(retreatId, updateReview)
  return sendRequest(`${BASE_URL}/${retreatId}/reviews/${reviewId}`, 'PUT', {retreatId, updateReview, reviewId});
}

export function deleteReview(retreatId, deleteReview) {
  console.log(retreatId, deleteReview)
  return sendRequest (`${BASE_URL}/${retreatId}/reviews/${reviewId}`, 'POST', {retreatId, deleteReview, reviewId})
}

