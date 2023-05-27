module.exports = [{
    name: "$alwaysExecute",
    $if: "old",
    code: `
    $ifAwaited[$charCount[$get[content]]>=2000;{execute:createFile};{execute:showSRC}]
    $let[content;$djsEval[Buffer.from("$replaceText[$getObjectProperty[content];\n;--..--..]", "base64").toString("utf-8");true]]
    $createObject[$jsonRequest[$get[gh]]
    $let[gh;$djsEval[function formatGitHubAPIURL(repositoryURL) {
        const [, , , owner, repo, , , ...filePathParts] = repositoryURL.split("/");
        const filePath = filePathParts.join("/");
        return \`https://api.github.com/repos/$\{owner\}/$\{repo\}/contents/$\{filePath\}\`;
      }
      formatGitHubAPIURL(message.content);true]]
      $suppressErrors
      $onlyIf[$isValidLink[$message]==true&&$checkContains[$message;https://github.com/]==true;]`
}, {
    name: "createFile",
    type: "awaited",
    code: `
    $createFile[$replaceText[$replaceText[$get[content];--..--..;\n];�;];$getObjectProperty[name]]
    $title[$getObjectProperty[path];$getObjectProperty[html_url]]
    $description[\`\`\`php
The content of this file seems to be too large, created attachment instead.
\`\`\`]
    $color[White]
    $footer[Github;https://cdn.discordapp.com/attachments/1061712111052521493/1107633607536808016/25231.png]
    `
}, {
    name: "showSRC",
    type: "awaited",
    code: `
    $title[$getObjectProperty[path];$getObjectProperty[html_url]]
$description[\`\`\`$advancedTextSplit[$getObjectProperty[name];.;2]
$cropText[$replaceText[$replaceText[$get[content];--..--..;\n];�;];2000]
\`\`\`]
    $color[White]
    $footer[Github;https://cdn.discordapp.com/attachments/1061712111052521493/1107633607536808016/25231.png]
    `
}]
