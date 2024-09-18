export function onLogout() {
  console.log("Logging out");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userData");
  alert("Logged out");
  window.location.href = "/auth/login/";
}
