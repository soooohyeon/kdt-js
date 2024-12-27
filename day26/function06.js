// 16. 함수 - 즉시 실행 함수 (재사용 목적이 없으므로 익명함수로 생성)


// 호출 필요 없음
(function() {
  console.log('JS 2일차 수업 - 즉시 실행 함수');
})();

// let result = (function(num1, num2) {
//   return num1 + num2;
// }) (10, 20);
// // 변수에 저장됐기 때문에 호출해줘야함
// console.log(result);

let result2 = (function(num1, num2) {
  return num1 + num2;
}) (50, "30");
console.log(result2);   // 5030

// 모듈패턴 (private scope)
const Counter = (function (){
  let count = 0;
  return {
    increment : function (){
      count++;
      return count;
    },
    decrement : function (){
      count--;
      return count;
    },
  };
})();

console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2
console.log(Counter.increment()); // 3
console.log(Counter.decrement()); // 2

// 초기화 코드
(function (){
  const name = "짱구";
  console.log(`${name}, 안녕!`);
})();
