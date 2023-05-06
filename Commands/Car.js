module.exports = ({
name: "Car",
  code: `
$getObjectProperty[image_link]
$getObjectProperty[image_title]
$createObject[$httpRequest[https://hunterapi.tk/api/random-car]
`
})