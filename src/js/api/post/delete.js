import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function deletePost(id) {
  try {
    const response = await fetch(API_SOCIAL_POSTS + `/${id}`, {
      method: "DELETE",
      headers: headers(),
    });

    if (response.ok) {
      console.log("Post deleted");
    }
  } catch (error) {
    console.error("An error occurred", error);
  }
}
