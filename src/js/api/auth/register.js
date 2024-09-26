import { API_AUTH_REGISTER } from "../constants";
import { headers } from "../headers";

/**
 * Registers a new user with the provided name, email, and password.
 *
 * @param {Object} userInfo - The information for the user registration.
 * @param {string} userInfo.name - The user's name.
 * @param {string} userInfo.email - The user's email address.
 * @param {string} userInfo.password - The user's password.
 * @returns {Promise<void>} A promise that resolves when the registration attempt is complete.
 */

export async function register({ name, email, password }) {
  const body = {
    name: name,
    email: email,
    password: password,
  };

  try {
    console.log("trying to register");
    const response = await fetch(API_AUTH_REGISTER, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(body),
    });
    if (response.ok) {
      alert("User registered");
      window.location.href = "/auth/login/";
    }
  } catch (error) {
    alert("An error occurred");
    console.error(error);
  }
}
