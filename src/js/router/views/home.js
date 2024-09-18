import { authGuard } from "../../utilities/authGuard";
import { getKey } from "../../api/auth/key";
import { setLogoutListener } from "../../ui/global/logout";

authGuard();
setLogoutListener();
