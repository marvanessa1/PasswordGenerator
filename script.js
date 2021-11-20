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

var NumericInput = prompt("How many characters would you like your password to contain?");
var LowercaseInput = confirm("Click OK to include lower case characters");
var UppercaseInput = confirm("Click OK to include upper case characters");
var SpecialInput = confirm("Click OK to include special characters");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
