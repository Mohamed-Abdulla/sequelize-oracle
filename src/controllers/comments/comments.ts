import { Request, Response } from "express";
import Comment from "../../models/Comments";

export const createComment = async (req: Request, res: Response) => {
  try {
    await Comment.create({ commentName: "new Comment", userId: 1 });
    res.send("Comment created");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.send("Comment not created");
  }
};
