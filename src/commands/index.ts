import { CALLSIGN, ERROR_RESP } from "../const.js";
import { advice } from "./advice";
import { help } from "./help";
import { give } from "./give";

type dm = import('discord.js').Message
const COMMANDS: {[key: string]: any} = {
    "daisy,": advice,
    help: help,
    give: give
}

export const execCommand = async (msg: dm ) =>{
    console.log("message received!");
    if (CALLSIGN.exec(msg.content)) { //checks if the command is calling this bot
      let msgArray = msg.content.split(" ");
      if (Object.keys(COMMANDS).includes(msgArray[1].toLowerCase())){
        let command: string = msgArray[1];
        await COMMANDS[command](msg)
        return
      }
      else {
        msg.channel.send(ERROR_RESP); // asks you to use help function
        return
      }
    } else return;
}