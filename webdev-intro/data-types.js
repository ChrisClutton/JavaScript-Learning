let greeting;
console.log(greeting);
greeting = 'Hello, world!';
console.log(greeting);

let firstName = 'Chris';
let lastName = "Clutton";
console.log(firstName);
console.log(lastName);

let message = 'You can\'t be serious?';
console.log(message);

let pi = 3.14;
let age = 33;
console.log(pi);
console.log(age);

console.log(1+1);
console.log(2-1);
console.log(2*2);
console.log(3/4);

let isDrinkingAge = true;
let isSeniorCitizen = false;

console.log(isDrinkingAge);
console.log(isSeniorCitizen);

let favouriteFruits = ['mango', 'raspberry', 'blueberry'];
console.log(favouriteFruits);
console.log(favouriteFruits[0]);
console.log(favouriteFruits[1]);
console.log(favouriteFruits[2]);

let userObject = {
    name: 'Chris', 
    age: 33, 
    favouriteFruits: ['mango', 'raspberry', 'blueberry'],
    car: {
        make: 'Aston Martin',
        model: 'DB9',
        isFunctional: true
    }
};

console.log(userObject.name);
console.log(userObject.age);
console.log(userObject.favouriteFruits);
console.log(userObject.favouriteFruits[0]);

console.log(userObject.car.make);
console.log(userObject.car.model);
console.log(userObject.car.isFunctional);

if (userObject.age >= 21) {
    console.log('This user can drink!');
} else {
    console.log('This user cannot drink!');
}

let user = 'Chris';

if(user) {
    console.log('Goodbye, ' + user + '!');
} else {
    console.log('Goodbye!');
}