// Algorithm
// 1. Set a lower and upper bound for the given array as pointers
// 2. Find the middle element by taking average of position: (lower_bound + upper_bound) / 2
// 3. Check whether target element and middle element is same, if yes, return the position
// 4. If no, compare target element with middle element
// 5. If middle element is greater than target element, increase the lower_bound position by 1 and repeat step 3, 4 and 5
// 6. If middle element is less thn target element, decrease the lower_bound by 1 and repeat step 3, 4, 5 and 6
// 7. Repeat step 2, 3, 4, 5, 6 until lower_bound is less than or equal to upper_bound
// 8. Repeat step 2, if it returns false, then element is not present in the given array

// Code:
function binarySearch(arr, targetElement) {
    const startTime = performance.now()
    let middle, lower_bound = 0
    let upper_bound = arr.length-1
    let flag = false
    while(lower_bound <= upper_bound) {
        middle = Math.floor((lower_bound + upper_bound) / 2)
        if(arr[middle] === targetElement) {
            flag = true
            return [middle, performance.now() - startTime]
        } else {
            targetElement > arr[middle] ? lower_bound = middle+1 : upper_bound = middle-1
        }
    }
    if(flag === false)
        return ["Element not found.", performance.now() - startTime]
}


const test_array = []
// create an array of 100 Million numbers
for(let i = 1; i<=100000000; i++) {
    test_array.push(i)
}
// function invoke
const result = binarySearch(test_array, 100000000)

console.log(`${result[0]}, search completed in ${result[1]} ms`)

// Computational Complexity
// Time: O(log(n)), Space: O(1)