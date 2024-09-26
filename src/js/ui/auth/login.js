import { login } from "../../api/auth/login.js";

/**
 * Handles the login form submission.
 *
 * @param {Event} event - The event object representing the form submission.
 * Prevents the default form submission behavior, gathers the form data,
 * and calls the login function with the collected email and password.
 */
export async function onLogin(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const loginData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  login(loginData);
}
