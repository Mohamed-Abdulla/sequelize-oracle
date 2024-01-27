import connection from "../config/db.config";
import { DataTypes, Optional, Model } from "sequelize";

const sequelize = connection;

interface PostAttributes {
  id: number;
  postName: string;
  userId: number;
}

interface PostCreationAttributes extends Optional<PostAttributes, "id"> {}

interface PostInstance extends Model<PostAttributes, PostCreationAttributes>, PostAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Post = sequelize.define<PostInstance>("Post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  postName: DataTypes.STRING,
  userId: DataTypes.INTEGER,
});

export default Post;
