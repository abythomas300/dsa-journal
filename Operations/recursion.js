function factorial(num) {
    // base case
    if (num === 1)
        return 1
    // recursive case
    return (num * factorial(num - 1))
}

const starttime = performance.now()
const r = factorial(7)
const endtime = performance.now()
console.log(`Factorial: ${r} \nEexecution completed in ${(endtime - starttime) / 1000} s`)

// time growth in worst case: O(n)
// space growth in worst case: O(1)