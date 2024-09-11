import { login } from "../../api/auth/login.js";

export async function onLogin(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const loginData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  login(loginData);
}
