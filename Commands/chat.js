module.exports = ({
name: "Chat",
  code: `
$getObjectProperty[cnt]
$createObject[$httpGet[http://api.brainshop.ai/get?bid=155777&key=O0Rla6COZJ8XSGPJ&uid=[uid]&msg=[$message]]
`
}) 