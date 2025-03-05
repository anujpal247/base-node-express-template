import { config } from "dotenv";
config();

const ServerConfig = {
  PORT: process.env.PORT,
};

export default ServerConfig;
