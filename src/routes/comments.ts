import { Router } from "express";
import { createComment } from "../controllers/comments/comments";

const router = Router();

router.post("/comments", createComment);

export default router;
