import express from "express";
import { userSignUp, userSignIn, updateUser} from "../controllers/user.controller.js";
import { verifyUser } from "../middleware/verifyUser.js";

const router = express.Router();

router.post("/signUp", userSignUp);
router.post("/signIn", userSignIn);
router.put("/update/:id",verifyUser, updateUser);

export default router;
