import { readPost } from "../../api/post/read";

alert("Single Post Page");

const postId = JSON.parse(localStorage.getItem("postId"));

/**
 * Fetches a single post by its ID and displays it in the UI.
 * The post is rendered inside a container with the appropriate structure,
 * including the title, content, and image if available.
 */

export const showPost = async () => {
  const outerContainer = document.getElementById("outerContainer");
  const post = await readPost(postId);
  const container = document.createElement("div");
  container.className = "postContainer";
  console.log("singlePost", post);

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
};

showPost();
