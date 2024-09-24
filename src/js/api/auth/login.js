import { API_AUTH_LOGIN } from "../constants"; // Sett riktig API URL for login
import { headers } from "../headers";

export async function login({ email, password }) {
  const body = {
    email: email,
    password: password,
  };

  try {
    console.log("trying to login");
    const response = await fetch(API_AUTH_LOGIN, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(body),
    });

    if (response.ok) {
      alert("User logged in");
      window.location.href = "/";
      const data = await response.json();
      localStorage.setItem("token", JSON.stringify(data.data.accessToken));
      localStorage.setItem("userData", JSON.stringify(data.data));
      console.log(data);
    }
  } catch (error) {
    alert("An error occurred");
    console.error(error);
  }
}
