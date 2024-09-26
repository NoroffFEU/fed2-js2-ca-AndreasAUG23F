import { deletePost } from "../../api/post/delete";

/**
 * Handles the post deletion process.
 *
 * This function is triggered when a user attempts to delete a post.
 * It prevents the default form submission behavior, retrieves the
 * post ID from the event target, and calls the deletePost function
 * to remove the post. After the deletion, it redirects the user
 * to the home page.
 *
 * @param {Event} event - The event object associated with the delete action.
 */

export async function onDeletePost(event) {
  event.preventDefault();

  const id = event.target.id;
  console.log("deletePost", id);

  await deletePost(id);

  window.location.href = "/";
}
