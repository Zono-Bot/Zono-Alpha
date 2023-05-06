module.exports = ({
  name: "yesorno",
  code: `
  $title[**Yes Or No**]
  $description[You asked for: \`$message\`
  the answer: || $randomText[Yes;No;] ||]
  $color[Random]
$onlyIf[$argsCount>=1;{newEmbed:
{title:Error}
{description:You did not specify any questions :x:
\`\`\`js
Usage:  !yesorno <question>
Example: !yesorno are tomatoes fruits?
\`\`\`}
{color:Random}
}]
$suppressErrors[an internal error happened, please try again later]
  `
})