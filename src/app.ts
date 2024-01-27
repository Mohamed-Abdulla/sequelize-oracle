import express, { Request, Response } from "express";
import userRoutes from "./routes/user";
import postRoutes from "./routes/posts";
import commentRoutes from "./routes/comments";
import channelRoutes from "./routes/channels";

require("dotenv").config();
const app = express();

app.use(express.json());

app.use("/api/v1", userRoutes);
app.use("/api/v1", postRoutes);
app.use("/api/v1", commentRoutes);
app.use("/api/v1", channelRoutes);

app.get("/", (req: Request, res: Response): Response => {
  return res.json({ message: "Welcome to the API 🚀" });
});

export default app;
