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

*/

// Remove Event Listener
// To remove we must have same function and type of event and also element
function changeBg(){
    document.body.style.backgroundColor = "red";
}

document.addEventListener("click" , changeBg);

document.removeEventListener("click" , changeBg)