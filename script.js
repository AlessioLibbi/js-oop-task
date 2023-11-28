// 1. Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. 
// Create two instances of the 'Person' class and display their details.


class Person {
    constructor(name, age, country)  {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    printPerson() {
        console.log(this.name + " ha " + this.age + " anni " + " e viene da " + this.country )
    }

    
    
}

var newPerson1 = new Person('Luca' ,'20' ,'Siena')
var newPerson2 = new Person('Lorenzo' ,'240' ,'Sassuolo');

newPerson1.printPerson();
newPerson2.printPerson();


// 2. Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. 
// Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    rettangelArea() {
        let area = this.width * this.height;
        return area;
    }
    rettangelPerimeter() {
        let perimeter = (this.width + this.height) * 2;
        return perimeter;
    }
}

let myRectangle = new Rectangle(10, 20);
console.log(myRectangle.rettangelArea());
console.log(myRectangle.rettangelPerimeter());




// 3. Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. 
// Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.



class Vehicle {
    constructor(color, model, year) {
        this.color = color;
        this.model = model;
        this.year = year;
    }
    vehicleDetails() {
        console.log(`your car is ${this.color}, the model is ${this.model} and its come out in ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(color, model, year, ndoors) {
        super(color, model, year)
        this.ndoors = ndoors;
    }
    vehicleDetails()  {
        console.log(`your car is ${this.color}, the model is ${this.model} and its come out in ${this.year} and she has like ${this.ndoors} doors`);
    }
}

let punto = new Car('bianca', 'punto', 2012, 5)
console.log(punto)



// 4. Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. 
// Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.


class BankAccount {
    constructor(acNumber, balance) {
        this.acNumber = acNumber;
        this.balance = balance;
    }
    deposit(depositAmmount) {
        this.balance += depositAmmount;
        console.log(this.balance);
        return this.balance
    }
    withdraw(withdrawAmmount) {
        this.balance -= withdrawAmmount
        console.log(this.balance);
        return this.balance
    }
}

var myBankAccount = new BankAccount(111, 300)

myBankAccount.deposit(500);
myBankAccount.withdraw(600)

// 5. Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. 
// Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. 
// Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.


class Shape {
    areaCalculetor(base, altezza) {
        let area = 0;
        area = base * altezza;
        console.log(area);
    }
}
class Circles extends Shape {
    areaCalculetor(ray) {
        area = 2 * Math.PI * ray;
        console.log(area);
    }
}
class Triangles extends Shape {
    areaCalculetor(base, altezza) {
        area = (base * altezza) / 2;
        console.log(area);
    }
}


















////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1 - Creare una classe "Cerchio" con proprietà raggio e un metodo per calcolare l'area.
class Round {
    constructor (ray) {
        this.ray = ray;
    }
    areaCounter() {
        let i = 2 * Math.PI * this.ray;
        let result = i.toFixed(2,0)
        
        return result
    }
}
var newRound = new Round(7);
console.log(newRound.areaCounter());

// 2 - Creare una classe "Studente" con proprietà nome, cognome e un array di voti.
// Aggiungere un metodo "aggiungiVoto" alla classe "Studente" che permetta di aggiungere un voto all'array dei voti.
class Student {
    constructor(nome, cognome, voti = []) {
        this.nome = nome;
        this.cognome = cognome;
        this.voti = voti;
    }
    addVote(voteToAdd) {
        this.voti.push(voteToAdd)
    }
}
var newStudent1 = new Student('Alessio', 'Libbi', [7,])
newStudent1.addVote(8)
console.log(newStudent1);



// 3 - Creare un classe Animal con proprietà speed e name
// Creare un metodo run() che accetta il parametro speed. Il metood deve stampare la strina  `${this.name} runs with speed ${this.speed}.`
// Creare il metodo stop() che setta speed a 0 e mostra un messaggio
// Creare la classe Rabbit che estende Animal e implementa il metodo hide()
// Il metodo hide mostra un messaggio del tipo `<nome animale> stands still.`
// Istanziare in "Coniglio" che corre si ferma e si nasconde



class Animal {
    constructor(speed, name) {
        this.speed = speed;
        this.name = name;
    }
    run(speed) {
        console.log(this.name + " runs with speed " + this.speed);
        this.speed = speed ;
    }
    stop() {
        
        console.log(this.name + ' si e fermato');
        this.speed = 0;
        
    }
}
class Rabbit extends Animal {
    constructor(speed, name, hidden) {
        super(speed, name) ;
        this.hidden = hidden;
    }
    hide() {
        console.log(this.name + "stand still");
        this.hidden = 1;
    }
}

let myRabbit = new Rabbit(20, 'Arturo', 0);

myRabbit.run(20);
myRabbit.stop();
myRabbit.hide();