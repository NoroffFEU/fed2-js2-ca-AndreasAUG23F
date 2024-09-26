import { authGuard } from "../../utilities/authGuard";
import { getKey } from "../../api/auth/key";
import { setLogoutListener } from "../../ui/global/logout";
import { makePost } from "../../ui/post/makePost";
import { readPosts } from "../../api/post/read";

authGuard();
setLogoutListener();

/**
 * Fetches the latest posts and renders them on the page.
 * It limits the number of displayed posts to the latest 12.
 */

const seePosts = async () => {
  try {
    const posts = await readPosts();

    const latestPosts = posts.length > 12 ? posts.slice(-12) : posts;

    makePost(latestPosts, "outerContainer");
  } catch (error) {
    console.error("Feil ved henting av innlegg:", error);
  }
};

seePosts();
