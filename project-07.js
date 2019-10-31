/*** Project 07 : Javascript Project 2 - Roman Numeral Converter: ***/

function convertToRoman(num) {
  let answer = "";
  while (num > 0) {
    switch(true) {
      case num > 3999:
	answer = "Please enter a number between 1-3999";
	num = 0;
	break;
      case num >= 1000:
	answer += 'M';
	num -= 1000;
	break;
      case num >= 900:
	answer += 'CM';
	num -= 900;
	break;
      case num >= 500:
	answer += 'D';
	num -= 500;
	break;
      case num >= 400:
	answer += 'CD';
	num -= 400;
	break;
      case num >= 100:
	answer += 'C';
	num -= 100;
	break;
      case num >= 90:
	answer += 'XC';
	num -= 90;
	break;
      case num >= 50:
	answer += 'L';
	num -= 50;
	break;
      case num >= 40:
	answer += 'XL';
	num -= 40;
	break;
      case num >= 10:
	answer += 'X';
	num -= 10;
	break;
      case num >= 9:
	answer += 'IX';
	num -= 9;
	break;
      case num >= 5:
	answer += 'V';
	num -= 5;
	break;
      case num >= 4:
	answer += 'IV';
	num -= 4;
	break;
      case num >= 1:
	answer += 'I';
	num -= 1;
	break;
      default:
	answer = "Oops, something went wrong :/";
	break;
    }
  }
  return answer;
};

convertToRoman(36);
console.log(convertToRoman(36));
