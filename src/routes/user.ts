import { Router } from "express";
import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserByEmail,
  getUserById,
  updateUserById,
} from "../controllers/user/user";
import { getUserComments } from "../controllers/user/user.comments";
import { getUserPosts } from "../controllers/user/user.posts";

const router = Router();

//create user
router.post("/user", createUser);

//get all users
router.get("/users", getAllUsers);

//get user by id
router.get("/user/:id", getUserById);

//update user name by id
router.put("/user/:id", updateUserById);

//get user by email

router.get("/user", getUserByEmail);

//get all user posts
router.get("/user/:id/posts", getUserPosts);

router.get("/user/:id/comments", getUserComments);

//delete user by id
router.delete("/user/:id", deleteUserById);

export default router;
