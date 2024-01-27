import { Router } from "express";
import { createChannel } from "../controllers/channels/channels";

const router = Router();

router.post("/channels", createChannel);

export default router;
