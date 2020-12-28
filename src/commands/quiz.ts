import {ADC, SUP, JG, MID, TOP} from "../const";
import Discord, { ReactionEmoji, User } from "discord.js";
type dm = Discord.Message;

const embed = new Discord.MessageEmbed({
  title: "Who to play?",
  color: "0xf1c400",
  description: "React for role",
  thumbnail: {
    url:
      "https://media.discordapp.net/attachments/549847390622973963/720909932529975296/DaisyAvatar.JPG",
  },
  fields: [
    {
      name: ":yellow_heart: React for role",
      value: ":eggplant: | TOP\n:eggplant: | JUNGLE\n:eggplant: | MID\n:eggplant: | ADC\n:eggplant: | SUPPORT",
      inline: true,
    },
    { name: "\u200B", value: "\u200B" },
  ],
  footer: {
    text: "DaisyBot v1.0.1",
    icon_url: "https://media.discordapp.net/attachments/549847390622973963/720922742467330138/huh_dog.png",
  }
});

export const role = async (msg: dm): Promise<void> => {
  const emojis = {
    top: "😀",
    jg: "😁",
    mid: "😂",
    bot: "🤣",
    sup: "😃"
  };
  const authorID = msg.author.id;
  // send embed
  const embedID = (await msg.channel.send(embed)).id;
  const embedMsg =  await msg.channel.messages.fetch(embedID);
  // react to embed
  Object.values(emojis).forEach(e => {
    embedMsg.react(e);
  });
  // check for reactions from (original) author
  const filter = (reaction:ReactionEmoji, user:User) => Object.values(emojis).includes(reaction.name) && user.id === authorID;
  const collector = embedMsg.createReactionCollector(filter, {maxEmojis: 1});
  collector.on("end", collected => {
    const react = collected.first(1);
    if(Object.values(emojis).includes(react[0]))
  });
  /*
    1. ~~store msg.author.id~~
    2. ~~send embed~~
    3. ~~filter messages for bot.id && embed ~~
    4. ~~store embed.id~~
    5. ~~react to embed.id~~
    6. check embed for reaction from msg.author.id
    7. check for cancel message from author
    8. clear embed
    9. send message
  */
};