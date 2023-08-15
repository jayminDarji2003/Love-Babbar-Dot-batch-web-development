// Events
/*
// addEventListeners(type,fnx)
document.addEventListener('click', function () {
    console.log("I clicked on the document");
});

const heading = document.querySelector("#heading");
heading.addEventListener('click', ()=>{
    console.log("you clicked on the heading");
})

const btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
    let ans = confirm("Do you want to change the color of heading")
    if(ans){
        heading.style.color = "red";
    }
})

const btn2 = document.querySelectorAll('button')[1];
btn2.addEventListener('click', ()=>{
    let ans = confirm("Do you want to change the color of heading")
    if(ans){
        heading.style.color = "red";
        document.body.style.backgroundColor= "blue";
    }
})


// Remove Event Listener
// To remove we must have same function and type of event and also element
function changeBg(){
    document.body.style.backgroundColor = "red";
}

document.addEventListener("click" , changeBg);

document.removeEventListener("click" , changeBg)


*/


// the meaning of "false" in the third argument is Not in the capturing phase
/*
    If the third argument is not Given or False then execution :-
        target event ---> upper event/below event

    And if third argument is True :-
        upper event/below event  ---> target event
*/

const button = document.getElementById("btn1");
button.addEventListener('click',function (){
    document.getElementById("heading").style.color = "red";
    console.log("Button 1 clicked");
}, true)

document.addEventListener('click',function(){
    console.log("Document clicked");
},true)


// Event object
// the function got an event object
// In the below the "e" is object and we can use all the properties and mehods of it.

const button2 = document.getElementById("btn2");
button2.addEventListener("click", function(e){
    console.log(e);  // printing object
    e.preventDefault();  
    // the preventDefault method is preventing
}, false)