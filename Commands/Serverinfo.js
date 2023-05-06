module.exports = ({
    name: "serverinfo",
    code: `$title[$guildName]
$thumbnail[$guildIcon]
$color[0987CF]
$description[$if[$guildDescription!=;$guildDescription;server has no description]]
$addField[Creation Date;<t:$truncate[$math[$creationDate[$guildID;ms]/1000]]:D> <t:$truncate[$math[$creationDate[$guildID;ms]/1000]]:t>;true]
$addField[Verification Level;$if[$guildVerificationLevel==0;none;]
$if[$guildVerificationLevel==1;low;]
$if[$guildVerificationLevel==2 medium;]
$if[$guildVerificationLevel==3;high;]
$if[$guildVerificationLevel==4;highest;];true]
$addField[Channel Count;$numberSeparator[$channelCount]]
$addField[Role Count;$numberSeparator[$roleCount];true]
$addField[Members Status;:green_circle: $numberSeparator[$membersCount[$guildID;online;false]]
:black_circle: $numberSeparator[$membersCount[$guildID;offline;false]];true]
$addField[Owner;<@$ownerID> ($userTag[$ownerID]) **ID -** $ownerID;true]`
})
