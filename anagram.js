// This is not array driven but it could be modified to be.


function anagrams(stringA, stringB){
  const first = stringA;
  const next = stringB;
  
  let a = cleanstr(first);
  let b = cleanstr(next);
  
  if(a === b){
    console.log(first + ' is an anagram of ' + next);
  } else {
    console.log('these are not anagrams');
  }
  
}

function cleanstr(str){
  return str
		.replace(/[^\w]/g, '')
		.toLowerCase()
		.split('')
		.sort()
		.join('');
}

console.log(anagrams('!Ana', 'naa!'));

// This is an example of a palindrome checker
// it is simple and it works well, but it is
// not efficient. Below is a better way.

const isPalindrome = (str) => {
	let newStr = str.split('').reverse().join()
  if(str === newStr) {
		return true;
  } else {
		return false;
	}
}

console.log(isPalindrome('abcba'));

//___________________________________________________________

// A more proficient palindrome checker

const isPalindrome = str => {
 var strLength = str.length;
 for (var i = 0; i < strLength / 2; i++) {
   if (str[i] !== str[strLength - 1 - i]) {
       return false;
   }
 }
 return true;
}

isPalindrome('abba')

