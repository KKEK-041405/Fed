//filter
const numbers = [1,2,3,4,5,6,7,8,9]
const evenNum = numbers.filter(x => {x%2 == 0})
console.log("array before filtering"+numbers)
console.log("array after filtering evens numbers",evenNum)


//reduce
const num = [1,2,3,4,5,6,7,8,9]
const sum = num.reduce((accu,curr)=>{accu+=curr},0)
console.log(`sum of ${num} using reduce is ${sum}`)

//map
const nums = [1,2,3,4,5,6,7,8,9]
const doubles = nums.map((a)=>{a*2})
console.log(doubles)
