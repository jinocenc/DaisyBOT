import { CALLSIGN, ERROR_RESP } from "../const.js";
import { advice } from "./advice";

type dm = import('discord.js').Message
const COMMANDS = {
    "daisy,": advice
}

export const execCommand = async (msg: dm ) =>{
    console.log("message received!");
    if (CALLSIGN.exec(msg.content)) { //checks if the command is calling this bot
      let msgArray = msg.content.split(" ");
      if (Object.keys(COMMANDS).includes(msgArray[1])){
        await COMMANDS["daisy,"](msg)
      }
       else {
        msg.channel.send(ERROR_RESP); // asks you to use help function
      }
    } else return;
}