import { API_SOCIAL_POSTS, API_SOCIAL_PROFILES } from "../constants";
import { headers } from "../headers";

/**
 * Fetches a single post by its ID.
 *
 * @param {string|number} id - The ID of the post to be fetched.
 * @returns {Promise<Object|null>} A promise that resolves to the post data if found, or null if not found.
 */

export async function readPost(id) {
  try {
    const response = await fetch(API_SOCIAL_POSTS + "/" + id, {
      method: "GET",
      headers: headers(),
    });

    if (response.ok) {
      const data = await response.json();
      const post = data.data;
      console.log("singlePostResponse", post);
      return post;
    }
  } catch (error) {
    console.error(error);
  }
}

/**
 * Henter en liste med innlegg, sortert etter opprettelsesdato og begrenset til en spesifikk side.
 *
 * @param {number} [limit=12] - Maksimalt antall innlegg som skal hentes.
 * @param {number} [page=1] - Sidetallet for paginering.
 * @param {string} [tag] - Valgfri tag for å filtrere innlegg.
 * @returns {Promise<Array<Object>>} En promise som løser til en matrise av innlegg.
 */

export async function readPosts(limit = 12, page = 1, tag) {
  try {
    const response = await fetch(API_SOCIAL_POSTS, {
      method: "GET",
      headers: headers(),
    });

    if (response.ok) {
      const data = await response.json();
      let posts = data.data;

      posts = posts.sort((a, b) => new Date(b.created) - new Date(a.created));

      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;

      const paginatedPosts = posts.slice(startIndex, endIndex);

      console.log("Sorted responseData", paginatedPosts);
      return paginatedPosts;
    }
  } catch (error) {
    console.error(error);
  }
}

/**
 * Fetches posts by a specific user.
 *
 * @param {string} username - The username of the user whose posts are to be fetched.
 * @param {number} [limit=12] - The maximum number of posts to retrieve.
 * @param {number} [page=1] - The page number for pagination.
 * @param {string} [tag] - Optional tag to filter posts.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of posts by the user.
 */
export async function readPostsByUser(username, limit = 12, page = 1, tag) {
  try {
    const response = await fetch(
      API_SOCIAL_PROFILES + `/${username}?_posts=true`,
      {
        method: "GET",
        headers: headers(),
      }
    );

    if (response.ok) {
      const data = await response.json();
      const posts = data.data;
      console.log("responseData", posts);
      return posts;
    }
  } catch (error) {
    console.error(error);
  }
}
