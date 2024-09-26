/**
 * Checks if the user is authenticated by verifying the presence of a token in localStorage.
 * If the token is not present, it alerts the user and redirects them to the login page.
 */

export function authGuard() {
  if (!localStorage.token) {
    alert("You must be logged in to view this page");
    window.location.href = "/auth/login/";
  }
}
