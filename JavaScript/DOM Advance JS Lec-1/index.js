/*
console.log("Advance js started");

console.log(document);

// .innerHTML
let allPara = document.querySelector('#myDiv');
console.log(allPara);
console.log(allPara.innerHTML);  // get element
// allPara.innerHTML = ' '; // set element
console.log(allPara.innerHTML);  // element will be null

// .outerHTML
let bodyy = document.querySelector('html');
console.log(bodyy.innerHTML);


// .textContent
const myCon = document.querySelector('#myDiv');
console.log(myCon);
console.log(myCon.innerHTML);
console.log(myCon.outerHTML);

console.log(myCon.textContent);
console.log(myCon.innerText); 


// Adding new element / content
const newEle = document.createElement('h3');
newEle.innerText = "This is one of the best in the world";
const myEle = document.querySelector('#myDiv');
myEle.appendChild(newEle);
console.log(myEle);



// Adding a new Element and learn about .innerAdjacentHTML() method
const newElement = document.createElement("h1");
newElement.innerText = "This is the new Element TEXT";
const content = document.querySelector("#myDiv");

// ? there are four ways to add element posision
// beforeBegin , afterBegin, beforeEnd , afterEnd

// content.insertAdjacentElement('beforeBegin', newElement);
content.insertAdjacentElement('afterBegin', newElement);
// content.insertAdjacentElement('beforeEnd', newElement);
// content.insertAdjacentElement('afterEnd', newElement);



// ? remove the child
content.removeChild(newElement);

*/

// Changing CSS using JavaScript
let ele = document.getElementById("dom");

ele.style.color = "red";
ele.style.backgroundColor = "green";
ele.style.padding = "10px";
ele.style.fontSize = "35px";
ele.style.fontFamily = "'Courier New', Courier, monospace";
ele.style.fontWeight = "400"
