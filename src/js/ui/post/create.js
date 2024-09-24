import { createPost } from "../../api/post/create";

export async function onCreatePost(event) {
  console.log("onCreatePost");
  event.preventDefault();

  const formData = new FormData(event.target);

  const createPostData = {
    title: formData.get("title"),
    body: formData.get("body"),
    tags: formData.get("tags"),
    image: formData.get("media"),
  };

  createPost(createPostData);
}
