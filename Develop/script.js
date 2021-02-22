// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var passwordArray = []


var passwordGenerator = function () {
  passwordLength = window.prompt("How many characters do you want in your password?")

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be at least 8 characters.")
    passwordGenerator()
  } else if (passwordLength > 8 && passwordLength < 128) {
    var specialCharacters = window.confirm("Do you want your password to contain special characters?");
    var numbers = window.confirm("Do you want your password to contain a numbers?");
    var lowercase = window.confirm("Do you want your password to contain lowercase letters?");
    var uppercase = window.confirm("Do you want your password to contain uppercase letters?");

    if (specialCharacters) {
      passwordArray = passwordArray.concat(specialArray)
      console.log(passwordArray)
    }
    if (numbers) {
      passwordArray = passwordArray.concat(numbersArray)
      console.log(passwordArray)
    }
    if (lowercase) {
      passwordArray = passwordArray.concat(lowercaseArray)
      console.log(passwordArray)
    }
    if (uppercase) {
      passwordArray = passwordArray.concat(uppercaseArray)
      console.log(passwordArray)
    }

    var chr = randomize(passwordArray);
    console.log(chr);

    var password = ""; 
    
    for (var i = 0; i < passwordLength; i++) {
        password += passwordArray[Math.floor(Math.random() * passwordArray.length)];
    }
    return password; 

  }
  
}

var randomize = function (arr) {
  var index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

// Write password to the #password input
function writePassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
