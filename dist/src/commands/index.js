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
import { role } from "./quiz";
const COMMANDS = {
    "daisy,": advice,
    help: help,
    give: give,
    w2p: role,
};
export const execCommand = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (!msg.guild)
        return;
    if (CALLSIGN.test(msg.content)) {
        //checks if the command is calling this bot
        const msgArray = msg.content.split(" ");
        if (Object.keys(COMMANDS).includes(msgArray[1].toLowerCase())) {
            const command = msgArray[1];
            yield COMMANDS[command](msg);
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
