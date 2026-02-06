let product = 1

function factorial(n) {
  // base case 
  if(n === 0)
    return

  // recursive case 
  product *= n
  factorial(n-1) 
}

const starttime = performance.now()
factorial(13)
const endtime = performance.now()
console.log(`Completed in ${(endtime - starttime)/1000} s`)

// time growth in worst case: O(n)
// space time growth in worst case: O(1)

