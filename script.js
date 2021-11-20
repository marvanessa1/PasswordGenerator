// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declared variables

var NumericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var LowecaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var UppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var SpecialCharacters = ["`","~","!","@","#","$","%","^","&","*","(",")","-","=","_","+","[","]","{","}","|",";","'",",",".","/","<",">","?",":"];

console.log(NumericCharacters);
console.log(LowecaseCharacters);
console.log(UppercaseCharacters);
console.log(SpecialCharacters);

// Generate Password part. "Fasten your seatbelts!,..., It's going to be a bumpy ride!" - Shrunken Head from Harry Potter and the Prisoner of Azkaban
function generatePassword(){
  var passwordLength = prompt("How many characters would you like your password to contain?");

// Conditional statements for password length & inputs
  if (passwordLength < 8){
    alert("Password must contain 8 or more characters");
    return "";
  } else if (passwordLength > 128){
    alert("Password must contain 128 characters or less ");
    return "";
  }else {
    var NumericInput = confirm("Click OK to include numeric characters");
    var LowercaseInput = confirm("Click OK to include lower case characters");
    var UppercaseInput = confirm("Click OK to include upper case characters");
    var SpecialInput = confirm("Click OK to include special characters");
  }

  // Conditional statement if user chose no character types
  if (!NumericInput && !LowercaseInput && !UppercaseInput && !SpecialInput){
    alert("You must select at least one character type");
    return "";
  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
