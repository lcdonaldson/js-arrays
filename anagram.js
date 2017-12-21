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
