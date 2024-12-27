// 15. 함수 - 콜백함수
// 함수의 매개변수로 전달되어 특정 이벤트가 발생하거나 다른 함수가 호출될 때 실행되는 함수

// 콜백함수에 익명함수 정의
function userInput(name, callback) {
  console.log('userInput 함수 호출 첫번째');// 1
  callback(name);                          // 2
  console.log('callback 함수 호출 후');     // 7
}

userInput("신짱구", function(name) {
  console.log('callback 함수 호출 중');     // 3
  for(let i = 0; i < 5; i++) {             // 4
    console.log(name);                     // 5
  }
  console.log('익명함수 반복 끝');          // 6
});


console.log();

// 두 정수의 덧셈결과를 출력
function add(num1, num2, callback) {
  if (callback) {
    callback(num1 + num2);
  }
  return num1 + num2;
}

const print = function(result) {
  console.log(`print  익명함수 : ${result}`);
}

//print 함수는 콜백함수로 사용된다
//단순히 값을 받아서 console.log를 이용해 출력하는 역할을 한다
//콜백함수로 전달될 때 함수 이름만 전달하는데 add함수는 전달된 print함수를 호출하는 시점에서
//print(result)와 같이 호출하게 된다

//함수를 즉시 호출하는 경우 함수를 즉시 실행시키고 반환값을 전달하는 것이다
//print함수는 반환값이 없으므로 맞지 않다

const result = add(10, 5, print); // print 함수의 반환값이 없기 때문에 소괄호 없이 식별자만 사용
const result2 = add(10, 5);