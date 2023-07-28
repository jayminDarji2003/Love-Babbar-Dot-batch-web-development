// ? All about Function in JS
/*
// way 1
function helloWorld(){
    console.log("Hello world 1.0 ");
}
helloWorld();

// way 2 : Arrow function
const helloWorld2 = () =>{
    console.log("hello world 2.0 ");
}
helloWorld2();

// way 3 : Arrow function
const way3 = function helloWorld3() {
    console.log("hellow world 3.0");
}
way3();

const hew = way3;
hew();


// dynamic function
function sum() {
    let total = 0;
    for(let value of arguments){
        total += value;
    }
    return total;
}
let ans  = sum(1,2,4,5,6,6,6);
console.log(ans);


// ? Rest operator
function sum(...args){
    console.log(args);
}
sum(1,1,1,1,1);



*/

//  Errow handling : try-catch
// syntax :-
    // try{

        // }
        // catch(e) {
        
            // }
/*

// Scope
{
    var a = 10;
    console.log(a);
}
console.log(a);

if(true){
    let num = 10000;
    console.log(num);
}

if(true){
    var numm = 1010
    console.log(numm);
}
console.log(numm);


const name = "jaymin";
function myName(){
    const name = "jaymin darji";
    console.log(name);
}
myName();

*/


//Reduce method
let arr = [1,2,3,4,5,6,7,8]
let total = 0;
for(let value of arr){
    total += value;
}
console.log(total);

let s = arr.reduce((accumulator,currentValue)=> accumulator + currentValue,0);

console.log(s);


// sort method
let array = [1,2,3,4,5,10,20,30];
array.sort(compare);

function compare(a,b){
    return a - b;
}

console.log(array);