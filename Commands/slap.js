module.exports = ({
    name: "slap",
    code: `$sendMessage[$title[Slap]
    $argscheck[>0;You have to mention someone]
    $description[<@$authorID> Slapped <@$mentioned[1]>
    $image[https://media.tenor.com/FRp1fPNMqeAAAAAj/erlik-slap.gif]
    $footer[requisted by $username]]]`
})
