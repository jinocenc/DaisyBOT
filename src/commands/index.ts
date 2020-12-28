import { CALLSIGN, ERROR_RESP } from "../const.js";
import { advice } from "./advice";
import { help } from "./help";
import { give } from "./give";
import { role } from "./quiz";

type dm = import("discord.js").Message;
const COMMANDS: { [key: string]: typeof advice } = {
  "daisy,": advice,
  help: help,
  give: give,
  w2p: role,
};

export const execCommand = async (msg: dm): Promise<void> => {
  if (!msg.guild) return;
  if (CALLSIGN.test(msg.content)) {
    //checks if the command is calling this bot
    const msgArray = msg.content.split(" ");
    if (Object.keys(COMMANDS).includes(msgArray[1].toLowerCase())) {
      const command: string = msgArray[1];
      await COMMANDS[command](msg);
      return;
    } else {
      msg.channel.send(ERROR_RESP); // asks you to use help function
      return;
    }
  } else return;
};
