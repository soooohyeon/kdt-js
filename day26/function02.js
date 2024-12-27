// 12. 함수 - 일반 함수 (매개변수로 함수 전달)

function showNumber(num) {
  console.log(`showNumber 함수 실행`);
  console.log(`num : ${num}`);
  return num;
}

// 함수 호출
console.log(showNumber(10));

// 함수를 매개변수로 넘겨줌
function decrease(number) {
  console.log(`decrease 함수 호출`);
  return number - 1;
}

// 함수 호출
console.log(decrease(10));

console.log(showNumber(decrease(10)));