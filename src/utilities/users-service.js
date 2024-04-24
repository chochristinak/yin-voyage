// Service modules export business/app logic
// such as managing tokens, etc.
// Service modules often depend upon API modules
// for making AJAX requests to the server.

import * as usersAPI from './users-api';



export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  // Persist the "token" 
  localStorage.setItem('token', token)
  return getUser()
}

export async function logOut(){
  localStorage.removeItem('token')
}

export async function login(credentials){
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token)
  return getUser()

}

export function getToken(){
 const token = localStorage.getItem('token');
 if(!token) return null;
 const payload = JSON.parse(atob(token.split('.')[1]));
 if ( payload.exp < Date.now() / 1000 ) {
  localStorage.removeItem('token');
  return null;
 }
  return token;
}

export function getUser(){
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export async function checkToken() {
  // Just so that you don't forget how to use .then
  return usersAPI.checkToken()
    // checkToken returns a string, but let's 
    // make it a Date object for more flexibility
    .then(dateStr => new Date(dateStr));
}

