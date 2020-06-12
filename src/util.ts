import Discord from "discord.js";

export const embed = new Discord.MessageEmbed({
  title: "Daisy's Playhouse",
  color: 0xf1c400,
  url: 'https://github.com/jinocenc/DaisyBot',
  description: "Play with me! I need your attention :dog:",
  thumbnail: {
    url:
      "https://media.discordapp.net/attachments/549847390622973963/720909932529975296/DaisyAvatar.JPG",
  },
  fields: [
    {
      name: ":yellow_heart: Give me love",
      value: "`:9 give treat`\n`:9 give rub`\n`:9 give scratch`",
      inline: true,
    },
    {
      name: ":hatching_chick: Ask Daisy",
      value: "`:9 daisy, (question)`",
      inline: true,
    },
    { name: "\u200B", value: "\u200B" },
  ],
  footer: {
    text: "DaisyBot v1.0.1",
    icon_url: "https://media.discordapp.net/attachments/549847390622973963/720922742467330138/huh_dog.png",
  }
});
export const client = new Discord.Client();
