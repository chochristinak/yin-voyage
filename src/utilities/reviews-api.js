import sendRequest from "./send-request";
const BASE_URL = '/api/reviews';

export function create(retreatId, newReview) {
    console.log(retreatId, newReview)
    return sendRequest(`${BASE_URL}/new`, 'POST', {retreatId, newReview});
  }