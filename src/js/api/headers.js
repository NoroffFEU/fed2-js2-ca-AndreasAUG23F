/**
 * Constructs and returns a Headers object with the necessary authentication and content-type headers.
 *
 * @returns {Headers} A Headers object containing the configured headers for API requests.
 */

import { accessToken, API_KEY } from "./constants";

export function headers() {
  const headers = new Headers();

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  if (accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  headers.append("Content-Type", "application/json");

  return headers;
}
