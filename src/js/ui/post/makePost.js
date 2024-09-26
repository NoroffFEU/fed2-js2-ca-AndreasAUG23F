/**
 * Creates and displays posts in the specified container.
 *
 * This function takes an array of user posts and an ID for the container element.
 * It creates HTML elements for each post and appends them to the outer container.
 * If the container does not exist, an error is logged to the console.
 *
 * @param {Array} userPosts - An array of post objects to be displayed.
 * @param {string} id - The ID of the HTML element where the posts will be appended.
 */

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
