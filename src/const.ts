import { prefix } from "../config.json"

export const CALLSIGN = new RegExp(`/^${prefix}s.+/i`); // callsign in regex
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

export const HELP =
  "Use `:9` to interact with Daisy!\n `:9`: \n`daisy,` [question]\n`help`\n`give`\n [treat]\n[rub]\n[scratch]";
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
