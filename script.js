// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables

var NumericCharacters = "0123456789".split(" ");
var LowecaseCharacters = "abcdefghijklmnopqrstuvwxyz".split(" ");
var UppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(" ");
var SpecialCharacters = "`~!@#$%^&*()-=_+[]{}|;',./<>?:".split(" ");

console.log(NumericCharacters);
console.log(LowecaseCharacters);
console.log(UppercaseCharacters);
console.log(SpecialCharacters);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
