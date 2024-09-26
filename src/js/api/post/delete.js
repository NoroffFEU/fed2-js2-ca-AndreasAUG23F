import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

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
