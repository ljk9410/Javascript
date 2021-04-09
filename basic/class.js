'use strict';
//Object-oriented programming
//class: template
//object: instance of a class
//JavaScript classes
//- introduced in ES6
//- syntactical sugar over prototype-based inheritance

//1. Class declarations
class Person
{
    //constructor
    constructor(name, age)
    {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak()
    {
        console.log(`${this.name}: hello!`);
    }
}
const lee = new Person('lee', 20);
console.log(lee.name);
console.log(lee.age);
lee.speak();

//2. Getter and setters -> 입력하는 사람의 실수를 줄여주기 위한 방어적인 방법
class User
{
    constructor(firstName, lastName, age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age()
    {
        return this._age;
    }

    set age(value)
    {
        // if (value < 0)
        // {
        //     throw Error('age can not be negative!!');
        // }
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('Lee', 'Jung Kyu', -1);
console.log(user1.age);

//3. Fields (public, private)
//Too soon!
class Experiment
{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods
//Too soon!
class Article
{
    static publisher = 'dream coding';
    constructor(articleNumber)
    {
        this.articleNumber = articleNumber;
    }
    static printPusblisher()
    {
        console.log(Article.publisher);
    }
}

//5. Inheritance
//a way for one class to extend another class.
class Shape
{
    constructor(width, height, color)
    {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw()
    {
        console.log(`drawing ${this.color} color of`);
    }

    getArea()
    {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw()
    {
        super.draw();
        console.log('child');
    }
    getArea()
    {
        return (this.width * this.height) /2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

