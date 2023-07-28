// console.log("hii i'm ready");

// // object
// const rectangle = { 
//     length : 1,
//     breadth : 2,
//     printArea : function area(){
//         return this.length * this.breadth;
//     }
// }
// console.log(rectangle);
// console.log(rectangle.printArea());

// // function
// console.log("---------------------");

// function createRectangle(len, bre) {
//     const rectangle = { 
//         length : len,
//         breadth : bre,
//         area(){
//             return this.length * this.breadth;
//         }
//     }
//     return rectangle;
// }

// const rec1 = createRectangle(2,2);
// console.log(rec1.area());

// // constructor function
// console.log("===============================");
// function Rectangle() {
//     this.length = 10;
//     this.breadth = 20;
//     this.drow = function(){
//         console.log("rectangle here");
//     }
// }

// const obj = new Rectangle();
// console.log(obj);

// console.log("------------------");
// // Dynamic nature of object
// const newObj = {
//     name : "jaymin",
//     age : 19,
//     marks : 99
// }
// console.log(newObj);
// newObj["degree"] = "bca";  // add new
// newObj["marks"] = 77;   // update
// delete newObj["age"];  // delete
// console.log(newObj);

// // primitive datatype and non-primitive datatype (objects)
// // difference
// console.log("--------------------");
// let a = 10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);

// console.log("-------------");
// const x = {
//     value:10,
// }
// let y = x;
// x.value++;
// console.log(x.value);
// console.log(y.value);

// console.log("===========================");
// let p = 10;
// const increment = (p) =>{
//     p++;
// }
// increment(p);
// console.log(p);

// console.log("----------------------");
// let p1 = {
//     value:10,
//     marks:20    
// };
// const increment1 = (p1) =>{
//     p1.value++;
//     p1.marks++;
// }
// increment1(p1);
// console.log(p1);

// ? For in loop
// ? For of loop

// const marks = {
//     jaymin : 99,
//     deep : 77,
//     harshal : 65,
//     bhargav : 98,
//     dev : 65,
//     poonam : 100,
//     ayushi : 89,
//     gopi : 100
// }

// // console.log(marks.contains(jeel));
// if('jeel' in marks){
//     console.log("jeel is not absent");
// }
// else{
//     console.log("jeel is absent");
// }

// // * for in loop
// for(let key in marks){
//     console.log("The marks of " + key + " is " + marks[key]);
// }

// let marks2 = [99,77,65,98,65,100,89,100];

// // * for of loop
// for(let marks of marks2){
//     console.log(marks);
// }



// ? Object cloning 
// Coping one object key:value to another object

// 1. Iteration
// using the iteration we can cloning the object
// const person = {
//     name : "jaymin",
//     age : 19,
//     degree : "BCA",
//     live : "Gujarat"
// }
// console.log("Real object = " , person);

// const people = {}

// for(let key in person){
//     people[key] = person[key];
// }

// console.log("Real object = " , people);


// 2. Assign
// using assign function we can cloning the object
// const personOne = {
//     name : "jaymin",
//     age : 19,
//     degree : "BCA",
//     live : "Gujarat"
// } 

// const personNew = Object.assign(personOne);
// console.log(personNew);

// 2. spread
// using assign function we can cloning the object
const personOne = {
    name : "jaymin",
    age : 19,
    degree : "BCA",
    live : "Gujarat"
} 

const personNew = {...personOne};
console.log(personNew);