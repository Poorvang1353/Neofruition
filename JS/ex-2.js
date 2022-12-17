const prompt = require("prompt-sync")();
let arr=[2,3,666,66,543]
let a=prompt("enter the index you want to delete: ")
delete arr[a]
let b=prompt("enter the number you want to add to the array: ")
arr.push(b)
console.log(arr)