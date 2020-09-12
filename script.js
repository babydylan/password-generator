// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var strLower = "abcdefghijklmnopqrstuvwxyz";
var strUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var strNums = "0123456789";
var strSpecial = "!\"\\#$%&'()*+,-./:;<=>?@[]^_`{|}~";
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  var result = "";
  var random = "";
  var numChars = prompt("How long do you want your password? (8-128 characters)");
  var lower = confirm("Do you want lowercase letters?");
  var upper = confirm("Do you want uppercase letters?");
  var nums = confirm("Do you want numbers?");
  var special = confirm("Do you want special characters?");
  if (numChars < 8 || numChars > 128) {
    alert("Password length must be from 8 to 128.");
  }
  if (lower === true) {
    random = random + strLower;
  }
  if (upper === true) {
    random = random + strUpper;
  }
  if (nums === true) {
    random = random + strNums;
  }
  if (special === true) {
    random = random + strSpecial;
  }


     for (var i = 0; i < numChars; i++) {
       result = result + random.charAt(Math.floor(Math.random() * (random.length - 1)));
     }

    return result;
}