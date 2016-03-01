var pal = function(word) {
  console.log(word.split('').join(''));
  console.log(word.split('').reverse().join(''));
  if (word.split('').join('') === word.split('').reverse().join('')) {
  console.log("it's a palindrome");
  } else {
  console.log("it's not a palindrome");
  }
};
