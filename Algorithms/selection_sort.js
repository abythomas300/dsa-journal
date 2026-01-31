// Algorithm: 
// 1. Keep a copy of the original array
// 2. Find the smallest value and add it to the resultant array
// 3. From original array, remove the slot where that smallest value resided
// 4. Continue step 2 and 3 till the original array has only 1 element
// 5. Push the last element to the resultant array
// 6. Return resultant array

// CODE:
// Helper function - find smallest value's index
function smallestValue(data) {
    let smallestIndex = 0
    for(let currentIndex=0; currentIndex < data.length; currentIndex++) {
        if(data[currentIndex] < data[smallestIndex]) {
            smallestIndex = currentIndex
        }
    }
    return smallestIndex
}

// main
function selectionSort(data) {
    console.log("selection sort function execution started...")
    const startTime = performance.now()
    let testDataCopy = [...data] // keep copy of original data and operate on it
    while(testDataCopy.length > 0) { 
        let smIndex = smallestValue(testDataCopy)
        result.push(testDataCopy[smIndex])
        testDataCopy.splice(smIndex, 1)
    }
    const endTime = performance.now()
    return endTime - startTime
}

const testData = []
let result = []

for(let i=1; i<=100000; i++) {
    testData.push(i)
}
console.log("testData: ", testData)
const timeTaken = selectionSort(testData)

console.log("Unsorted Data:", testData)
console.log("Sorted Data:", result)
console.log(`Completed in ${timeTaken/1000}s`)

// Algorithmic Complexity
// Time: O(n^2)
// Space: O(1)