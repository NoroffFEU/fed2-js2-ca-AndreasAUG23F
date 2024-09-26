import { deletePost } from "../../api/post/delete";

export async function onDeletePost(event) {
  event.preventDefault();

  const id = event.target.id;
  console.log("deletePost", id);

  await deletePost(id);

  window.location.href = "/";
}
