/*
 * ADVICE:
 * Don´t use underscore in url, throw a security alert in cypress on visit
 * */

const aspectraT = "";
const aspectraA = "https://connect-dev.amalitech-dev.net";

const acceptanceWWWUrl = "";

const develop = "";

const localhostDev = "";
const localhostProd = "";

// Environment variable imported from system-environment through CYPRESS_CUSTOM_BASE_URL
let baseUrl = aspectraA;
if (Cypress.env("CUSTOM_BASE_URL")) {
  baseUrl = Cypress.env("CUSTOM_BASE_URL");
}

let executeCaptures = true;
if (Cypress.env("EXECUTE_CAPTURES")) {
  executeCaptures = Cypress.env("EXECUTE_CAPTURES");
}
console.log("------- EXECUTE_CAPTURES: " + executeCaptures);

export default {
  baseUrl,
  acceptanceWWWUrl,
  executeCaptures,
};
