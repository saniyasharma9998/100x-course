function greet(user) {
    console.log(`hello ${user.name}! You are ${user.age} years old.`);

}

const user = {
    name: "Saniya",
    age: 20
};

greet(user);