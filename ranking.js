// The input represents an array of scores from players. We want to display those scores
// as highest scores ranked 1. So in this case scores 1, 5, 2 would equal rank 3, 1, 2.
  
function rankings(arr){

  let firstMod = arr.slice().sort( (a, b) => b - a);
  let finalMod = arr.map((c) => firstMod.indexOf(c)+1 );
  
  return finalMod;
}

console.log(rankings([1,5,2])); // this should give a ranking of 3, 1, 2.
