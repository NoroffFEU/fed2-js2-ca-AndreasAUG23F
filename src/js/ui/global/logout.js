import { onLogout } from "../auth/logout.js";

/**
 * Sets up a click event listener on the logout button.
 *
 * When the logout button is clicked, it logs a message to the console
 * and calls the onLogout function to handle the logout process.
 */
export function setLogoutListener() {
  const logoutButton = document.getElementById("logoutButton");
  logoutButton.addEventListener("click", () => {
    console.log("Logout button clicked");
    onLogout();
  });
}
