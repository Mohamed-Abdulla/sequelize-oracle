import { Request, Response } from "express";
import User from "../../models/User";
import Comments from "../../models/Comments";

export const getUserComments = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: {
        model: Comments,
        attributes: ["postName"],
      },
    });
    res.send(user);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.send("user not created");
  }
};
