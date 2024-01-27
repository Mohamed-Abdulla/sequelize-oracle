import { Request, Response } from "express";
import Channel from "../../models/Channels";

export const createChannel = async (req: Request, res: Response) => {
  try {
    const post = await Channel.create({ channelName: "new channel", userId: 1 });
    res.send("channel created");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.send("channel not created");
  }
};
