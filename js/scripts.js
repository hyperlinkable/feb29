// function to remove spaces
var removeSpaces = function(string) {
  return string.split(' ').join('');
};

// function to check for non alpha characters
// FIX THIS PART!!!
var hasNonAlpha = function(string) {
  var regex = /\W/;
  console.log(removeSpaces(string.search(regex)));
  if (removeSpaces(string.search(regex)) >= 1) {
  return true;
  } else
  return false;
};


// function to prepare original string for compare
var prep = function(string) {
  return removeSpaces(string);
};

// function to prepare flipped string
var flip = function(string) {
  return prep(string).replace(' ','').split('').reverse().join('');
};

// function isPal to evaluate word (without spaces) vs. flipped word
var isPal = function(string) {
  var flipString = flip(string);
  var prepString = prep(string);
  console.log("original string prepped = " + prepString); //original word (string)
  console.log("flipped string = " + flipString); //flipped word as string
  if (prepString === flipString) {
    console.log("YES, it's a palindrome");
    } else {
    console.log("NO, it's not a palindrome");
    };
  };
