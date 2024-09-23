import { readPost } from "../../api/post/read";

alert("Single Post Page");

const postId = JSON.parse(localStorage.getItem("postId"));

export const showPost = async () => {
  const outerContainer = document.getElementById(id);
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

  outerContainer.appendChild(container);
  container.appendChild(title);
  container.appendChild(content);
  container.appendChild(imageDiv);
  imageDiv.appendChild(image);
};

showPost();
