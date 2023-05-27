module.exports = ({
    name: "NPM",
    code: `
$getObjectProperty[name]
$getObjectProperty[version]
$getObjectProperty[downloads]
$getObjectProperty[last_update]
$getObjectProperty[author]
$getObjectProperty[description]  
$createObject[$jsonRequest[https://hunterapi.tk/api/npm?package=$toLowercase[$message]]]`
})