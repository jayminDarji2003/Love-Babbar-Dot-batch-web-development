let myDiv = document.createElement("div");
function myfnx(e) {
  if (e.target.nodeName === "SPAN") {
    console.log("Span clicked");
  }
}
myDiv.addEventListener("click", myfnx,true);

for (let i = 0; i < 100; i++) {
  let newEle = document.createElement("span");
  newEle.innerText = "I'm a para " + i;
  myDiv.appendChild(newEle);
}

document.body.appendChild(myDiv);
