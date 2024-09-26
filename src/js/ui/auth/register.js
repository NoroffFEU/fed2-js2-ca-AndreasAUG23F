import { register } from "../../api/auth/register.js";

/**
 * Handles the registration form submission.
 *
 * This function prevents the default form submission, collects the
 * form data (name, email, and password), and calls the register
 * function with the collected data.
 *
 * @param {Event} event - The event object representing the form submission.
 */
export async function onRegister(event) {
  console.log("onRegister");
  event.preventDefault();

  const formData = new FormData(event.target);

  const registerData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  register(registerData);
}
