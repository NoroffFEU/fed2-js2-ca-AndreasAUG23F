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

export async function readPosts(limit = 12, page = 1, tag) {
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
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
