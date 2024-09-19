import { setLogoutListener } from "../../ui/global/logout";
import { onUpdateProfile } from "../../ui/profile/update";
import { authGuard } from "../../utilities/authGuard";

const form = document.forms.updateProfile;

form.addeEventListener("submit", onUpdateProfile);

authGuard();

setLogoutListener();

const readProfileInfo = async () => {
  const username = JSON.parse(localStorage.getItem("userInfo"));
  const data = await readProfileInfo(username.name);
  const userPosts = await readPostsByUser(username.name);
  const userComments = await readCommentsByUser(username.name);
  console.log(data, userPosts, userComments);
};
