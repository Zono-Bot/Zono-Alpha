module.exports = ({
  name: "user",
  code: `
$sendMessage[{newEmbed:
{color:Random}
  {author:$username:$userAvatar[$findMember[$message;true]]}
  {title:$username[$findMember[$message;true]]'s Info}
  $thumbnail[$userAvatar[$findMember[$message]]]
{field:Username:\`$username[$findMember[$message;true]]\`:true}
  {field:Nickname:\`$nickname[$findMember[$message;true]]\`:true}
  {field:Tag:\`#$discriminator[$findMember[$message;true]]\`:true}
  {field:UID:\`$findMember[$message;true]\`:true}
  {field:Avatar:[Download]($userAvatar[$findMember[$message;true]]):true}
  {field:Roles:
 $userRoles[$findMember[$message;true];$guildID;mention;, ]}}]`})