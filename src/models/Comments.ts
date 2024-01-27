import connection from "../config/db.config";
import { DataTypes, Optional, Model } from "sequelize";

const sequelize = connection;

interface CommentAttributes {
  id: number;
  commentName: string;
  userId: number;
}
interface CommentCreationAttributes extends Optional<CommentAttributes, "id"> {}

interface CommentInstance extends Model<CommentAttributes, CommentCreationAttributes>, CommentAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Comment = sequelize.define<CommentInstance>("Comment", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  commentName: DataTypes.STRING,
  userId: DataTypes.INTEGER,
});

export default Comment;
