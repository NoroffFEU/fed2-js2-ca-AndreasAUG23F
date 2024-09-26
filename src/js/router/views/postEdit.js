import { onUpdatePost } from "../../ui/post/update";
import { authGuard } from "../../utilities/authGuard";

/**
 * Initializes the form for editing an existing post and sets up the submit event listener.
 * The event listener triggers the onUpdatePost function when the form is submitted.
 */
const form = document.forms.editPost;
form.addEventListener("submit", onUpdatePost);

authGuard();
