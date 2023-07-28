// * In-built objects and Arrays
// ? In-built objects

// ! Math Object
console.log("----------- Math Object ---------");

// random()
// -> Generate random number from 0 to 1
let ran = Math.random();
let random = Number.parseInt(ran * 100);
console.log("Random number between 1 to 100 =" , random);


// PI
// -> Return PI value 
console.log("The PI value is = " , Math.PI);

// round(value)
//-> Return the round figure of value
console.log("Round figure = " , Math.round(1.100));

// min(values)
// -> Return min value
console.log("Min value = " , Math.min(10,20,50,100));

// max(values)
// -> Return max value
console.log("Min value = " , Math.max(10,20,50,100));

// abs(values)
// -> return only positive value, if we have negative value then it converts in positive value then return
console.log("Absolute value = " , Math.abs(-188));


// ! String Object
console.log("----------- String Object ---------");

// There are two types of String available
/* 1. Primitive string
2. object string
ex. Primitive str
let str = 'jaymin'
ex. object string
let str = new string('hat')
*/

let str1 = 'jaymin';
console.log(str1 , typeof str1);

let str2 = new String('jaymin');
console.log(str2 , typeof str2);

// length()
console.log("Length = " , str1.length);

// toUpperCase
console.log("UpperCase string = " , str1.toUpperCase());

// toLowerCase
console.log("LowerCase stirng = " , str1.toLocaleLowerCase());

// access through index
console.log("Character at 0 index = " , str1[0]);

// include(value)
// -> It checks the value, include or not
console.log("min is include in str1 = " , str1.includes('min'));

// startsWith(value)
// -> It checks the value is starts with string, it string starts with given value then return true else false
console.log("startWith string = " , str1.startsWith('jay'));

// endsWith(value)
// -> check end value
console.log("endsWith string = " , str1.endsWith('in'));

// indexOf(chracter)
// -> return index of character
console.log("Index of i = ", str1.indexOf('i'));

// trim()
// remove extra spaces on the string
let newStr = "    jiyaa"
console.log("Trim string = " , newStr.trim());

// replace(str1, str2)
console.log("Replce to jaimin = " , str1.replace('jay' , 'jai'));

// split()
// -> split the string by given value
let s = "This is my string"
console.log("split method = " , s.split(' '));



// ? Escap sequence
console.log("---------- Excape sequence --------");
// \n -> nextLine
// \t -> tab
let myStr = 'This\n is my  \t string\'s of string\"s ';
console.log(myStr);

// ? Template literals
console.log("------- Template literals -------");
let frd = "jaymin"
let frd2 = "devang"

let words = `${frd}
is
best friend of ${frd2}`
console.log(words);


// ? Date and Time
console.log("----------- Date & Time -----------");
let date1 = new Date();
let date2 = new Date('july 22 2023 11:00')
let date3 = new Date('2003,10,29,3:00')

console.log(date1);
console.log(date2);
console.log(date3);

// we also have getters and setters
console.log(date1.getDate());
console.log(date1.getFullYear());
console.log(date1.getMonth());
console.log(date1.getSeconds() , date1.getMinutes());

date1.setDate(2)
console.log(date1);

date1.setFullYear(2020)
console.log(date1);
