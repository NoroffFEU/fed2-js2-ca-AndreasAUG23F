import { createPost } from "../../api/post/create";

/**
 * Handles the post creation process when the form is submitted.
 *
 * @param {Event} event - The event object representing the form submission.
 * Prevents the default form submission behavior and gathers form data
 * to create a new post.
 */
export async function onCreatePost(event) {
  console.log("onCreatePost");
  event.preventDefault();

  const formData = new FormData(event.target);

  const createPostData = {
    title: formData.get("title"),
    body: formData.get("body"),
    tags: formData.get("tags"),
    image: formData.get("media"),
  };

  createPost(createPostData);
}
