// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const fifteen = inventors.filter(inventor => inventor.year > 1499 && inventor.year < 1600);
    console.table(fifteen);

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    const first = inventors.map(inventor => `${inventor.first}`);
    console.log(first)

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    const byAge = inventors.sort((a, b) => a.year > b.year ? 1 : -1 );
    console.table(byAge);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    const total = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
    }, 0);
    console.log(total);

    // 5. Sort the inventors by years lived
    const yearsLived = inventors.sort(function (a, b) {
      prevInventor = a.passed - a.year;
      nextInventor = b.passed - b.year;
      return prevInventor > nextInventor ? -1 : 1;
    });
    console.table(yearsLived);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name

        const myFunction = () => { 
            window.open("https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris",  "_top"); 
        };
    
        
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const alpha = people.sort((lastOne, nextOne) => {
      const [aLast, aFirst] = lastOne.split(', ');
      const [bLast, bFirst] = nextOne.split(', ');
      return aLast > bLast ? 1 : -1;
    });
    console.log(alpha);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    
    // 9. Adding to arrays.
    var myArray = ['um', 'dois', 'tres'];
    // *** SOLUTION ***
    array_add = myArray.push('quatro', 'cinco', 'seis', 'sete', 'oito');
    console.log(myArray);
    
    // 10. Removing from an array with pop.
    var myArray = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito'];
    // *** SOLUTION ***
    array_remove = myArray.pop();

    // 11. Slicing.
    var myArray = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito'];
    // *** SOLUTION ***
    array_slice = myArray.slice(3, 4);
    console.log(array_slice);
    
    // Sort alphabetically
    var myArray = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito'];
    // *** SOLUTION ***
    array_sort = myArray.sort();
    console.log(array_sort);
    
    // Add a new item to the middle of the list
    var myArray = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito'];
    // *** SOLUTION ***
    array_stitch = myArray.splice(4, 0, "quatro e meia");
    console.log(myArray);

    // Reverse the order of the array
    var myArray = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito'];
    // *** SOLUTION ***
    array_stitch = myArray.reverse();
    console.log(myArray);

    var dog = [ 
                {id: "1", name: "jed"}, 
                {id: "2", name: "rod"}, 
                {id: "3", name: "rover"}, 
                {id: "4", name: "coco"}, 
                {id: "5", name: "ed"}, 
                {id: "6", name: "cozzmo"}, 
                {id: "7", name: "taffy"}, 
                {id: "8", name: "kibbers"}, 
                {id: "9", name: "rufus"}, 
                {id: "10", name: "red"}, 
                {id: "11", name: "beasly"}, 
                {id: "12", name: "mutt"}, 
                {id: "13", name: "jeff"}, 
                {id: "14", name: "tank"}, 
                {id: "15", name: "toto"} 
              ];

    console.table(dog);


//     counter function
    var iterable = {
      [Symbol.iterator]() {
        return {
          i: 0,
          next() {
            if (this.i < 31) {
              return { value: this.i++, done: false };
            }
            return { value: undefined, done: true };
          }
        };
      }
    };

    for (var value of iterable) {
      console.log(value);
    }

const allTheDaysThatSuckedIn2020 = [
January 1 2020 (Wed),
January 2 2020 (Thu),
January 3 2020 (Fri),
January 4 2020 (Sat),
January 5 2020 (Sun),
January 6 2020 (Mon),
January 7 2020 (Tue),
January 8 2020 (Wed),
January 9 2020 (Thu),
January 10 2020 (Fri),
January 11 2020 (Sat),
January 12 2020 (Sun),
January 13 2020 (Mon),
January 14 2020 (Tue),
January 15 2020 (Wed),
January 16 2020 (Thu),
January 17 2020 (Fri),
January 18 2020 (Sat),
January 19 2020 (Sun),
January 20 2020 (Mon),
January 21 2020 (Tue),
January 22 2020 (Wed),
January 23 2020 (Thu),
January 24 2020 (Fri),
January 25 2020 (Sat),
January 26 2020 (Sun),
January 27 2020 (Mon),
January 28 2020 (Tue),
January 29 2020 (Wed),
January 30 2020 (Thu),
January 31 2020 (Fri),
February 1 2020 (Sat),
February 2 2020 (Sun),
February 3 2020 (Mon),
February 4 2020 (Tue),
February 5 2020 (Wed),
February 6 2020 (Thu),
February 7 2020 (Fri),
February 8 2020 (Sat),
February 9 2020 (Sun),
February 10 2020 (Mon),
February 11 2020 (Tue),
February 12 2020 (Wed),
February 13 2020 (Thu),
February 14 2020 (Fri),
February 15 2020 (Sat),
February 16 2020 (Sun),
February 17 2020 (Mon),
February 18 2020 (Tue),
February 19 2020 (Wed),
February 20 2020 (Thu),
February 21 2020 (Fri),
February 22 2020 (Sat),
February 23 2020 (Sun),
February 24 2020 (Mon),
February 25 2020 (Tue),
February 26 2020 (Wed),
February 27 2020 (Thu),
February 28 2020 (Fri),
February 29 2020 (Sat),
March 1 2020 (Sun),
March 2 2020 (Mon),
March 3 2020 (Tue),
March 4 2020 (Wed),
March 5 2020 (Thu),
March 6 2020 (Fri),
March 7 2020 (Sat),
March 8 2020 (Sun),
March 9 2020 (Mon),
March 10 2020 (Tue),
March 11 2020 (Wed),
March 12 2020 (Thu),
March 13 2020 (Fri),
March 14 2020 (Sat),
March 15 2020 (Sun),
March 16 2020 (Mon),
March 17 2020 (Tue),
March 18 2020 (Wed),
March 19 2020 (Thu),
March 20 2020 (Fri),
March 21 2020 (Sat),
March 22 2020 (Sun),
March 23 2020 (Mon),
March 24 2020 (Tue),
March 25 2020 (Wed),
March 26 2020 (Thu),
March 27 2020 (Fri),
March 28 2020 (Sat),
March 29 2020 (Sun),
March 30 2020 (Mon),
March 31 2020 (Tue),
April 1 2020 (Wed),
April 2 2020 (Thu),
April 3 2020 (Fri),
April 4 2020 (Sat),
April 5 2020 (Sun),
April 6 2020 (Mon),
April 7 2020 (Tue),
April 8 2020 (Wed),
April 9 2020 (Thu),
April 10 2020 (Fri),
April 11 2020 (Sat),
April 12 2020 (Sun),
April 13 2020 (Mon),
April 14 2020 (Tue),
April 15 2020 (Wed),
April 16 2020 (Thu),
April 17 2020 (Fri),
April 18 2020 (Sat),
April 19 2020 (Sun),
April 20 2020 (Mon),
April 21 2020 (Tue),
April 22 2020 (Wed),
April 23 2020 (Thu),
April 24 2020 (Fri),
April 25 2020 (Sat),
April 26 2020 (Sun),
April 27 2020 (Mon),
April 28 2020 (Tue),
April 29 2020 (Wed),
April 30 2020 (Thu),
May 1 2020 (Fri),
May 2 2020 (Sat),
May 3 2020 (Sun),
May 4 2020 (Mon),
May 5 2020 (Tue),
May 6 2020 (Wed),
May 7 2020 (Thu),
May 8 2020 (Fri),
May 9 2020 (Sat),
May 10 2020 (Sun),
May 11 2020 (Mon),
May 12 2020 (Tue),
May 13 2020 (Wed),
May 14 2020 (Thu),
May 15 2020 (Fri),
May 16 2020 (Sat),
May 17 2020 (Sun),
May 18 2020 (Mon),
May 19 2020 (Tue),
May 20 2020 (Wed),
May 21 2020 (Thu),
May 22 2020 (Fri),
May 23 2020 (Sat),
May 24 2020 (Sun),
May 25 2020 (Mon),
May 26 2020 (Tue),
May 27 2020 (Wed),
May 28 2020 (Thu),
May 29 2020 (Fri),
May 30 2020 (Sat),
May 31 2020 (Sun),
June 1 2020 (Mon),
June 2 2020 (Tue),
June 3 2020 (Wed),
June 4 2020 (Thu),
June 5 2020 (Fri),
June 6 2020 (Sat),
June 7 2020 (Sun),
June 8 2020 (Mon),
June 9 2020 (Tue),
June 10 2020 (Wed),
June 11 2020 (Thu),
June 12 2020 (Fri),
June 13 2020 (Sat),
June 14 2020 (Sun),
June 15 2020 (Mon),
June 16 2020 (Tue),
June 17 2020 (Wed),
June 18 2020 (Thu),
June 19 2020 (Fri),
June 20 2020 (Sat),
June 21 2020 (Sun),
June 22 2020 (Mon),
June 23 2020 (Tue),
June 24 2020 (Wed),
June 25 2020 (Thu),
June 26 2020 (Fri),
June 27 2020 (Sat),
June 28 2020 (Sun),
June 29 2020 (Mon),
June 30 2020 (Tue),
July 1 2020 (Wed),
July 2 2020 (Thu),
July 3 2020 (Fri),
July 4 2020 (Sat),
July 5 2020 (Sun),
July 6 2020 (Mon),
July 7 2020 (Tue),
July 8 2020 (Wed),
July 9 2020 (Thu),
July 10 2020 (Fri),
July 11 2020 (Sat),
July 12 2020 (Sun),
July 13 2020 (Mon),
July 14 2020 (Tue),
July 15 2020 (Wed),
July 16 2020 (Thu),
July 17 2020 (Fri),
July 18 2020 (Sat),
July 19 2020 (Sun),
July 20 2020 (Mon),
July 21 2020 (Tue),
July 22 2020 (Wed),
July 23 2020 (Thu),
July 24 2020 (Fri),
July 25 2020 (Sat),
July 26 2020 (Sun),
July 27 2020 (Mon),
July 28 2020 (Tue),
July 29 2020 (Wed),
July 30 2020 (Thu),
July 31 2020 (Fri),
August 1 2020 (Sat),
August 2 2020 (Sun),
August 3 2020 (Mon),
August 4 2020 (Tue),
August 5 2020 (Wed),
August 6 2020 (Thu),
August 7 2020 (Fri),
August 8 2020 (Sat),
August 9 2020 (Sun),
August 10 2020 (Mon),
August 11 2020 (Tue),
August 12 2020 (Wed),
August 13 2020 (Thu),
August 14 2020 (Fri),
August 15 2020 (Sat),
August 16 2020 (Sun),
August 17 2020 (Mon),
August 18 2020 (Tue),
August 19 2020 (Wed),
August 20 2020 (Thu),
August 21 2020 (Fri),
August 22 2020 (Sat),
August 23 2020 (Sun),
August 24 2020 (Mon),
August 25 2020 (Tue),
August 26 2020 (Wed),
August 27 2020 (Thu),
August 28 2020 (Fri),
August 29 2020 (Sat),
August 30 2020 (Sun),
August 31 2020 (Mon),
September 1 2020 (Tue,)
September 2 2020 (Wed),
September 3 2020 (Thu),
September 4 2020 (Fri),
September 5 2020 (Sat),
September 6 2020 (Sun),
September 7 2020 (Mon),
September 8 2020 (Tue),
September 9 2020 (Wed),
September 10 2020 (Thu),
September 11 2020 (Fri),
September 12 2020 (Sat),
September 13 2020 (Sun),
September 14 2020 (Mon),
September 15 2020 (Tue),
September 16 2020 (Wed),
September 17 2020 (Thu),
September 18 2020 (Fri),
September 19 2020 (Sat),
September 20 2020 (Sun),
September 21 2020 (Mon),
September 22 2020 (Tue),
September 23 2020 (Wed),
September 24 2020 (Thu),
September 25 2020 (Fri),
September 26 2020 (Sat),
September 27 2020 (Sun),
September 28 2020 (Mon),
September 29 2020 (Tue),
September 30 2020 (Wed),
October 1 2020 (Thu),
October 2 2020 (Fri),
October 3 2020 (Sat),
October 4 2020 (Sun),
October 5 2020 (Mon),
October 6 2020 (Tue),
October 7 2020 (Wed),
October 8 2020 (Thu),
October 9 2020 (Fri),
October 10 2020 (Sat),
October 11 2020 (Sun),
October 12 2020 (Mon),
October 13 2020 (Tue),
October 14 2020 (Wed),
October 15 2020 (Thu),
October 16 2020 (Fri),
October 17 2020 (Sat),
October 18 2020 (Sun),
October 19 2020 (Mon),
October 20 2020 (Tue),
October 21 2020 (Wed),
October 22 2020 (Thu),
October 23 2020 (Fri),
October 24 2020 (Sat),
October 25 2020 (Sun),
October 26 2020 (Mon),
October 27 2020 (Tue),
October 28 2020 (Wed),
October 29 2020 (Thu),
October 30 2020 (Fri),
October 31 2020 (Sat),
November 1 2020 (Sun),
November 2 2020 (Mon),
November 3 2020 (Tue),
November 4 2020 (Wed),
November 5 2020 (Thu),
November 6 2020 (Fri),
November 7 2020 (Sat),
November 8 2020 (Sun),
November 9 2020 (Mon),
November 10 2020 (Tue),
November 11 2020 (Wed),
November 12 2020 (Thu),
November 13 2020 (Fri),
November 14 2020 (Sat),
November 15 2020 (Sun),
November 16 2020 (Mon),
November 17 2020 (Tue),
November 18 2020 (Wed),
November 19 2020 (Thu),
November 20 2020 (Fri),
November 21 2020 (Sat),
November 22 2020 (Sun),
November 23 2020 (Mon),
November 24 2020 (Tue),
November 25 2020 (Wed),
November 26 2020 (Thu),
November 27 2020 (Fri),
November 28 2020 (Sat),
November 29 2020 (Sun),
November 30 2020 (Mon),
December 1 2020 (Tue),
December 2 2020 (Wed),
December 3 2020 (Thu),
December 4 2020 (Fri),
December 5 2020 (Sat),
December 6 2020 (Sun),
December 7 2020 (Mon),
December 8 2020 (Tue),
December 9 2020 (Wed),
December 10 2020 (Thu),
December 11 2020 (Fri),
December 12 2020 (Sat),
December 13 2020 (Sun),
December 14 2020 (Mon),
December 15 2020 (Tue),
December 16 2020 (Wed),
December 17 2020 (Thu),
December 18 2020 (Fri),
December 19 2020 (Sat),
December 20 2020 (Sun),
December 21 2020 (Mon),
December 22 2020 (Tue),
December 23 2020 (Wed),
December 24 2020 (Thu),
December 25 2020 (Fri),
December 26 2020 (Sat),
December 27 2020 (Sun),
December 28 2020 (Mon),
December 29 2020 (Tue),
December 30 2020 (Wed),
December 31 2020 (Thu)
]
