module.exports = ({
    name: "status",
    $if: "old",
    code: `
    $sendMessage[$title[Bot status]
    $addField[Bot Status;$customEmoji[endreply] $if[$ping <= 100]
\`🟢 Working fast\`
$elseIf[$ping <= 350]
\`🔵 Working average\`
$endelseIf
$elseIf[$ping <= 620]
\`🟡 Working slow\`
$endelseIf
$elseIf[$ping => 760]
\`🔴 Working very slow\`
$endelseIf
$endIf]
    $addField[CPU Process;$customEmoji[endreply] \`$truncate[$cpu] percent\`;false]
    $addField[CPU Usage;$customEmoji[endreply] \`$truncate[$cpu[os]] percent\`;false]
    $addField[RAM Limit;$customEmoji[endreply] \`$truncate[$maxRam] megabytes\`;false]
    $addField[RAM Usage;$customEmoji[endreply] \`$truncate[$ram] megabytes\`;false]
    $addField[Delay;$customEmoji[endreply] \`$ping miliseconds\`;false]
    $addField[Latency;$customEmoji[endreply] \`$messagePing miliseconds\`;false]
    $color[#6864ff]
    $cooldown[4s;<@$authorID>, a little too quick there.{extraOptions:{delete: 3s}}]
    ;false]
    $reply[$messageID;false]
    $footer[User **!info** for more info!]
    `
})