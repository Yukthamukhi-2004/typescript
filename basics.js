//basic code
function addNumbers(a, b) {
    return a + b;
}
var sum = addNumbers(6, 4);
console.log("Sum of 2 numbers:" + sum);
//Variables
//both type and initial value
var employeeName = "Ramesh";
console.log(employeeName);
//only type
var employeeId;
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
var u = "true";
u = "string";
Math.round(u);
//Arrays
var Id = [];
Id.push(2100031062);
Id.push(2100031076);
Id.push(2100030543);
Id.push(2100030808);
console.log(Id);
//Array-Readonly
var Sal = [80000, 5000, 700000];
console.log(Sal);
//Array-Type inference
var numbers = [2, 3, 4, 8];
numbers.push(6);
var head = numbers[0];
var tail = numbers[3];
console.log(head, tail);
//Tuples
var ourStudent;
ourStudent = [6, "alekhya", "True"];
console.log(ourStudent);
//Object Types
var car = { type: "BMW" };
car.millege = 300;
console.log(car);
//Enums
var Week;
(function (Week) {
    Week[Week["Monday"] = 1] = "Monday";
    Week[Week["Teusday"] = 2] = "Teusday";
    Week[Week["Wednesday"] = 3] = "Wednesday";
    Week[Week["Thursday"] = 4] = "Thursday";
    Week[Week["Friday"] = 5] = "Friday";
    Week[Week["Saturday"] = 6] = "Saturday";
    Week[Week["Sunday"] = 7] = "Sunday";
})(Week || (Week = {}));
var weekend = Week.Sunday;
console.log(weekend);
var p1 = { name: "mukhi", age: 21 };
console.log(p1);
var details = "Yuktha";
console.log(details);
