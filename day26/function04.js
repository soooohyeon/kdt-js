// 14. 함수 - 익명함수

let pringAll = function (num) {
  console.log(num);
};

pringAll(100);

// 매개변수로 전달한 값이 짝수라면 +10한 값 출력
// 아니라면 전달된 값만 출력
// result 변수, 익명함수 이용

let result = function (num) {
  console.log(typeof num);
  if (num % 2 === 0 && typeof num === 'number') {
    // 짝수라면 +10
    return num + 10;
  } else {
    // 아니라면 전달 값 출력
    return num;    
  }
}

console.log(result(10));
console.log(result('10'));  // 타입이 string으로 그냥 10 출력
console.log(result(11));
console.log(result('안녕'));

// 타이머와 관련된 전역함수
// 익명함수, 콜백함수
setTimeout(function() {
  console.log('2초뒤 출력');
}, 2000);   // 1000 = 1초