const boxClick = document.querySelector("#click");
const boxOver = document.querySelector("#over");
const boxOut = document.querySelector("#out");
const boxOverOut = document.querySelector("#over-out");
const boxClick2 = document.querySelector("#click2");

// console.log(boxClick);
// console.log(boxOver);
// console.log(boxOut);
// console.log(boxOverOut);
// console.log(boxClick2);

function changeBgGreen() {
  console.log(this);
  // this는 현재 이벤트가 걸린 자기 자신을 의미
  // boxClick.setAttribute("style", "background-color:darkblue")
  this.setAttribute("style", "background-color:green");
}

boxClick.addEventListener("click", changeBgGreen);

boxOver.addEventListener("mouseover", function(){
  boxOver.setAttribute("style", "background-color:skyblue")
});

function changeBgPink(){
  this.setAttribute("style", "background-color:pink");
  console.log(this);
}
boxOut.addEventListener("mouseout", changeBgPink);

boxOverOut.addEventListener("mouseover", changeBgGreen);
boxOverOut.addEventListener("mouseout", changeBgPink)
