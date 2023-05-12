module.exports = ({
  name: "rps",
  aliases: ['rockpaperscissors'],
  code: `
$onlyIf[📄=$message;Your Play $message
My play **$randomText[🗿;📄;✂️]**
$onlyIf[🗿!=$message;Your Play $message
My play **$randomText[🗿;📄;✂️]**
$onlyIf[✂️!=$message;Your Play $message
My play **$randomText[🗿;📄;✂️]**
  $description[What's your play? ✂️🗿📄?!]
$suppressErrors[An internal error happened, please try again later]
  `
});