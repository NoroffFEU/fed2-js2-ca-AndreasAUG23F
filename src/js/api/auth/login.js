import { API_AUTH_LOGIN } from "../constants"; // Sett riktig API URL for login
import { headers } from "../headers";

/**
 * Logs in a user with the provided email and password.
 *
 * @param {Object} credentials - The credentials for logging in.
 * @param {string} credentials.email - The user's email address.
 * @param {string} credentials.password - The user's password.
 * @returns {Promise<void>} A promise that resolves when the login attempt is complete.
 */

export async function login({ email, password }) {
  const body = {
    email: email,
    password: password,
  };

  try {
    console.log("trying to login");
    const response = await fetch(API_AUTH_LOGIN, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(body),
    });

    if (response.ok) {
      alert("User logged in");
      window.location.href = "/";
      const data = await response.json();
      localStorage.setItem("token", JSON.stringify(data.data.accessToken));
      localStorage.setItem("userData", JSON.stringify(data.data));
      console.log(data);
    }
  } catch (error) {
    alert("An error occurred");
    console.error(error);
  }
}
