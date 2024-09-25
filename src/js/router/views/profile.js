import { authGuard } from "../../utilities/authGuard";
import { readPostsByUser } from "../../api/post/read";
import { getKey } from "../../api/auth/key";

// Sørg for at brukeren er logget inn
authGuard();

// Hent brukernavn fra localStorage
const userData = JSON.parse(localStorage.getItem("userData"));
const username = userData.name; // Forutsetter at brukernavnet ligger her, og ikke i `data`

// Funksjon for å vise innleggene til den innloggede brukeren
export const showUserPosts = async () => {
  const outerContainer = document.getElementById("outerContainer");

  // Hent innleggene skrevet av denne brukeren
  const data = await readPostsByUser(username);
  const posts = data.posts;
  console.log("Posts", posts);
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
