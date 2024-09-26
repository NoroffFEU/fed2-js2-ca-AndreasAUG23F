import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

/**
 * Updates an existing post by its ID.
 *
 * @param {string|number} id - The ID of the post to be updated.
 * @param {Object} postData - The data to update the post with.
 * @param {string} postData.title - The new title of the post.
 * @param {string} postData.body - The new body content of the post.
 * @param {Array<string>} postData.tags - The tags associated with the post.
 * @param {Object} postData.media - The media associated with the post.
 * @returns {Promise<Object|null>} A promise that resolves to the updated post data if the update is successful, or null if an error occurs.
 */

export async function updatePost(id, { title, body, tags, media }) {
  const blogBody = {
    title: title,
    body: body,
    tags: tags,
    media: media,
  };

  console.log("request body", blogBody);

  try {
    const response = await fetch(API_SOCIAL_POSTS + "/" + id, {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify(blogBody),
    });

    console.log("Request Payload", JSON.stringify(blogBody, null, 2));
    console.log("Response", response);

    if (response.ok) {
      const data = await response.json();
      console.log("Post created", data);
      window.location.href = "/profile/";
      return data;
    }
  } catch (error) {
    console.error("An error occurred", error);
  }
}
