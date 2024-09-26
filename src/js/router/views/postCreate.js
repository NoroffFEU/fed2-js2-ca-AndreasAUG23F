import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";

authGuard();

/**
 * Initializes the form for creating a new post and sets up the submit event listener.
 * The event listener triggers the onCreatePost function when the form is submitted.
 */

const form = document.forms.createPost;

form.addEventListener("submit", onCreatePost);
