// Algorithm:
// 1. Store first element value
// 2. Remove first element from array 
// 3. Return first element + call the same function with mutated array as argument
// 4. If has no elements left, return 0

function sumOfArray(data) { 
    // base case
    if(data.length === 0) 
      return 0
    // recursive case
    let currentEl = data[0] 
    data.shift() 
    return   ( currentEl + sumOfArray(data) )
}

console.log( sumOfArray([10, 20, 30, 40, 50, 100]) )