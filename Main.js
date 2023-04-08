
const { AoiClient } = require("aoi.js");

const bot = new AoiClient({
     token: process.env.TOKEN,
    prefix: "!",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"]
});const aoijs = require("aoi.js")

bot.command({
    name: "ping",
    code: `🏓 Pong! $pingms`
});



bot.interactionCommand({
    name: "ping",
    prototype: "SLASH",
    code: `$interactionReply[🏓 Pong! $pingms;;;;everyone;false]`
});

bot.status({
    text: "!help",
    type: "WATCHING",
    status: "online",
    time: 12
});

bot.command({
    name: "help",
    code: `
$title[Commands]
$thumbnail[https://cdn.discordapp.com/attachments/1093284756176769025/1093965881568145590/01B97D49-CBCB-4CD3-9EA7-285C7DABCD43.png]
$description[!Help, !SeverIcon, !Ping, !Prifix, !Uptime, !bMembercount, !Info, !Avatar, !Invite, !Meme, !Clear, !8ball, !yesorno]
$footer[Zono|Total: 11 Commands|]`
});

bot.command({
    name: 'ServerIcon',
    code: `
  $guildIcon[$guildID]
  `
});

bot.command({
    name: "Prifix",
    code: `
$title[Prifix]
$thumbnail[https://cdn.discordapp.com/attachments/1093284756176769025/1093965867290726460/D2298E6E-2D5D-420F-A5CC-581F295E8416.png] 
$description[PRIFIX : **!** Note this dose not change the prefix!]
$footer[Zono| Use !Help for all commands.]`
});

bot.command({
    name: 'uptime',
    code: `
  I've been up for $uptime[full] <:emoji_43:1091089320200376331> !
  `
});


bot.command({
    name: "Info",
    code: `
$title[Info]
$thumbnail[https://cdn.discordapp.com/attachments/1091034911034572818/1093807923437780992/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f313035383834333432383833313632393434332f313036333235313737303232383334323839352f616f696a7362616e6e65722e706e67.png] 
$description[Zono Alpha is made in Aoj.js

  Servers: $guildCount
  
  Members I serve: $allMembersCount

**DEVS**
kno#6139
adityaREDFLAG#5836]
$footer[Zono|Use !help|]`
});

bot.command({
name: "avatar",
code: `
    $description[<@$findMember[$message]>'s avatar]
    $image[$userAvatar[$findMember[$message]]]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
});


bot.command({
    name: "Invite",
    code: `
$title[Invite]
$thumbnail[$userAvatar[$authorID] 
$description[[Invite](https://discord.com/api/oauth2/authorize?client_id=1093080763450277898&permissions=8&scope=bot "ADD THE BOT")
[Support](https://discord.gg/r3KNBCtVFk "JOIN OUR PARTY")]
$footer[Zono Alpha|Zono Hub|]`
});



bot.command({
  name: "meme",
  code: `$httpRequest[https://meme-api.com/gimme;GET;;url;Failed]`
})


bot.command({
 name: "clear",
 aliases: ['purge','clean'],
 code: `$deleteIn[1s]
 Successfully deleted $message[1] messages :D
 $wait[1s]
 $clear[$message[1]]
 $onlyIf[$message[1]<=100;I can't purge over 100 messages! Bruh!]
 $onlyIf[$message[1]>=0;I can't 0 messages]
 $onlyIf[$isNumber[$message[1]]==true;How many messages?!1]
 $onlyIf[$argsCount==1;Provide a number between 1-100 or else...
 $onlyPerms[managemessages;BRUH! You don't have \`MANAGE MESSAGES\` permission]
 $onlyBotPerms[managemessages;I don't have \`MANAGE MESSAGES\` permission brrr!]
$suppressErrors`
});

bot.command({
    name: '8ball',
    code: `
  $description[$randomText[no;yes;Ask one more time!;Hell no!;Why!;Hahha;Nah;Bruh]
   $footer[8ball has spoken!]
  `
});

bot.command({
    name: 'yesorno',
    code: `
  $description[$randomText[no;yes]
   $footer[That's the answer!]
  `
});


const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(3000)
