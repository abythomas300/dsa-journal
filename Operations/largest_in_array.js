// ALGORITHM
// Initialize first index as largestIndex
// Compare each element's value with the value in the largestIndex
// If current value is > value of largestIndex, assign current index to 'largestIndex' 
// Continue iteration till all elements are compared

let largestIndex = 0

function largestValue(data) {
    let current = 0
    for(current; current < data.length; current++) {
        console.log("Current: ", data[current])
        console.log("Largest: ", data[largestIndex])
      if(data[current] > data[largestIndex] ) {
        console.log(data[current] > data[largestIndex])
        largestIndex = current
      }
    } 
  return largestIndex
  }

const data = [156, 141, 35, 94, -1, 88, 111, 9999, 61]
const resultIndex = largestValue(data)
console.log(`Largest value is ${data[resultIndex]} of position ${resultIndex+1}`)
  
// Algorithmic Complexity
// Time: O(n)  Space: O(1)