import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

/**
 * Creates a new blog post with the provided title, body, tags, and media.
 *
 * @param {Object} postDetails - The details of the post to be created.
 * @param {string} postDetails.title - The title of the post.
 * @param {string} postDetails.body - The content of the post.
 * @param {Array<string>} postDetails.tags - An array of tags associated with the post.
 * @param {string} postDetails.image - The URL of the post's image.
 * @param {string} postDetails.alt - The alt text for the image.
 * @returns {Promise<Object|undefined>} A promise that resolves to the created post data if successful, otherwise undefined.
 */

export async function createPost({ title, body, tags, image, alt }) {
  const blogBody = {
    title: title,
    body: body,
    tags: [tags],
    media: {
      url: image,
      alt: alt,
    },
  };

  console.log("request body", blogBody);
  try {
    const response = await fetch(API_SOCIAL_POSTS, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(blogBody),
    });

    console.log("Request Payload", JSON.stringify(blogBody, null, 2));
    console.log("Response", response);

    if (response.ok) {
      const data = await response.json();
      console.log("Post created", data);
      return data;
    }
  } catch (error) {
    console.error("An error occurred", error);
  }
}
