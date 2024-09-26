import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

/**
 * Deletes a blog post with the specified ID.
 *
 * @param {string|number} id - The ID of the post to be deleted.
 * @returns {Promise<void>} A promise that resolves when the post has been deleted successfully.
 */

export async function deletePost(id) {
  try {
    const response = await fetch(API_SOCIAL_POSTS + "/" + id, {
      method: "DELETE",
      headers: headers(),
    });

    if (response.ok) {
      alert("Post deleted successfully");
    }
  } catch (error) {
    console.error("An error occurred", error);
    console.log(error);
  }
}
