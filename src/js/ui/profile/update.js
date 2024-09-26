import { updateProfile } from "../../api/profile";

/**
 * Handles the profile update process when the update profile form is submitted.
 *
 * This function prevents the default form submission behavior, retrieves the username, avatar,
 * and banner data from the submitted form, and constructs an object representing the updated profile.
 * Finally, it calls the `updateProfile` function with the username and the updated data.
 *
 * @param {Event} event - The event object representing the form submission.
 */

export async function onUpdateProfile(event) {
  console.log("updateProfile", event.target);

  event.preventDefault();

  const formData = new FormData(event.target);
  const username = formData.get("username");
  const avatar = formData.get("avatar");
  const banner = formData.get("banner");

  console.log("Username:", username);
  console.log("Avatar:", avatar);
  console.log("Banner:", banner);

  const updateProfileData = {
    avatar: avatar,
    banner: banner,
  };
  await updateProfile(username, updateProfileData);
}

const updateProfileForm = document.getElementById("updateProfileForm");
updateProfileForm.addEventListener("submit", onUpdateProfile);
