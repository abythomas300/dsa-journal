// ALGORITHM
// Initialize first index as smallestIndex
// Compare each element's value with the value in the smallestIndex
// If current value is < value of smallestIndex, assign current index to 'smallestIndex' 
// Continue iteration till all elements are compared
  
let smallestIndex = 0

function smallestValue(data) {
    let current = 0
    for(current; current < data.length; current++) {
      if(data[current] < data[smallestIndex] ) {
        smallestIndex = current
      }
    } 
  return smallestIndex
  }

const data = [156, 141, 35, 94, -1, 88, 111, 9999, 61]
const resultIndex = smallestValue(data)
console.log(`Smallest value is ${data[resultIndex]} of position ${resultIndex+1}`)
  
// Algorithmic Complexity
// Time: O(n)  Space: O(1)