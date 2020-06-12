import { GIVE, ERROR_RESP } from "../const.js";

type dm = import("discord.js").Message;

const THINGS: string[] = [
  "treat",
  "rub",
  "scratch",
];
export const give = async (msg: dm):  Promise<void> => {
  const msgArray = msg.content.split(" ");
  const i = Math.floor(Math.random() * GIVE.length);
  if(THINGS.includes(msgArray[2].toLowerCase())) msg.channel.send(GIVE[i]);
  else msg.channel.send(ERROR_RESP);
};
