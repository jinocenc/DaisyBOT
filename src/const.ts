import config from "../config.json";

export const CALLSIGN = new RegExp(`^${config.prefix}\\s.+`,"i"); // callsign in regex
export const DAISY_RESP = [
  "_**Barks**_ | Daisy thinks that's foolish",
  "_**Wags her tail**_ | Daisy thinks it's likely",
  "_**Whimpers**_ | Daisy is unsure",
  "_**Chases after a squirrel**_ | Try asking... later..",
  "_**Rolls Over**_ | Daisy is over ittt",
  "_**Runs Away**_ | Think again..",
];
export const ERROR_RESP =
  "_**tilts head in confusion**_ Daisy doesn't quite understand what you mean, try using `:9 help` and try again";
export const GIVE = [
  "_Daisy likes that._",
  "_Daisy demands more._",
  "_Daisy isn't in the mood._",
  "_Daisy hath been satiated_",
  "_Daisy wishes you to stop_",
  "_Daisy wishes you would contine_",
  "_Daisy thinks you are being foolish_",
  "_Daisy thinks someone else should try_",
  "_Daisy is hungry_",
  "_Daisy needs some love_",
];
export const ADC = {
  S: [
    "Miss Fortune",
    "Ashe",
    "Vayne",
    "Exreal",
    "Draven",
    "Kai'Sa",
    "Jhin",
    "Samira"
  ],
};
export const SUP = {
  S: [
    "Alistar",
    "Miss Fortune",
    "Morgana",
    "Janna",
    "Maokai",
    "Leona",
    "Shen",
    "Nautilus",
    "Lulu",
    "Nami",
    "Thresh",
    "Bard"
  ]
};
export const MID = {
  S: [
    "Annie",
    "Kataraina",
    "Akali",
    "Fizz",
    "viktor",
    "Diana",
    "Zed",
    "Ekko"
  ]
};
export const JG = {
  S: [
    "Nunu & Willump",
    "Jax",
    "Evelynn",
    "Amumu",
    "Wukong",
    "Graves",
    "Hecarim",
    "Kha'Zix",
    "Kayn",
    "Ekko"
  ]
};
export const TOP = {
  S: [
    "Kayle",
    "Jax",
    "Malphite",
    "Maokai",
    "Wukong",
    "Akali",
    "Shen",
    "Fiora",
    "Camille"
  ]
};