import { Request, Response } from "express";
import User from "../../models/User";
import Post from "../../models/Posts";

export const getUserPosts = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: {
        model: Post,
        attributes: ["postName"],
      },
    });
    res.send(user);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.send("user not created");
  }
};
