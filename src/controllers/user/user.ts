import { Request, Response } from "express";
import User from "../../models/User";

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const jane = await User.create({ name: "Jane", email: "abdabdulla78@gmail.com" });
    console.log("Jane's auto-generated ID:", jane.id);
    res.send("user created");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.send("user not created");
  }
};

//get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.send("user not created");
  }
};

//get user by id
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(user);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.send("user not created");
  }
};

//get user by email

export const getUserByEmail = async (req: Request<{ email: string }>, res: Response) => {
  const { email } = req.query;

  try {
    if (typeof email !== "string") {
      throw new Error("Email is required");
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// deleteUserById

export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.destroy({ where: { id: req.params.id } });
    res.send("user deleted");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.send("user not deleted");
  }
};
