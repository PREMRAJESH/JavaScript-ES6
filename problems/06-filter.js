/* Given an array of numbers, filter out the even numbers and create a new array.  */

const students = [
    { name: "prem", age: 21 },
    { name: "ash", age: 29 },
    { name: "john", age: 20 },
    { name: "robin", age: 30 }
];

const filteredData = students.filter(function(student) {
    return student.age === 21;
});

console.log(filteredData);
