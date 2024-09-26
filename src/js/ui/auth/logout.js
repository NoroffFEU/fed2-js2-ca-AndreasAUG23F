/**
 * Handles the user logout process.
 *
 * This function removes the user's access token and user data from
 * local storage, alerts the user that they have been logged out,
 * and redirects them to the login page.
 */

export function onLogout() {
  console.log("Logging out");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userData");
  alert("Logged out");
  window.location.href = "/auth/login/";
}
