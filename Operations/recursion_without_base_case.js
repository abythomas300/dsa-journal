function count(n) {
    console.log(n)
    count(n-1) // recursive case
}

count(10)

// What if we do not give a base case to a recursive function ? 
// Since this recursive function has no base case, the function has no condition to meet where it can finally return some value and stop the execution.
// This will result in the function calling itself until the call stack limit is hit aka stack overflow, resulting in a Range Error