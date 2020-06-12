import { GIVE } from "../const.js";

type dm = import('discord.js').Message

export const give = async (msg:dm) => {
    let i = Math.floor(Math.random() * GIVE.length);
    msg.channel.send(GIVE[i])
}