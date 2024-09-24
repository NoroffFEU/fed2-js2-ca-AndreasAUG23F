export async function updatePost(id, { title, body, tags, media }) {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("body", body);
  formData.append("tags", tags);
  formData.append("media", media);

  const response = await fetch(`/api/post/${id}`, {
    method: "PUT",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("An error occurred while updating the post");
  }

  return await response.json();
}
