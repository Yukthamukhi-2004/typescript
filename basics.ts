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
let head: number = numbers[0];
let tail: number = numbers[3];
console.log(head, tail);

//Tuples

let ourStudent: [number, string, boolean];
ourStudent = [6, "alekhya", "True"];
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
type div=(a:number,b:number)=>
    div:num=(10,2)=>10/2;
console.log(num);


