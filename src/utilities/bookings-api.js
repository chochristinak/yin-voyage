import sendRequest from "./send-request";
const BASE_URL = "/api/bookings";

export async function getAll() {
  return sendRequest(BASE_URL);
}
export async function submitRequest() {
  return sendRequest(`${BASE_URL}`);
}

export async function newBooking(retreatId) {
  return sendRequest(`${BASE_URL}/retreat/${retreatId}`, "POST");
}

export async function updateRetreat(retreatId, newQty) {
  return sendRequest(`${BASE_URL}/retreat/availability`, "PUT", {
    retreatId,
    newQty,
  });
}

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
