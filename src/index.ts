import { execCommand } from "./commands";
import { client } from "./util";
import config from "../config.json";

client.once("ready", () => {
  console.log("Bot is running...");
});

client.on("message", execCommand);

client.login(config.token);
