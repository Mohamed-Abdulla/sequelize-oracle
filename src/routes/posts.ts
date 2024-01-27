import { Router } from "express";
import { createPost } from "../controllers/posts/posts";

const router = Router();

router.post("/post", createPost);

export default router;
