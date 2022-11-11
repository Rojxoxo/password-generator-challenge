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
      passChars.push(getRandomChar(passOptions.lower));
    };
    let getUpper = window.confirm("Include uppercase letters?");
    if (getUpper) {
      passInfo += passOptions.upper;
      passChars.push(getRandomChar(passOptions.upper));
    };
    let getNumber = window.confirm("Include numbers?");
    if (getNumber) {
      passInfo += passOptions.number;
      passChars.push(getRandomChar(passOptions.number));
    };
    if (!passInfo) {
      window.alert("Need to select at least 1 option, please try again.");
      return genPassword();
    };
    // console.log(passInfo)
    // console.log(passChars)
    let randomPass = " ";
    for (var i = 0; i < characterNumber; i++) {
      randomPass += passInfo[Math.floor(Math.random() * passInfo.length)];
    };
    console.log(randomPass)

  } 
  else {
    window.alert("Please provide a valid length");
    return genPassword();
  }
};


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
generateBtn.addEventListener("click", genPassword);

function getRandomChar(fromString){
  return fromString[Math.floor(Math.random() * fromString.length)];
}