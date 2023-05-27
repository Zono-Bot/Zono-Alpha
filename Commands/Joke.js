module.exports = ({
  name: "joke",
  code: `
  $title[Joke] 
  $description[
  $getObjectProperty[setup]
  $getObjectProperty[punchline]
  
  $createObject[$httpRequest[https://official-joke-api.appspot.com/random_joke]`
})

