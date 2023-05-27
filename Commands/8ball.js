module.exports = ({
  name: "8ball",
  code: `
  $title[8ball]
  $description[you asked for: \`$message\`
  the answer: $randomText[Yes;No;Maybe;Ask again!;Nahhh;What?;?]
  $color[Random]
$onlyIf[$argsCount>=1;{newEmbed:
{title:Error}
{description:You did not specify any questions! :x:
\`\`\`js
Usage: !8ball <question>
Example: !8ball are tomatoes fruits?
\`\`\`}
{color:Random}
}]
$suppressErrors[an internal error happened, please try again later]
  `
});