import sendRequest from "./send-request";
const BASE_URL = "/api/bookings";

// Retrieve an unpaid order for the logged in user
export async function getAll() {
  return sendRequest(BASE_URL);
}
export async function submitRequest() {
  return sendRequest(`${BASE_URL}`);
}

// Add an item to the cart
export async function newBooking(retreatId) {
  // Just send itemId for best security (no pricing)
  return sendRequest(`${BASE_URL}/retreat/${retreatId}`, "POST");
}

// Update the item's qty in the cart
// Will add the item to the order if not currently in the cart
// Sending info via the data payload instead of a long URL
export async function updateRetreat(retreatId, newQty) {
  return sendRequest(`${BASE_URL}/retreat/availability`, "PUT", {
    retreatId,
    newQty,
  });
}

//Creates new booking for retreatId
export async function addRetreat(retreatId, newBooking) {
  console.log(retreatId, newBooking);
  return sendRequest(`${BASE_URL}/${retreatId}`, "POST", { newBooking });
}

export async function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, "POST");
}

export async function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}
