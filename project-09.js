/*** Project 09 : Javascript Project 4 - Telephone Number Validator: ***/

/* Return true if the passed string looks like a valid US phone number.
The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests for other variants):
  555-555-5555
  (555)555-5555
  (555) 555-5555
  555 555 5555
  5555555555
  1 555 555 5555
*/

// My solution
function telephoneCheck(str) {
  // Check all conditions (with or without a country code)
  let regex = /(?=^1?\s?\(?\d{3}\)?\s?-?\d{3}\s?-?\d{4}$)/;
  let result = regex.test(str);
  // Note, this regex does not check for both brackets
  // Check if one bracket exists, but not the other
  if ((str.indexOf('(') !== -1) && (str.indexOf(')') === -1)) {
    result = false;
  }
  if ((str.indexOf('(') === -1) && (str.indexOf(')') !== -1)) {
    result = false;
  }
  console.log(result);
  return result;
}
telephoneCheck("(555)-555-5555");

// This can also be done without the if statements:
function telephoneCheck(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
telephoneCheck("555-555-5555");
