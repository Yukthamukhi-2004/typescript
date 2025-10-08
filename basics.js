var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//7-10-25
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
var first = numbers[0];
var last = numbers[3];
console.log(first, last);
//Tuples
var ourStudent;
ourStudent = [6, "alekhya", true];
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
var person1 = {
    Username: "Kodumru",
    UserId: 2100031062,
};
console.log(person1);
//Functions
function func() {
    //void used when func doesnt return any value
    console.log("Hello World");
}
function Sum(a, b) {
    return a + b;
}
console.log(Sum(10, 20));
//default parameter functions
function power(val, exponent) {
    if (exponent === void 0) { exponent = 5; }
    return Math.pow(val, exponent);
}
console.log(power(5));
var negateFunction = function (value) { return value * -1; };
console.log(negateFunction(5));
//Type casting
var x = 10.6;
console.log(Math.round(x)); //"as" overrides the type of variable
var y = "hello";
console.log(y.length); //"<> is same as 'as'".
//Classess
var Human = /** @class */ (function () {
    function Human(skincolour) {
        if (skincolour === void 0) { skincolour = "dusky"; }
        this.ownername = "Jane";
        this.height = 180;
        this.skincolour = skincolour;
    }
    return Human;
}());
var man = new Human("black");
console.log("Man name is Jane,skincolour is ".concat(man.skincolour, ",height is ").concat(man.height));
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    return Square;
}(Rectangle));
var mySq = new Square(20);
console.log(mySq.getArea());
var Rectangles = /** @class */ (function () {
    // using protected for these members allows access from classes that extend from this class, such as Square
    function Rectangles(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangles.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangles.prototype.toString = function () {
        return "Rectangle[width=".concat(this.width, ", height=").concat(this.height, "]");
    };
    return Rectangles;
}());
var Squares = /** @class */ (function (_super) {
    __extends(Squares, _super);
    function Squares(width) {
        return _super.call(this, width, width) || this;
    }
    // this toString replaces the toString from Rectangle
    Squares.prototype.toString = function () {
        return "Square[width=".concat(this.width, "]");
    };
    return Squares;
}(Rectangles));
var mySquares = new Squares(20);
console.log(mySquares.toString());
