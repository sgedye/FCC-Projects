/*** Project 08 : Javascript Project 3 - Caesar Cipher: ***/

function rot13(str) {
	let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	let outStr = "";
  for (let i=0; i<str.length; i++) {
		let index = alpha.indexOf(str[i]);
		if (index < 0) {
			outStr += str[i];
		}
		else if (index < 13) {
			outStr += alpha[(index+13)];
		}
		else if (index < 26) {
			outStr += alpha[(index-13)];
		}
		else {
			console.log("Error - I should never be reached");
		}
  }
  return outStr; //Returns: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
}
// Change the inputs below to test
let myString = "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.";
rot13(myString);
