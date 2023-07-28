/*


// * Array in JavaScript
let numbers = [1,2,3,4,5,6]
console.log(numbers);

// ? Insertion in Array

// End insert
numbers.push(101);
console.log(numbers);

// Start insert
numbers.unshift(1111);
console.log(numbers);

// Mid/index insert
numbers.splice(3,0,'a','b','c','d');
console.log(numbers);

// indexOf(value)
// -> return value index
console.log(numbers.indexOf(4));

// We want to check if the number exist in an array or not
// but this is not a good approach
if(numbers.indexOf(1111) != -1){
    console.log("Present");
}
else{
    console.log("Not present");
}

// valid approach
console.log(numbers.includes(1));

// Array of object
const courses = [
    {NO:1, Name : "jaymin"},
    {NO:2, Name : "Devang"},
    {NO:3, Name : "Bhargav"},
    {NO:4, Name : "Aryan"},
    {NO:5, Name : "Harshal"}
];

console.log(courses);

const ans = courses.find(function(courses) {
    return courses.Name === "jaymin";
})

// short approach of above fnx
const ans2 = courses.find((course)=> course.Name==='Aryan')

console.log(ans2);

// Q. To find a object in courses Array with the name 'Harshal'
const objAns = courses.find((course) => course.Name === 'Harshal');
console.log(objAns);


// Removing in an Array
// there are theree ways
// at end  --------> pop()
// at first -------> shift()
// at mid ---------> splice()


console.log("----------------------------------");

const arr = [1,2,3,4,5,6,7,8,9]
console.log(arr);

// remove from end
arr.pop()
console.log(arr);

// remve from start
arr.shift()
console.log(arr);

// remove from mid
arr.splice(5,1);
console.log(arr);





// * Empting an Array

let myArray = [89,12,223,44,89];
let arr2 = myArray;

// myArray.length = 0;
myArray.clear();
console.log(myArray);
console.log(arr2);



// * Combine Array
// To concate two array each other
let firstArr = [1,2,3,4,5];
let secondArr = [6,7,8,9,10];

let ans = firstArr.concat(secondArr) ;
console.log(typeof ans); 





// * Slice in an Array
let arr = [1,2,3,4,5,6,7,8,9,10]
let newArr = arr.slice(3,6);
console.log(newArr);



// * Iterate an Array
// -> Traverse in an Array
let arr = [1,2,3,4,5,6,7,8,9,10];

// simple way
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// second way
for(let i of arr){
    console.log(i);
}

// third way
arr.forEach((element)=>{
    console.log(element);
})



// * Join an Array
let arr = [1,2,3,4,5,6,7]
let joinedArr = arr.join('-');
console.log(joinedArr);


// ? Sort an Array
let arr = [19,56,36,89,25,255,67,199];

// .sort() : this method sort an array alphabatically
arr.sort()
console.log("Sort alphabatically ==> " , arr);

// .sort(function) : provide comparision funciton to sort in ascending order

const compare = (a,b) =>{
    return a - b
}

const compare2 = (a,b) =>{
    return b - a;
}

// ascending order sort
arr.sort(compare);
console.log("Sorting Ascending order ==> " ,arr);

// descending order sort
arr.sort(compare2);
console.log("Sorting Descending order ==> " ,arr);

// ? Sort Array of Object
let myArr = [
    { no: 1, name: "jaymin", age: 19},
    { no: 2, name: "bhargav", age: 20},
    { no: 3, name: "deep", age: 18},
    { no: 4, name: "harsh", age: 22},
    { no: 5, name: "dev" , age : 25},
];

// ascending order
const compare = (a,b) =>{
    return a.age - b.age;
}

// desceind order
const compare2 = (a,b) =>{
    return b.age - a.age;
}

// myArr.sort(compare);
// console.log(myArr);

// myArr.sort(compare2);
// console.log(myArr);

// Filter method
// -> filter an array
let nums = [1, -2, 44, -5, 67, 97, 21, -34, 56];

// filtering : show only positive numbers   
let ans = nums.filter((number) => {
    return number > 0;
});

console.log(ans);


// Mapping an Array
let nums = [1, 2, 44, 5, 67, 97, 21, 34, 56];

let ans = nums.map((value,idx)=>{
    return idx +' student_no = ' + value;
})
// console.log(ans);
for(let num of ans){
    console.log(num);
}

*/

// ? Mapping with Array of object
let myArr = [
  { no: 1, name: "jaymin", age: 19 },
  { no: 2, name: "bhargav", age: 20 },
  { no: 3, name: "deep", age: 18 },
  { no: 4, name: "harsh", age: 22 },
  { no: 5, name: "dev", age: 25 },
];

const mappedArr = myArr.map((obj) => {
  return {value : obj};
});

console.log(mappedArr);
