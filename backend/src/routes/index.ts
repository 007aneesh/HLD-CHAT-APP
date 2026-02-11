import { Router } from "express";
import authRoutes from "./v1/auth.route";
import chatRoutes from "./v1/chat.route";
import userRoutes from "./v1/user.route";

const router = Router();
router.use("/auth", authRoutes);
router.use("/chat", chatRoutes);
router.use("/user", userRoutes);

export default router;