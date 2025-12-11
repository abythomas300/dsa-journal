// Algorithm
// 1. Set a counter value i = 0, set a flag = 0
// 2. If array[i] is equals to the target value then return array[i], set flag = true
// 3. Repeat step 2 till i is less than or equal to array.length - 1
// 4. If the flag is still false, return "Element not found"

// Code:
function linearSearch(arr, targetElement) {
    const startTime = performance.now()
    let i = 0
    let flag = false
    while(i <= arr.length-1){
        if(arr[i] === targetElement){
            flag = true
            return [i, performance.now() - startTime]
        }
        i++
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
const result = linearSearch(test_array,100000000)

console.log(`${result[0]}, search completed in ${result[1]} ms`)