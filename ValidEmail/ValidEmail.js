/*
DO KNUMBERS FIRST

A new email service, gitgud.com, has started an email service
All the email addresses will be of the following form:

____________@gitgud.com

The underlined section will be a string containing capital or
lower case letters or a period i.e. '.'

However there can never be two consecutive periods, the period
cannot directly preceed the @ symbol, and the string cannot start
with a period. e.g:

urgud.@gitgud.com : INVALID
.imgud@gitgud.com : INVALID

we..gud@gitgud.com

The preceeding string must be at least 3 characters long

Produce an algorithm that will count the possible email addresses of length N
*/


//YOUR CODE HERE

var ValidEmail = function(strSize) {
  var count = 0;
  var generator = function(prev, depth, prod) {
    if(depth === strSize) {
      count += prod;
      return;
    } 
    if(prev !== '.' && depth !== 0 && depth !== strSize - 1) {
      generator('.', depth + 1, prod)
    }
    generator(null, depth + 1, prod * 52);
  }
  if(strSize > 2) generator(null, 0, 1);
  return count;
};

//ignore this
module.exports = ValidEmail;
