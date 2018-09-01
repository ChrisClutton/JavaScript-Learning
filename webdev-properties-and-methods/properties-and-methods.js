let username = 'chrisclutton';
let password = '123456';
console.log(username.length);

let languages = ['javascript', 'ruby', 'python'];
console.log(languages.length);

if (username.length < 5) {
    console.log('Your username is too short.');
} else {
    console.log('Your username meets the length requirements!');
}

console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

if (username.length > 5 && password.length > 5) {
    console.log('Your username and password met the length requirements!');
} else {
    console.log('Your username and/or password are too short.');
}

console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);

let user = {
    isAdmin: false,
    isModerator: true
};

if(user.isAdmin||user.isModerator) {
    console.log('I only care about one of these! They are authorised!');
} else {
    console.log('Don\'t let them in!');
}

console.log(username.toLowerCase());
console.log(username.toUpperCase());

let favouriteFruits = ['mango', 'blueberry', 'raspberry'];
let returnedValue = favouriteFruits.push('passionfruit');
console.log(favouriteFruits);
console.log(returnedValue);

let name = 'Chris';
console.log(name.charAt(0));
console.log(name.charAt(1));
console.log(name.charAt(2));
console.log(name.charAt(3));
console.log(name.charAt(4));

for (let i=0; i < name.length; i++) {
    console.log(name.charAt(i));
}

let sales = [5, 7, 3.5, 8];
let total = 0;

for (let i=0; i<sales.length; i++) {
    total = total + sales[i];
}

console.log(total);