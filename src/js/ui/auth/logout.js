export function onLogout() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userData");
  alert("Logged out");
  window.location.href = "/auth/login";
}
