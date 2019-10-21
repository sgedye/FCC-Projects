/*** Project 07 : Javascript Project 2 - Roman Numeral Converter: ***/

let answer = "";
let number = Math.floor(Math.random() * 4000);

function checker(num) {
	switch(true) {
		case number >= 1000:
			answer += 'M';
		  number -= 1000;
			break;
		case number >= 900:
			answer += 'CM';
		  number -= 900;
			break;
		case number >= 500:
			answer += 'D';
		  number -= 500;
			break;
		case number >= 400:
			answer += 'CD';
		  number -= 400;
			break;
		case number >= 100:
			answer += 'C';
		  number -= 100;
			break;
		case number >= 90:
			answer += 'XC';
		  number -= 90;
			break;
		case number >= 50:
			answer += 'L';
		  number -= 50;
			break;
		case number >= 40:
			answer += 'XL';
		  number -= 40;
			break;
		case number >= 10:
			answer += 'X';
		  number -= 10;
			break;
		case number >= 9:
			answer += 'IX';
		  number -= 9;
			break;
		case number >= 5:
			answer += 'V';
		  number -= 5;
			break;
		case number >= 4:
			answer += 'IV';
		  number -= 4;
			break;
		case number >= 1:
			answer += 'I';
		  number -= 1;
			break;
		default:
			answer = "Oops, something went wrong :/";
			break;
	}
}

console.log("Calling checker: Answer: " + answer + " Num: " + number);
if (number >= 4000) {
	answer = "Cannot compute numbers larger than 3999";
	number = 0;
}
while (number > 0) {
	checker(number);
}
console.log("Checked: Answer: " + answer + " Num: " + number);
