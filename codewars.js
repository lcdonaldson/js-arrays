// UNIQUE IN ORDER

// Instructions - Implement the function unique_in_order which takes as argument a sequence and returns a list of items 
// without any elements with the same value next to each other and preserving the original order of elements.

// Example -
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


// This was a cool challenge and I finally figured out how to solve it but I want to dry it up.
// I cant figure out how to extract the repeated code (iterable.filter...) into a single function to call
// I tried several ways but I kept getting undefined. Any suggestions would be cool.

// const iterable = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8, 9]; array test case. string is another example
const iterable = 'AAAABBBCCDAABBB';
const uniqueInOrder = function(iterable){
	if(Array.isArray(iterable)){
		return iterable.filter(function(item, pos, iterable){
  			return pos === 0 || item !== iterable[pos-1];
		});
		
	} else {
		const arr = iterable.split('');
		return arr.filter(function(item, pos, arr){
  			return pos === 0 || item !== arr[pos-1];
		});
	}
}
console.log(uniqueInOrder(iterable));



// This was someone else's solution to really dry up my equivalent code.

const iterable = 'AAAABBBCCDAABBB';

const uniqueInOrder = (iterable) => {
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}
console.log(uniqueInOrder(iterable));

// **************************************************************************************
