import { CALLSIGN, ERROR_RESP } from "../const.js";
import { advice } from "./advice";
import { help } from "./help";
import { give } from "./give";

type dm = import("discord.js").Message;
const COMMANDS: { [key: string]: typeof advice} = {
  "daisy,": advice,
  help: help, 
  give: give,
};

export const execCommand = async (msg: dm): Promise<void> => {
  if (CALLSIGN.exec(msg.content)) {
    //checks if the command is calling this bot
    const msgArray: string[] = msg.content.split(" "); //into array
    const command: string = msgArray[1].toLowerCase();
    if (Object.keys(COMMANDS).includes(command)) {
      //checks if command (2nd word) is one of the commands
      try {
        await COMMANDS[command](msg);
      }
      catch{
        msg.channel.send(ERROR_RESP) //if command not found
      }
      return;
    } else {
      msg.channel.send(ERROR_RESP); // asks you to use help function
      return;
    }
  } else return;
};
