// 2. let 키워드

let data1 = 'let 변수';
console.log(data1, typeof data1);
data1 = 'data1 변수 값 수정';
console.log(data1, typeof data1);

data1 = 100;
console.log(data1, typeof data1);

// let data1 = '값 수정';  // 오류 발생
// SyntaxError: Identifier 'data1' has already been declared

// console.log(data2, typeof(data2));  // 오류 발생
// ReferenceError: Cannot access 'data2' before initialization
let data2 = "let 변수 2번째";

// 호이스팅은 JS에서 변수와 함수 선언을 코드의 최상단으로 끌어올리는 것을 의미
// 코드를 실행하기 전에 변수, 함수 등의 선언이 메모리에 저장되기 때문에 가능

// var로 선언된 변수는 선언과 동시에 undefined로 초기화 되고 이후에 실제 값으로 할당됨
// 따라서 var로 선언된 변수는 선언전에도 접근 가능하며 undefined의 값을 가짐

// let과 const는 호이스팅이 되지만 초기화 X
// 선언 전 접급하려 하면 참조에러(ReferenceError)가 발생
// 그 이유는 let, const 는 선언이 코드의 실행 흐름에 도달했을 때 초기화 되기 때문