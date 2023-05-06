module.exports = ({
name: "Colour",
  code: `
$title[**RANDOM COLOUR**]
$description [
$getObjectProperty[hex]
$getObjectProperty[name]
$getObjectProperty[image]
$createObject[$httpRequest[https://api.popcat.xyz/randomcolor]
$footer[Click the link to see the colour**]`
});