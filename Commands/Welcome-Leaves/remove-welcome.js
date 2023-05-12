module.exports = ({
    name:"remove-welcome",

   code: `$title[Remove Welcome Channel]
$description[Welcome removed <#$mentionedChannels[1]>]


$resetguildVar[wchannel;$mentionedChannels[1]]

$onlyif[$channelExists[$findChannel[$message[1];false]]==true; **$username** mention a vaild channel]

$onlyIf[$hasPerms[$guildid;$authorid;managechannels]==true; **You are missing the \`managechannels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannels]==true; **I am missing the \`managechannels\` permission**]
`
})
