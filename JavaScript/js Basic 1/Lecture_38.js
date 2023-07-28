console.log("Jaymin here");

if(true){
    let a = 10;
    console.log(a);
}

// console.log(a); 

let name = "jaymin";
console.log(name);

name = "deep"
console.log(name);

let obj = {
    name : "jaymin",
    age : 10
}
console.log(obj["age"]);

let arr = ["jaymin" , "darji" , 19 , "kirc"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

let a = 99
let b = "99"
console.log(a == b);
console.log(a === b);

let age = 17;
let status = (age >= 18) ? "I can vote" : "I can not vote";
console.log(status);

console.log("------------ Loops --------------");

// For loop
console.log("--------- for loop ----------");
for(let i=0; i<5; i++){
    console.log(i);
}

// while loop
console.log("----------- while loop ---------");
let i = 0;
while(i < 5){
    console.log(i);
    i++;
}