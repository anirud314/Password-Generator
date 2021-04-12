// Assignment Code
var generateBtn = document.querySelector("#generate");

//Random number generating function 
var randNum = function(min,max){ 
  var value = Math.floor(Math.random()*(max - min) + min);// utilizes min and max values to generate random numbers between the maximum and minimum.
  return value; // Returns the random number generated from the function above.
}

// This is an array with 4 nested arrays inside of it. each of the four nested arrays has a different character type that is utilized to build another array based on user input
var charCheckArray = [ 
  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], // Lowercase array
  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"], // Uppercase array
  ["0","1","2","3","4","5","6","7","8","9"],                                                                 // numbers array
  ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","[","]","{","}","|",":",";","<",">","/","?"]      // symbols array
];
// charCheck array is utilized to build an array of usable characters in the parameterValChecker functions

var parameterNumChecker = function(){ // parameterNumChecker is a function that will take an input from a prompt and output/return a value for number of characters in the password
  var numOfChar = window.prompt("How many characters do you want in your password?"); // prompt user to input a value that will be assigned to numOfChar
  //console.log(numOfChar + " after inputting value");
  if(numOfChar >= 8 && numOfChar <= 128) { // if the value of numOfChar is greater than or equal to 8 and less than or equal to 128
    var confirmValue = window.confirm("The value you have chosen is " + numOfChar +". is that correct?"); // have the user confirm if they want to use the value they assigned
    if (confirmValue){ // if the user inputs ok in the confirm window prompt
      //console.log("AAAAAA----- "+ numOfChar);
      return numOfChar; // return numOfChar val to be utilized in the parameterValChecker function
    } else { // else
      //console.log("BBBB----" + numOfChar);
     return parameterNumChecker(); ///***NOTE ON README.MD***/ recursively call parameterNumChecker in order to allow the user to try to input another value
    }
  }
  else { // else 
    window.alert("The number of characters has to be between 8 - 128 please try again"); // alert user through the window that they have to pick a value between 8 and 128
    //console.log("CCCCC----" + numOfChar);
     return parameterNumChecker(); ///***NOTE ON README.MD***/ recursively call parameterNumChecker in order to allow the user to try to input another value 
  }
};

var parameterValChecker = function(lengthOfPw){ // This function takes the value from parameterNumChecker and generates a password
  var charArray = []; // initialize an empty charArray --- This will be populated with valid characters selected from the charCheckArray and will be used when generating a random password
  var createdPwArray = [];// initialize an empty createdPwArray that will be the size of the lengthOfPw(numOfChar) value we inherited from parameterNumChecker; and this will store every character randomly taken from charArray.
  var createdPw = ''; // initialize an empty createdPw variable that will hold a null value until a string is created from the createdPwArray.
  
  /*window.confirm allows for a user to select a value between true and false, Ok or cancel. */
  var checkLowerCase = window.confirm("Would you like to include lower case characters in your password?"); // confirm prompt to check if user wants to use lowercase characters
  var checkUpperCase = window.confirm("Would you like to include upper case characters in your password?"); // confirm prompt to check if user wants to use uppercase characters
  var checkNumber = window.confirm("Would you like to include number characters in your password?");        // confirm prompt to check if user wants to use number/numerical characters
  var checkSymbol = window.confirm("Would you like to include symbol characters in your password?");        // confirm prompt to check if user wants to use symbol characters

  if(checkLowerCase) { // if user selects ok for checkLowerCase variable (if checkLowerCase === true)
    //console.log(checkLowerCase, checkUpperCase, checkNumber, checkSymbol);
    //console.log(checkLowerCase);
    for(var i = 0; i < charCheckArray[0].length; i++){ // for loop that iterates through the charCheckArray at index [0]. The element in that index is another array. charCheckArray[0].length means to iterate through the array that is in the [0] position of the charCheckArray. in this instance that means the lowercase array 
      charArray.push(charCheckArray[0][i]);//push values from Lowercase array section (Array in charCheckArray[0]) from charCheckArray to charArray in order to use lowercases for random password generation
    }
    //console.log(charArray);
  };

  if(checkUpperCase) { // if user selects ok for checkUpperCase variable (if checkUpperCase === true)
    //console.log(checkLowerCase, checkUpperCase, checkNumber, checkSymbol);
    //console.log(checkUpperCase);
    for(var i = 0; i < charCheckArray[1].length; i++){ // for loop that iterates through the charCheckArray at index [1]. The element in that index is another array. charCheckArray[1].length means to iterate through the array that is in the [1] position of the charCheckArray. in this instance that means the uppercase array 
      charArray.push(charCheckArray[1][i]);//push values from Uppercase array section (Array in charCheckArray[1]) from charCheckArray to charArray in order to use Uppercases for random password generation
    }
    //console.log(charArray);
  };

  if(checkNumber) { // if user selects ok for checkNumber variable (if checkNumber === true)
    //console.log(checkLowerCase, checkUpperCase, checkNumber, checkSymbol);
    //console.log(checkNumber);
    for(var i = 0; i < charCheckArray[2].length; i++){ // for loop that iterates through the charCheckArray at index [2]. The element in that index is another array. charCheckArray[2].length means to iterate through the array that is in the [2] position of the charCheckArray. in this instance that means the numbers array 
      charArray.push(charCheckArray[2][i]);//push values from Numbers array section (Array in charCheckArray[2]) from charCheckArray to charArray in order to use numbers for random password generation
    }
    //console.log(charArray);
  };

  if(checkSymbol) { // if user selects ok for checkSymbol variable (if checkSymbol === true)
    //console.log(checkLowerCase, checkUpperCase, checkNumber, checkSymbol);
    //console.log(checkSymbol);
    for(var i = 0; i < charCheckArray[3].length; i++){ // for loop that iterates through the charCheckArray at index [3]. The element in that index is another array. charCheckArray[3].length means to iterate through the array that is in the [3] position of the charCheckArray. in this instance that means the symbols array 
      charArray.push(charCheckArray[3][i]);//push values from Symbol array section (Array in charCheckArray[3]) from charCheckArray to charArray in order to use symbols for random password generation
    }
    //console.log(charArray);
  };
  
  /*If user says cancel to all window.confirm prompts (if all values (checkLowerCase; checkUpperCase; checkNumber; checkSymbol are false)) */
  if((checkLowerCase === false) && (checkUpperCase === false) && (checkNumber === false) && (checkSymbol === false)){
    //console.log(checkLowerCase, checkUpperCase, checkNumber, checkSymbol);
    window.alert("INVALID INPUT: USER MUST CHOOSE AT LEAST ONE TYPE OF CHARACTER TO USE TO GENERATE PASSWORD!!!");
    return parameterValChecker(lengthOfPw); ///***NOTE ON README.MD***/ recursively call parameterValChecker in order to allow the user to try to input values for the window.confirms again
  };

  //console.log("aaaaa----" + lengthOfPw);
  for(var j = 0; j < lengthOfPw; j++){ // for loop that iterates from 0 to lengthOfPw(numOfChar)
    //console.log("aaaa-----" + charArray);
    var randCharPos = randNum(0,charArray.length); // pick a random position using randNum function with values between 0 and the length of charArray. Assign that to a variable randCharPos
    var randChar = charArray[randCharPos];// pick a random character from the charArray using charArray[randCharPos] and assign that value to randChar
    //console.log("aaaa----" + randChar + " @ "+ randCharPos);
    createdPwArray.push(randChar);// push the randChar value into the empty createdPwArray.
  } // keep looping until required length is met
  //console.log(createdPwArray)

  createdPw = createdPwArray.join('');////***NOTE ON README.MD***/ use the join function to create a string value for var createdPw
  //console.log(createdPw);
  return createdPw; // return the createdPw value
};

/*generatePassword is a function that utilizes 2 other functions to get values to generate a password*/
var generatePassword = function(){
  var charSize = parameterNumChecker();/*Generate password calls parameterNumChecker and assigns the value it recieves from it as a variable called charSize, which indicates the number of characters there are in the password.*/
  //console.log(charSize);
  var generatedPw = parameterValChecker(charSize);/*generatePassword then utilizes the value it gets from the parameterNumChecker function and assigns to charSize and passes it to the parameterValChecker to generate a password that is stored as the generatedPw value.*/
  //console.log(generatedPw);
  return generatedPw;/*generatePassword will then return the generatedPw */
};

/*Given Code to write password into the textArea in html*/
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
