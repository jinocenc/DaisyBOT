import { DAISY_RESP } from "../const.js";

type dm = import("discord.js").Message;

export const advice = async (msg: dm): Promise<void> => {
  const i = Math.floor(Math.random() * DAISY_RESP.length);
  msg.channel.send(DAISY_RESP[i]);
};
