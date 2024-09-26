import { updatePost } from "../../api/post/update";

export async function onUpdatePost(event) {
  console.log("updatePost", event.target);
  event.preventDefault();
  const postId = JSON.parse(localStorage.getItem("postId"));

  const formData = new FormData(event.target);

  const media = {
    url: formData.get("url"),
    alt: formData.get("alt"),
  };

  const updatePostData = {
    title: formData.get("title"),
    body: formData.get("body"),
    tags: formData.get("tags").split(" "),
    media: media,
  };

  updatePost(postId, updatePostData);
}
