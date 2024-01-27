import connection from "../config/db.config";
import { DataTypes, Optional, Model } from "sequelize";

const sequelize = connection;

interface ChannelAttributes {
  id: number;
  channelName: string;
  userId: number;
}

interface ChannelCreationAttributes extends Optional<ChannelAttributes, "id"> {}

interface ChannelInstance extends Model<ChannelAttributes, ChannelCreationAttributes>, ChannelAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Channel = sequelize.define<ChannelInstance>("Channel", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  channelName: DataTypes.STRING,
  userId: DataTypes.INTEGER,
});

export default Channel;
