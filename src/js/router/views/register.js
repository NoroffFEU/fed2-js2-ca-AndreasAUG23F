import { onRegister } from "../../ui/auth/register";

const form = document.forms.register;

/**
 * Sets up the event listener for the registration form.
 * When the form is submitted, the onRegister function is called.
 */

form.addEventListener("submit", onRegister);
