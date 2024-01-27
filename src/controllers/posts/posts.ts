import { Request, Response } from "express";
import Post from "../../models/Posts";

export const createPost = async (req: Request, res: Response) => {
  try {
    await Post.create({ postName: "new Post", userId: 1 });
    res.send("Post created");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.send("Post not created");
  }
};
