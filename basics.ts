//7-10-25
//basic code
function addNumbers(a: number, b: number) {
  return a + b;
}
let sum: number = addNumbers(6, 4);
console.log("Sum of 2 numbers:" + sum);

//Variables
//both type and initial value
var employeeName: string = "Ramesh";
console.log(employeeName);

//only type
var employeeId: number;
employeeId = 2100031062;
console.log(employeeId);

//only initial value->called Type Inference
var employeeSal = 80000;
console.log(employeeSal);

//without type and initial value
var employeeAge;
employeeAge = "45";
console.log(employeeAge);

//special Types-*any,*unkown,*never,*undefined &null
//Any-diable type checking
let u: any = "true";
u = "string";
Math.round(u);

//Arrays
const Id: number[] = [];
Id.push(2100031062);
Id.push(2100031076);
Id.push(2100030543);
Id.push(2100030808);
console.log(Id);
//Array-Readonly
const Sal: readonly number[] = [80000, 5000, 700000];
console.log(Sal);
//Array-Type inference
const numbers = [2, 3, 4, 8];
numbers.push(6);
let first: number = numbers[0];
let last: number = numbers[3];
console.log(first, last);

//Tuples

let ourStudent: [number, string, boolean];
ourStudent = [6, "alekhya", true];
console.log(ourStudent);

//Object Types
const car: { type: string; millege?: number } = { type: "BMW" };
car.millege = 300;
console.log(car);

//Enums
enum Week {
  Monday = 1,
  Teusday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
let weekend = Week.Sunday;
console.log(weekend);

/**Aliases-Object alias
 *        -Union alias
 *        -function alias
 *        -alias for tuple,array
 **/
//object alias
type Person = {
  name: string;
  age: number;
};
let p1: Person = { name: "mukhi", age: 21 };
console.log(p1);
//Union alias
type personDetails = string | number;
let details: personDetails = "Yuktha";
console.log(details);
//function alias
--------------------------------------------------------------------------------------------
//8-10-25
//Interfaces-only applies for object types
interface User {
  Username: string;
  UserId: number;
}
const person1: User = {
  Username: "Kodumru",
  UserId: 2100031062,
};
console.log(person1);

//Functions

function func(): void {
  //void used when func doesnt return any value
  console.log("Hello World");
}

function Sum(a: number, b: number) {
  return a + b;
}
console.log(Sum(10, 20));
//default parameter functions
function power(val: number, exponent: number = 5) {
  return val ** exponent;
}
console.log(power(5));

//Type alias
type Negate = (value: number) => number;
const negateFunction: Negate = (value) => value * -1;
console.log(negateFunction(5));

//Type casting
let x: unknown = 10.6;
console.log(Math.round(x as number)); //"as" overrides the type of variable

let y: unknown = "hello";
console.log((<string>y).length); //"<> is same as 'as'".

//Classess

class Human {
  private ownername: string = "Jane";
  public skincolour: string;
  public constructor(skincolour: string = "dusky") {
    this.skincolour = skincolour;
  }

  public readonly height: number = 180;
}
const man = new Human("black");
console.log(
  `Man name is Jane,skincolour is ${man.skincolour},height is ${man.height}`
);

//Inheretence:Implements
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }
  // getArea gets inherited from Rectangle
}

const mySq = new Square(20);

console.log(mySq.getArea());

//Override
interface Shape {
  getArea: () => number;
}

class Rectangles implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Squares extends Rectangles {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}

const mySquares = new Squares(20);

console.log(mySquares.toString());
