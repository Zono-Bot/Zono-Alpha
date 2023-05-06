module.exports = ({
  name: "rps",
  aliases: ['rockpaperscissors'],
  code: `
$onlyIf[paper!=$message📃;Your Play $message
My play **$randomText[🗿;📄;✂️]**
$onlyIf[rock!=$message;Your Play $message
My play **$randomText[🗿;📄;✂️]**
$onlyIf[scrssors!=$message;Your Play $message
My play **$randomText[🗿;📄;✂️]**
  $description[What's your play? ✂️🗿📄?!]
$suppressErrors[An internal error happened, please try again later]
  `
});