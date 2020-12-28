import { embed } from "../util";
type dm = import("discord.js").Message;

export const help = async (msg: dm): Promise<void> => {
  await msg.channel.send(embed);
  console.log("Help is on the way.");
};