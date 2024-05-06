import sendRequest from "./send-request";
const BASE_URL = '/api/bookings';

// Retrieve an unpaid order for the logged in user
export async function getAll() {
  return sendRequest(BASE_URL);
}
export function submitRequest() {
    return sendRequest(`${BASE_URL}`);
  }
  
  // Add an item to the cart
  export function newBooking(retreatId) {
    // Just send itemId for best security (no pricing)
    return sendRequest(`${BASE_URL}/retreat/${retreatId}`, 'POST');
  }
  
  // Update the item's qty in the cart
  // Will add the item to the order if not currently in the cart
  // Sending info via the data payload instead of a long URL
  export function updateRetreat(retreatId, newQty) {
    return sendRequest(`${BASE_URL}/retreat/availability`, 'PUT', { retreatId, newQty });
  }
  
  // Updates the order's (cart's) isPaid property to true
  export function addRetreat(retreatId, newBooking) {
    console.log(retreatId, newBooking)
    return sendRequest(`${BASE_URL}/${retreatId}`, 'POST', {newBooking});
  }
  
  