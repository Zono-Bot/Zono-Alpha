module.exports = ({
    name: "slap",
    code: `$sendMessage[$title[Slap]
    $argscheck[>0;You have to mention someone]
    $description[<@$authorID> Slapped <@$mentioned[1]>
    $image[1;$getObjectProperty[data.url]]
    $createObject[$jsonRequest[https://api.munlai.me/anime/gif?type=slap]
    $footer[requested by $username]]]`
})
