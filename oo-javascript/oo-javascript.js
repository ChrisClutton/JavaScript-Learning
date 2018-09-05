let getArea = function(width, height) {
    return width * height;
}

console.log(getArea(20, 10));
console.log(getArea(10, 5));

function Trainer(name, tasks = []) {
    this.name = name;
    this.tasks = tasks;
    this.identify = function() {
        console.log(`The trainer is ${this.name}`);
    };
    this.addTask = function(task) {
        this.tasks.push(task);
    };
    this.printTasks = function() {
        if (this.tasks.length === 1) {
            console.log('Nearly Finished!')
        }
        console.log(`Remaining Tasks: ${this.tasks}`);
    };
}

function whoAmI() {
    console.log0
    console.log(`I am ${this.name}.`);
}

let Chris = new Trainer('Chris', ['Pay attention!']);
let Raz = new Trainer ('Raz');
Raz.addTask('Get a Pokemon!');
Chris.identify();
console.log(Chris.tasks);
Raz.identify();
console.log(Raz.tasks);
Raz.printTasks();

whoAmI()
whoAmI()

if (getArea == getArea) {
    console.log("getArea == getArea = true")
}

if (Raz.identify == Chris.identify) {
    console.log("Will it run?")
}

if (Raz.whoAmI == Chris.whoAmI) {
    console.log("It's true")
}