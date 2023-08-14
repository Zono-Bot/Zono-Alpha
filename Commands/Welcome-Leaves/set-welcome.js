module.exports = {
    name:"set-welcome",

   code: `$title[New Welcome Channel]
$description[Set the Welcome channel to <#$mentionedChannels[1]>]


$setguildVar[wchannel;$mentionedChannels[1]]

$onlyif[$channelExists[$findChannel[$message[1];false]]==true; **$username** mention a vaild channel]

$onlyIf[$hasPerms[$guildid;$authorid;managechannels]==true; **You are missing the \`managechannels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannels]==true; **I am missing the \`managechannels\` permission**]
`
},{
    name: "remove-welcome",
    code:`
    $description[Welcome removed <#$mentionedChannels[1]>]


    $resetguildVar[wchannel;$mentionedChannels[1]]

    $onlyif[$channelExists[$findChannel[$message[1];false]]==true; **$username** mention a vaild channel]

    $onlyIf[$hasPerms[$guildid;$authorid;managechannels]==true; **You are missing the \`managechannels\` permission**]
    $onlyIf[$hasPerms[$guildid;$clientid;managechannels]==true; **I am missing the \`managechannels\` permission**]
    `


}


