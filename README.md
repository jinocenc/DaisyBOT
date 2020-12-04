![alt text](https://media.discordapp.net/attachments/549847390622973963/720922742467330138/huh_dog.png)
# DaisyBot! Now on Discord
## Usage
* give: 
    * [treat] _gives treat to Daisy_
    * [rub] (**defaults** to `belly`)
    * [scratch] (**defaults** to `behind ears`) 
* teach 
    * [trick] (user defined trick name **defaults** to `ERR_RESP`)
        * [emoji] (user defined emoji to display **defaults** to `none`)
        <!-- you can overwrite a trick by calling it again (maybe we should use confirmation)-->
* attack
    * [user] mentions user to attack
        * [time] for this amount of time (10m)
* trick <!-- _performs trick and displays related emoji_ -->
---
## Project Roadmap
* [x] Setup project / dependencies
    * npm i discord.js dotenv
* [x]  Setup eslint
    * npm i -D eslint
    * npx eslint -- init
* [x] Create a Discord Application / Bot
* [x] Add bot to Server
* [x] Setup basic response commmands
* [x] Migrate to GCP
* [x] Add additional commands
    * [x] give
    * [ ] teach
    * [ ] attack
* [ ] Integrate CDN for image hosting/GIFs (optional)

<!-- 
_**BARK**_                                                          
_**BARK**__**BARK**_
_**BARK**__**BARK**__**BARK**_
_**BARK**__**BARK**__**BARK**__**BARK**_
_**BARK**__**BARK**__**BARK**_
_**BARK**__**BARK**_
_**BARK**_
 -->