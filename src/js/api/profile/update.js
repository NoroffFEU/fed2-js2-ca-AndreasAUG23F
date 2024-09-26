/**
 * Updates the user's profile with the given avatar and banner.
 *
 * @param {string} username - The username of the profile to update.
 * @param {Object} profileData - The data to update the profile with.
 * @param {string} profileData.avatar - The new avatar URL for the profile.
 * @param {string} profileData.banner - The new banner URL for the profile.
 * @returns {Promise<Object|null>} A promise that resolves to the updated profile data if the update is successful, or null if an error occurs.
 */

export async function updateProfile(username, { avatar, banner }) {
  const profileBody = {
    avatar: avatar,
    banner: banner,
  };

  console.log("request body", profileBody);

  try {
    const response = await fetch(API_SOCIAL_PROFILES + "/" + username, {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify(profileBody),
    });

    console.log("Request Payload", JSON.stringify(profileBody, null, 2));
    console.log("Response", response);

    if (response.ok) {
      const data = await response.json();
      console.log("Profile updated", data);
      window.location.href = "/profile/";
      return data;
    }
  } catch (error) {
    console.error("An error occurred", error);
  }
}
