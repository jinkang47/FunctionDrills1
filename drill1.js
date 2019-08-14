let name = "Jin";
let age = 39;

function getYearOfBirth(age){
    return 2019 - age;
}

function createGreeting(name, age) {
    const yob = getYearOfBirth(age);
    return `I was born in ${yob}`;
}

const greeting1 = createGreeting();
console.log(greeting1);


