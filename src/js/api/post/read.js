import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

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

/* export async function readPosts(limit = 12, page = 1, tag) {
  try {
    const response = await fetch(API_SOCIAL_POSTS, {
      method: "GET",
      headers: headers(),
    });
    if (response.ok) {
      const data = await response.json();
      const posts = data.data;
      console.log("responseData", posts);
      return posts;
    }
  } catch (error) {
    console.error(error);
  }
} */

export async function readPosts(limit = 12, page = 1, tag) {
  try {
    const response = await fetch(API_SOCIAL_POSTS, {
      method: "GET",
      headers: headers(),
    });

    if (response.ok) {
      const data = await response.json();
      let posts = data.data;

      // Sorter postene etter "created" tidspunkt i synkende rekkefølge (nyeste først)
      posts = posts.sort((a, b) => new Date(b.created) - new Date(a.created));

      console.log("Sorted responseData", posts);
      return posts;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {
  try {
    const response = await fetch(API_SOCIAL_POSTS + `?username=${username}`, {
      method: "GET",
      headers: headers(),
    });

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
