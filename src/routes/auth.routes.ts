import { Router } from "express";
import { AuthController } from "../auth/controller/auth.controller";

const router = Router();

const authController = new AuthController();

router.get("/register", authController.signup);

export default router;
