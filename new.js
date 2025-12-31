function greet(User) {
    let title;

    if (user.gender.toLowerCase() === "male") {
        title =  "Mr" ;

    } else if (user.gender.toLowerCase() === "female") {
        title = "Mrs";
    } else {
        title = "Others";
    }
    let eligible;
    if (user.age>=18){
        eligible = "You can vote."
    }
    else {
        eligible = "You can't vote"
    }
    console.log(`Hii ${title} ${user.name}, your age is ${user.age}. ${eligible}`)
}

const user = {
    name:"Saniya",
    age: 20,
    gender: "female"
};

greet(user);