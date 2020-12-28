var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GIVE, ERROR_RESP } from "../const.js";
const THINGS = [
    "treat",
    "rub",
    "scratch",
];
export const give = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const msgArray = msg.content.split(" ");
    const i = Math.floor(Math.random() * GIVE.length);
    if (THINGS.includes(msgArray[2].toLowerCase()))
        yield msg.channel.send(GIVE[i]);
    else
        yield msg.channel.send(ERROR_RESP);
});
