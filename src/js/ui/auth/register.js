import { register } from "../../api/auth/register.js";

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
