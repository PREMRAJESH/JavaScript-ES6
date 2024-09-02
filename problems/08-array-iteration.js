/* Iterate over an array of objects representing people and print out their names and ages. */

const students =[
    {"name": "Sargara Prem","age":21},
    {"name":"Nico Robin","age":28}
];
students.forEach(student=>{
    if('name' &&'age' in student){
        console.log(`students name is ${student.name} and ages is ${student.age}`)
    }
})
