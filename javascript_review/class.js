'use strict';

class Person{
    // constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age  = age;
    }

    // methods
    speaks(){
        console.log(`${this.name}: hello!!`)
    }
}

const sh = new Person('sh91c', 30);
console.log(sh.name);
console.log(sh.age);
sh.speaks();

// getter, setter

class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName  = lastName;
        this.age       = age;
    }
    
    get age() {
        return this._age;
    }

    set age(value) {
        // if(value < 0){
        //     throw Error('age can not be negative..');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age)

// 상속, 다형성
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`)
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{};

// Override
class Triangle extends Shape{
    draw(){
        super.draw(); // 부모의 메소드도 호출하면서
        console.log('🔺'); // 재정의도 가능함
    }
    getArea(){
        return (this.width * this.height) / 2;
    }

    toString(){
        return `Triangle: color: ${this.color}`
    }
};

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// Class checking : instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

console.log(triangle.toString());