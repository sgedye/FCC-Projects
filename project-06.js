/*** Project 06 : Javascript Project 1 - Palindrome Checker: ***/

function palindrome(str) {
  
  var arr = "";
  //var letters = /^[a-zA-Z]+$/;
  var letters = /[a-zA-Z]/;

  console.log("Initial Array: " + str);
  // Filter out everything except UPPER and lowercase characters "a@b C3D .e(" ==> "abCDe"
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(letters)) {
      arr += str[i];
    }
  }
  console.log("Letter Array: " + arr);
  // Covert all the UPPERCASE letters to lowercase letters "abCDe" ==> "abcde"
  arr = arr.toLowerCase();
  console.log("Lowercase Array: " + arr);
  // Check if the string is a palandrome (does arr[0] = arr[arr.length-1]... arr[1] = arr[arr.length-2]... until arr.length/2)
  var current = arr.length-1;
  var isTrue = true;
  for (var i = 0; i < Math.floor(arr.length/2); i++) { // For 5 elements only run twice [0]=[4], [1]=[3]; because [2]=[2]
    if (arr[i] != arr[current]) {
      console.log("arr[i] != arr[current] : " + arr[i] + " != " + arr[current]);
      isTrue = false;
    }
    current--;
  }
  return isTrue;
}

palindrome("1 eye for of 1 eye.");
