import { HELP } from "../const.js";
type dm = import('discord.js').Message

export const help = async (msg:dm)=> {
    msg.channel.send(HELP)
}