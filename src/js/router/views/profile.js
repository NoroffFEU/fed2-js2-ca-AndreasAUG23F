import { authGuard } from "../../utilities/authGuard";
import { readPostsByUser } from "../../api/post/read";
import { getKey } from "../../api/auth/key";
import { onUpdatePost } from "../../ui/post/update";

authGuard();

const userData = JSON.parse(localStorage.getItem("userData"));
const username = userData.name;

export const showUserPosts = async () => {
  const outerContainer = document.getElementById("outerContainer");

  const data = await readPostsByUser(username);
  const posts = data.posts;
  console.log("Posts", posts);

  outerContainer.innerHTML = "";

  if (!posts.length) {
    outerContainer.innerHTML = "<p>No posts available for this user.</p>";
    return;
  }

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

    const editButton = document.createElement("button");
    editButton.innerText = "Edit Post";

    editButton.addEventListener("click", async () => {
      window.location.href = "/post/edit/";
      localStorage.setItem("post", JSON.stringify(posts.id));
    });

    container.appendChild(title);
    container.appendChild(content);
    container.appendChild(imageDiv);
    imageDiv.appendChild(image);
    container.appendChild(editButton);
    outerContainer.appendChild(container);
  });
};

showUserPosts();
