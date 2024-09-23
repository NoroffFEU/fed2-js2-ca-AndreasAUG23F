export const makePost = (userPosts, id) => {
  const outerContainer = document.getElementById(id);

  if (!outerContainer) {
    console.error("No container with the ID:", id);
    return;
  }

  userPosts.forEach((post) => {
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

    const viewPostBtn = document.createElement("button");
    viewPostBtn.innerText = "View Post";
    viewPostBtn.className = "viewPostBtn";
    viewPostBtn.addEventListener("click", async () => {
      window.location.href = "/post/";
      localStorage.setItem("postId", JSON.stringify(post.id));
      console.log(post);
    });

    container.appendChild(title);
    container.appendChild(content);
    container.appendChild(imageDiv);
    imageDiv.appendChild(image);
    container.appendChild(viewPostBtn);

    outerContainer.appendChild(container);
  });
};
