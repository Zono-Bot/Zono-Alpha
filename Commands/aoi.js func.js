module.exports = [{
        name: "$alwaysExecute",
        aliases: ["func", "function"],
        code: `
    $addButton[1;Source Code;link;$nonEscape[$replacetext[$nonEscape[$getObjectProperty[src]];Source Code not found.;https://aoi.js.org/docs]];false]
    $addButton[1;Documentation;link;$nonEscape[$replacetext[$nonEscape[$getObjectProperty[link]];Documentation not found.;https://aoi.js.org/docs]];false]
    $author[$userTag[$authorID];$userAvatar[$authorID]]
    $title[$advancedTextSplit[$getObjectProperty[usage];[;1]]
    $addField[Example;$if[$charCount[$getObjectProperty[example]]<=650;$getObjectProperty[example];*Example is larger than 650 characters, therefore I'm unable to add it to this embed. You can find it [here]($getObjectProperty[link] "aoi.js documentation") instead.*]]
    $addField[Usage;\`$replaceText[$getObjectProperty[usage];\r;]\`]
    $addField[Description;$getObjectProperty[desc]]
    $color[White]
    $addTimestamp
    $onlyIf[$getObjectProperty[err]!=DOCS NOT FOUND||$getObjectProperty[err]!=Documentation not found.;]
    $createObject[$jsonRequest[http://pnode1.danbot.host:1463/api/aoijs/function?name=$message]]
    $onlyIf[$checkContains[$message[1];$]==true;]
    $suppressErrors
    `
}]
