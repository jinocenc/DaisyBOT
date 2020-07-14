var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CALLSIGN, ERROR_RESP } from "../const.js";
import { advice } from "./advice";
import { help } from "./help";
import { give } from "./give";
const COMMANDS = {
    "daisy,": advice,
    help: help,
    give: give,
};
export const execCommand = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (CALLSIGN.exec(msg.content)) {
        //checks if the command is calling this bot
        const msgArray = msg.content.split(" "); //into array
        const command = msgArray[1].toLowerCase();
        if (Object.keys(COMMANDS).includes(command.toLowerCase())) {
            //checks if command (2nd word) is one of the commands
            try {
                yield COMMANDS[command](msg);
            }
            catch (_a) {
                msg.channel.send(ERROR_RESP); //if command not found
            }
            return;
        }
        else {
            msg.channel.send(ERROR_RESP); // asks you to use help function
            return;
        }
    }
    else
        return;
});
