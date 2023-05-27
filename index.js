const { AoiClient, LoadCommands } = require("aoi.js");


const bot = new AoiClient({
    token: process.env.TOKEN,
    prefix: "!", //You can change this!
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildBans", "GuildWebhooks", "GuildPresences", "GuildMembers"],
    events: ["onMessage", "onInteractionCreate", "onJoin"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});



const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./Commands/") 

//SLASH COMMAND (PING)
bot.interactionCommand({
    name: "ping",
    prototype: "slash",
    type: "interaction",
    code: `$interactionReply[🏓 Pong! $pingms;;;;everyone;true]`
});


bot.status({
    text: "!help",
    type: "WATCHING",
    status: "DND",
    time: 12
});

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Use Uptime robot to make your bot 24/7')
})
app.listen(3000)

// @<bot> (prefix command)
bot.command({
  name: "<@1093080763450277898>",
  aliases: ["<@1093080763450277898>"],
  nonPrefixed: true,
  code: `My prefix is **!**`
});


//SLASH COMMAND (USERINFO)
bot.interactionCommand({
  name: "user",
    type: "interaction",
    prototype: 'slash',
  code: `
$interactionReply[;{newEmbed:
{color:Random}
  {author:$username:$userAvatar[$findUser[$slashOption[user];true]]}
  {title:$username[$findUser[$slashOption[user];true]]'s Info}
  $image[$userAvatar[$findMember[$message]]]
{field:Username:\`$username[$findUser[$slashOption[user];true]]\`:true}
  {field:Nickname:\`$nickname[$findUser[$slashOption[user];true]]\`:true}
  {field:Tag:\`#$discriminator[$findUser[$slashOption[user];true]]\`:true}
  {field:UID:\`$findUser[$slashOption[user];true]\`:true}
  {field:Avatar:[Download]($userAvatar[$findUser[$slashOption[user];true]]):true}
  {field:Roles:
 $userRoles[$findUser[$slashOption[user];true];$guildID;mention;, ]}}]`
});


//SkyOPG :)



//Welcome (MAIN)

bot.joinCommand({ 
channel: "$getGuildVar[wchannel]", 
code: `
$title[Welcome <@$authorID>!]
$image[https://zono-api.dacooladi.repl.co/wc?avatar=$Useravatar&user=$username&discriminator=$discriminator[$authorID]
`})

 

 bot.variables({
wchannel: " "
})