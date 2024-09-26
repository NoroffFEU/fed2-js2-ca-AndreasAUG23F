import { updatePost } from "../../api/post/update";

/**
 * Handles the post update process when the update form is submitted.
 *
 * This function prevents the default form submission behavior, retrieves the post ID from localStorage,
 * gathers the data from the form, and constructs an object representing the updated post.
 * Finally, it calls the `updatePost` function with the post ID and the updated data.
 *
 * @param {Event} event - The event object representing the form submission.
 */

export async function onUpdatePost(event) {
  console.log("updatePost", event.target);
  event.preventDefault();
  const postId = JSON.parse(localStorage.getItem("postId"));

  const formData = new FormData(event.target);

  const media = {
    url: formData.get("url"),
    alt: formData.get("alt"),
  };

  const updatePostData = {
    title: formData.get("title"),
    body: formData.get("body"),
    tags: formData.get("tags").split(" "),
    media: media,
  };

  updatePost(postId, updatePostData);
}
