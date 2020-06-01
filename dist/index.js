import { execCommand } from "./commands";
import Discord from "discord.js";
const client = new Discord.Client();
client.once("ready", () => {
    console.log("Bot is running...");
});
client.on("message", execCommand);
client.login(process.env.BOT_TOKEN);
