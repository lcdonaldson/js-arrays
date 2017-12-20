function fizzbuzz(n){
  for (let i = 1; i < n; i++){

    // if number is a multiple of both 3 and 5 print fizzbuzz
    if (i % 3 === 0 && i % 5 === 0){
     console.log("fizzbuzz");

    // if number is multiple of 5 print buzz.  
    } else if (i % 5 === 0){
      console.log("buzz");

    // if number is multiple of 3 print fizz.  
    } else if (i % 3 === 0) {
      console.log("fizz");

    // if number is not a multiple of either just print number.   
    } else {
      console.log(i);
    }
  }

}

fizzbuzz(100);
