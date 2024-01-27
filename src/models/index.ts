import connection from "../config/db.config";
import Post from "./Posts";
import User from "./User";
import Comment from "./Comments";
import Channel from "./Channels";
const sequelize = connection;

User.hasMany(Post, { foreignKey: "userId", onDelete: "CASCADE" });
//user has many channels
Post.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });
// User.hasMany(Comment, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(Channel, { foreignKey: "userId", onDelete: "CASCADE" });
Channel.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });

const syncDB = async () => {
  await sequelize.sync();
  console.log("All models were synchronized successfully.");
};
export default syncDB;
