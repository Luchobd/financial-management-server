import { Router } from "express";
import {
  registerController,
  loginController,
  sendChangeMailController,
  forgotPasswordController,
} from "../controllers/auth.controllers";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/forgot-password", sendChangeMailController);
router.post("/change-password", forgotPasswordController);

export default router;
