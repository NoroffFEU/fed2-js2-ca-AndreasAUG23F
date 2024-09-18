import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

/* export async function createPost({ title, body, tags, media }) {
  const body = {
    title: title,
    body: body,
    tags: tags,
    media: media,
  };

  try {
    console.log("trying to create post");
    const response = await fetch(API_POST_CREATE, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(body),
    });

    if (response.ok) {
      alert("Post created");
      window.location.href = "/";
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    alert("An error occurred");
    console.error(error);
  }
} */

export async function createPost({ title /*body  tags, image, alt */ }) {
  const blogBody = {
    title: title,
    /* body: body,
    tags: [tags],
    media: {
      url: image,
      alt: alt,
    }, */
  };

  console.log("request body", blogBody);
  try {
    const response = await fetch(API_SOCIAL_POSTS, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(blogBody),
    });

    console.log("Request Payload", JSON.stringify(blogBody, null, 2));
    console.log("Response", response);

    if (response.ok) {
      const data = await response.json();
      console.log("Post created", data);
      return data;
    }
  } catch (error) {
    console.error("An error occurred", error);
  }
}
