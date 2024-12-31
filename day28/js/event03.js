const input = document.querySelector("input[type='button']");
const p = document.querySelector("p");

console.log(input);
console.log(p);

input.addEventListener("click", function(){
  // (1)
  with(p.style){
    // javascript에서 객체의 프로퍼티를 더 간단하게 접근할 수 있도록 해주는 구문
    // 특정 객체를 지정하여 그 객체의 프로퍼티를 코드 블록 안에서 직접 참조 가능
    // 카멜 표기법 사용
    fontSize = "30px";
    border = "2px dashed purple";
    width = "100px";
    backgroundColor = "lightblue";
  }

  // (2)
  // p.style.fontSize = "30px";
  // p.style.border = "2px solid black";

});