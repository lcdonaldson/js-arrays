function rankings(arr){

  let firstMod = arr.slice().sort( (a, b) => b - a);
  let finalMod = arr.map((c) => firstMod.indexOf(c)+1 );
  
  return finalMod;
}

console.log(rankings([1,5,2])); // this should give a ranking of 3, 1, 2.
