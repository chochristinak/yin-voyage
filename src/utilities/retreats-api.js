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

export function updateReview(retreatId, reviewId, updatedReview) {
  return sendRequest(`${BASE_URL}/${retreatId}/reviews/${reviewId}`, 'PUT', {updatedReview, retreatId, reviewId});
}

export function deleteReview(retreatId, reviewId) {
  return sendRequest(`${BASE_URL}/${retreatId}/reviews/${reviewId}`, 'DELETE', {retreatId, reviewId});
}

export function getAllReviews(retreatId) {
  return sendRequest(`${BASE_URL}/${retreatId}/reviews/all`)
}

export function addToWishList(retreatId, wishlistItem){
   return sendRequest(`${BASE_URL}/${retreatId}/wishlist`, 'POST', {wishlistItem})
}
