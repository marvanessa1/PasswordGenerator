// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declared variables

var NumericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var LowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var UppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var SpecialCharacters = ["`","~","!","@","#","$","%","^","&","*","(",")","-","=","_","+","[","]","{","}","|",";","'",",",".","/","<",">","?",":"];

console.log(NumericCharacters);
console.log(LowercaseCharacters);
console.log(UppercaseCharacters);
console.log(SpecialCharacters);

// Generate Password part. "Fasten your seatbelts!,..., It's going to be a bumpy ride!" - Shrunken Head from Harry Potter and the Prisoner of Azkaban
function generatePassword(){
// Asking user to input amount of password character amount and storing it as a value.  If user inputs a value less than 8 or more than 128 characters, they receive an alert iforming of them so, user then it taken back to click 'generate password' button again
  var passwordLength = prompt("How many characters would you like your password to contain?");
  if (passwordLength < 8){
    alert("Password must contain 8 or more characters");
      return "";
  } else if (passwordLength > 128){
    alert("Password must contain 128 characters or less ");
      return "";
    } 
// If user inputs a password length value that meets the parameters, the following confirm statements as asked to the user and user gets to select which charater types to include in their password.  If they select said character type (making the statement true), said character type is stored as a variable.
    else  {
    var NumericInput = confirm("Click OK to include numeric characters");
    var LowercaseInput = confirm("Click OK to include lower case characters");
    var UppercaseInput = confirm("Click OK to include upper case characters");
    var SpecialInput = confirm("Click OK to include special characters");
//If user doesn't choose any character types, they are alerted that they must select at least one character type to generate password and they are then returned to 'generate password' button and start generate password all over.
      if (!NumericInput && !LowercaseInput && !UppercaseInput && !SpecialInput){
        alert("You must select at least one character type");
        return "";
      }
// Once user has selected types of password characters to include in their password, they are stored as variables to be then randomized and stored in the passwordCharacters pool, to be then randomized later into password. 
      var passwordCharacters=[];
      var password= [];
//If user selected to include numeric characters in their password, this code begins adding those randomized characters to the password characters pool, which said pool would contain randomize other character types if user chose said other types. 
      if (NumericInput){
        var randomnumber = Math.floor(Math.random() * NumericCharacters.length);
        password.push(NumericCharacters[randomnumber]);

        for (var i=0; i<NumericCharacters.length; i++){
          passwordCharacters = passwordCharacters.concat(NumericCharacters[i]);
        }
      }
//If user selected to include lowercase characters in their password, this code begins adding those randomized characters to the password characters pool,which said pool would contain randomize other character types if user chose said other types. 
      if (LowercaseInput){
        var randomLowercase = Math.floor(Math.random() * LowercaseCharacters.length);
        password.push(LowercaseCharacters[randomLowercase]);

        for (var i=0; i<LowercaseCharacters.length; i++){
          passwordCharacters = passwordCharacters.concat(LowercaseCharacters[i]);
        }
      }
//If user selected to include uppercase characters in their password, this code begins adding those randomized characters to the password characters pool,which said pool would contain randomize other character types if user chose said other types. 
      if (UppercaseInput){
        var randomUppercase = Math.floor(Math.random() * UppercaseCharacters.length);
        password.push(UppercaseCharacters[randomUppercase]);

        for (var i=0; i<UppercaseCharacters.length; i++){
          passwordCharacters = passwordCharacters.concat(UppercaseCharacters[i]);
        }
      }
//If user selected to include special characters in their password, this code begins adding those randomized characters to the password characters pool,which said pool would contain randomize other character types if user chose said other types. 
      if (SpecialInput){
        var randomSpecial = Math.floor(Math.random() * SpecialCharacters.length);
        password.push(SpecialCharacters[randomSpecial]);

        for (var i=0; i<SpecialCharacters.length; i++){
          passwordCharacters = passwordCharacters.concat(SpecialCharacters[i]);
        }
      }
//This part brings all selected randomized charaters that where added to the password characters pool and randomizes them again to merger together into one final password
      for (var i=0; i < passwordLength; i++) {
        var randomPassword = Math.floor(Math.random() * passwordCharacters.length)
        password = password.concat(passwordCharacters[randomPassword]);
      }
      return password.join("");
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
