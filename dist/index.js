import { execCommand } from "./commands";
import { client } from "./util";
client.once("ready", () => {
    console.log("Bot is running...");
});
client.on("message", execCommand);
client.login(process.env.BOT_TOKEN);
