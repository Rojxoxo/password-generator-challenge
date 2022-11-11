// Assignment code here
 const passOptions = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "12345667890",
 };



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// function to generate prompts and generate password
function genPassword() { 
  // initial things included in pass
  let passInfo = "";
  const passChars = [];
  // asking user for desired number of characters using prompt
  let characterNumber = window.prompt ("Input desired number of characters\nNOTE: must be between 8 and 128");
  if (characterNumber >= 8 && characterNumber <= 128) {
    // asking whether to include lowercase
    let getLower = window.confirm("Include lowercase characters?");
    if (getLower) {
      passInfo += passOptions.lower;
    };
    // include uppercase
    let getUpper = window.confirm("Include uppercase letters?");
    if (getUpper) {
      passInfo += passOptions.upper;
    };
    // include numbers
    let getNumber = window.confirm("Include numbers?");
    if (getNumber) {
      passInfo += passOptions.number;
    };
    // returns to beginning if no options are selected
    if (!passInfo) {
      window.alert("Need to select at least 1 option, please try again.");
      return genPassword();
    };
    // generates random password
    let randomPass = " ";
    for (var i = 0; i < characterNumber; i++) {
      randomPass += passInfo[Math.floor(Math.random() * passInfo.length)];
    };
    console.log(randomPass)
    // shows alert with randomly generated password
    if (randomPass) (
      window.alert("Here is the randomly generated password:\n" + randomPass)
    )

  } 
  else {
    window.alert("Please provide a valid length");
    return genPassword();
  }
};


// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");

  passwordText.value = randomPass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
generateBtn.addEventListener("click", genPassword);

function getRandomChar(fromString){
  return fromString[Math.floor(Math.random() * fromString.length)];
}