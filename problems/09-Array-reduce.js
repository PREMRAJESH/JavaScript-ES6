/* Use the reduce method to find the total sum of an array of numbers. */
const array =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const sum = array.reduce((sumofArray,arr) =>
{
return arr + sumofArray
},0)
console.log(sum)