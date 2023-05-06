module.exports = ({
name: "RC",
aliases: ["random country"],
code: `
$title[1;$getObjectProperty[countries[$random[0;250]].name_en]]
$addField[1;TLD;$getObjectProperty[countries[$random[0;250]].tld];true]
$addField[1;Country Code (v2);$getObjectProperty[countries[$random[0;250]].code_3];true]
$addField[1;Country Code (v1);$getObjectProperty[countries[$random[0;250]].code_2];true]
$addField[1;Capital;$getObjectProperty[countries[$random[0;250]].capital_en];true]
$addField[1;Dial Code;$getObjectProperty[countries[$random[0;250]].dial_code];true]
$addField[1;Continent;$getObjectProperty[countries[$random[0;250]].continent_en];true]
$image[1;https://flagcdn.com/w2560/$tolowercase[$getObjectProperty[countries[$random[0;250]].code_2]].jpg]
$color[009797]
$createObject[$jsonRequest[https://www.jsonkeeper.com/b/M2SQ]]
$cooldown[10s;you need to wait %time% for use this command.]`
});