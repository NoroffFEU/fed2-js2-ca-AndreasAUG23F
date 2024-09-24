import { authGuard } from "../../utilities/authGuard";
import { readPostsByUser } from "../../api/post/read";
import { accessToken } from "../../api/constants";

// Sørg for at brukeren er logget inn
authGuard();

// Funksjon for å dekode JWT token og hente brukernavn
function parseJwt(token) {
  try {
    const base64Url = token.split(".")[1]; // JWT formatet er delt med "."
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Error parsing token:", error);
    return null;
  }
}

// Dekod tokenen for å få brukerinformasjon
const decodedToken = parseJwt(accessToken);

// Hent brukernavn fra tokenen (for eksempel 'andreasab')
const username = decodedToken?.name;

// Funksjon for å vise innleggene til den innloggede brukeren
export const showUserPosts = async () => {
  const outerContainer = document.getElementById("outerContainer");

  // Sjekk om brukernavnet er tilgjengelig
  if (!username) {
    outerContainer.innerHTML =
      "<p>Error: Could not determine username from token.</p>";
    return;
  }

  // Hent innleggene skrevet av denne brukeren
  const posts = await readPostsByUser(username);

  // Rens ut tidligere innhold i containeren
  outerContainer.innerHTML = ""; // Fjerner eventuell eksisterende tekst eller innlegg

  // Sjekk om det er noen innlegg, hvis ikke vis en melding
  if (!posts.length) {
    outerContainer.innerHTML = "<p>No posts available for this user.</p>";
    return;
  }

  // Loop gjennom innleggene og vis dem på siden
  posts.forEach((post) => {
    const container = document.createElement("div");
    container.className = "postContainer";

    const title = document.createElement("h2");
    title.innerText = post.title;
    title.className = "postTitle";

    const content = document.createElement("p");
    content.innerText = post.body;

    const imageDiv = document.createElement("div");
    imageDiv.className = "imageDiv";

    const image = document.createElement("img");
    if (post.media) {
      image.src = post.media.url;
      image.alt = post.media.alt;
    }
    image.className = "postImage";

    container.appendChild(title);
    container.appendChild(content);
    container.appendChild(imageDiv);
    imageDiv.appendChild(image);
    outerContainer.appendChild(container);
  });
};

// Kall funksjonen for å vise innleggene til brukeren
showUserPosts();
