import { deletePost } from "../../api/posts";

export async function onDeletePost(event) {
  event.preventDefault();

  const postId = event.target.dataset.id;

  if (!postId) {
    console.error("Post ID not found");
    return;
  }

  // Bekreft at brukeren virkelig ønsker å slette posten (valgfritt)
  const confirmDelete = confirm("Are you sure you want to delete this post?");
  if (!confirmDelete) return;

  // Kall funksjonen som sletter innlegget
  try {
    await deletePost(postId);

    // Når posten er slettet, kan du fjerne den fra UI
    const postElement = document.querySelector(`[data-post-id="${postId}"]`);
    if (postElement) {
      postElement.remove(); // Fjerner post-elementet fra DOM
    }

    // Eventuelt kan du vise en melding eller oppdatere UI på andre måter
    console.log("Post deleted successfully");
  } catch (error) {
    console.error("Error deleting post", error);
  }
}
