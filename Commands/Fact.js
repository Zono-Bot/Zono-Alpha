module.exports = ({
name: "Fact",
  code: `
$title[**FACT**]
$description [
$getObjectProperty[fact]

$createObject[$httpRequest[https://hunterapi.tk/api/fact]`
});
