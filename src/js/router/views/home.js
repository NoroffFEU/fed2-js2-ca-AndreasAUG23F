import { authGuard } from "../../utilities/authGuard";
import { getKey } from "../../api/auth/key";
import { setLogoutListener } from "../../ui/global/logout";
import { makePost } from "../../ui/post/makePost";

authGuard();
setLogoutListener();

getKey().then((key) => {
  console.log(key);
});

const readPosts = async () => {
  const posts = await readPosts();

  makePost(posts, "allPosts");
};

readHomepagePosts();
