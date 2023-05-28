module.exports = ({
name: "roblox",
code: `$description [**Username:** $jsonRequest[https://api.roblox.com/users/get-by-username?username=$replaceText [ $message; ; ];UsernameNotFound; Username not found. ]
**ID:** $jsonRequest[https://api.roblox.com/users/get-by-username?
username=$replaceText[$message; ; ];IdNotFound; ID not found.]
**Profile Link: ** https://www.roblox.com/users/$jsonRequest[https:// api.roblox.com/users/get-by-username?
username=$replaceText [$message; ; ];IdNotFound; ID not found.]/profile]
$color[BLUE]
$argsCheck [>1; Please provide a username.]
$onlyIf [$jsonRequest[https://api.roblox.com/users/get-by-username?username=$replaceText[$message; ; ];UserId; Error]!=Error; User not found. ]
$onlyIf [ $message!=;Please provide a username.]
$suppressErrors[An error occurred while executing the command.]`
}); //NOT FINISHED!
