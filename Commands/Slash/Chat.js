
module.exports = {
name: "Chat",
type: "interaction",
prototype: "slash",
code: `$interactionReply[$getObjectProperty[cnt]]
$createObject[$jsonRequest[http://api.brainshop.ai/get?bid=155777&key=O0Rla6COZJ8XSGPJ&uid=[uid]&msg=]]
$slashOption[meesage]
`
}
