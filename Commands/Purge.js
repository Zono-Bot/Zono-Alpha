module.exports = ({
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
