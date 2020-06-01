# TODO List

* [x] Setup project / dependencies
    * npm i discord.js dotenv
* [x]  Setup eslint
    * npm i -D eslint
    * npx eslint -- init
* [x] Create a Discord Application / Bot
* [x] Add bot to Server
* [ ] Setup basic response commmands
* [ ] Migrate to GCP
* [ ] Add additional commands
    * give: 
        * [treat] _gives treat to Daisy_
        * [rub] (**defaults** to `belly`)
        * [scratch] (**defaults** to `behind ears`) 
    * teach 
        * [trick] (user defined trick name **defaults** to `ERR_RESP`)
            * [emoji] (user defined emoji to display **defaults** to `none`)
            <!-- you can overwrite a trick by calling it again (maybe we should use confirmation)-->
    * (trick) _performs trick and displays related emoji_
* [ ] Integrate CDN for image hosting/GIFs (optional)