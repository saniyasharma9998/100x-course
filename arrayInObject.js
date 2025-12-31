function adult(user) {

    return user.filter(user => user.age > 18);
}

const user = [
    { name: "Saniya", age: 20},
    {name: "Gauri", age:21},
    {name: "Ashika", age: 16},
    {name: "Priyanka", age:29},
    {name:"Kanishka", age:13}
];

console.log(adult(user));