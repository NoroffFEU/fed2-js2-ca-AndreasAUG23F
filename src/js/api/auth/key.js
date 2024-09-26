import { API_AUTH_KEY } from "../constants.js";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW5kcmVhc2FiIiwiZW1haWwiOiJrbG9tcGVAc3R1ZC5ub3JvZmYubm8iLCJpYXQiOjE3MjY1MTUzMTh9.5GDXLDd3Q36bEMVndkn9wZIN74Ri7jn2mXB6GjrSWzY";

/**
 * Fetches the API key associated with the provided name.
 *
 * @param {string} name - The name of the API key to fetch.
 * @returns {Promise<string|undefined>} A promise that resolves to the API key, or undefined if the request fails.
 */

export async function getKey(name) {
  const body = JSON.stringify({
    name: "api-key",
  });

  try {
    const response = await fetch(API_AUTH_KEY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: body,
    });

    if (response.ok) {
      const data = await response.json();

      const apiKey = data.data.key;
    }
  } catch (error) {
    console.error(error);
  }
}

getKey().then(console.log);
