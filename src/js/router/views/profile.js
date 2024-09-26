import { authGuard } from "../../utilities/authGuard";
import { readPostsByUser } from "../../api/post/read";
import { onDeletePost } from "../../ui/post/delete";
import { setLogoutListener } from "../../ui/global/logout";

setLogoutListener();
authGuard();

const userData = JSON.parse(localStorage.getItem("userData"));
const username = userData.name;

/**
 * Displays the user's posts on the profile page.
 *
 * This function fetches the user's posts from the API and displays them in the DOM.
 * It creates a profile picture, banner, and username, and shows all posts
 * in a container. If no posts are available, a message is displayed.
 *
 * @async
 * @function showUserPosts
 * @returns {Promise<void>} No return value.
 */
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

  const profileContainer = document.createElement("div");
  profileContainer.className = "profileContainer";

  const avatar = document.createElement("img");
  avatar.src = userData.avatar.url;
  avatar.alt = "User Avatar";
  avatar.className = "avatar";

  const banner = document.createElement("img");
  banner.src = userData.banner.url;
  banner.alt = "User Banner";
  banner.className = "banner";

  const usernameElement = document.createElement("h1");
  usernameElement.innerText = username;
  usernameElement.className = "username";

  profileContainer.appendChild(banner);
  profileContainer.appendChild(avatar);
  profileContainer.appendChild(usernameElement);

  outerContainer.appendChild(profileContainer);

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
      localStorage.removeItem("postId");
      localStorage.setItem("postId", JSON.stringify(post.id));
      window.location.href = "/post/edit/";
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete Post";
    deleteButton.id = post.id;
    deleteButton.addEventListener("click", onDeletePost);

    container.appendChild(title);
    container.appendChild(content);
    container.appendChild(imageDiv);
    imageDiv.appendChild(image);
    container.appendChild(editButton);
    container.appendChild(deleteButton);

    outerContainer.appendChild(container);
  });
};

showUserPosts();
