import * as CONST from "./const.js";
import * as Discord from "discord.js";

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Bot is running...");
});

client.on("message", (msg) => {
  if (CALLSIGN.exec(msg.content)) { //checks if the command is calling this bot
    let msgArray = msg.content.split(" ");
    if (COMMANDS.contain(msgArray[1])) {
      
    } else {
      msg.channel.send(ERROR_RESP); // reminds you to use appropriate channel
    }
  }
});

client.login(process.env.BOT_TOKEN);
