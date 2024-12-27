// 1. var 키워드

var data1 = '10';
var data2 = 10;

// 변수 타입 확인
// typeof 연산자, typeof() 함수 : 값의 자료형 확인
console.log(data1, typeof data1, typeof(data1));
console.log(data2, typeof data2, typeof(data2));

var data1 = true;
console.log(data1, typeof data1, typeof(data1));

// 호이스팅
// 선언 위치에 상관없이 존재한다면 메모리에 할당됨
// 다만 값은 들어가기 이전이라 undefined로 출력됨
// = 초기화 작업은 호이스팅 되지 않고 선언만 호이스팅됨
console.log(name1, typeof name1);; //ReferenceError: name1 is not defined
var name1 = '홍길동';
console.log(name1, typeof(name1));

var data3 = "값 절대 수정 금지";
// var를 사용하여 변수 선언 (오래된 JS 버전에서 사용됨)
// let, count를 사용하는 것이 권장됨(변수의 스코프와 호이스팅 동작)
console.log(data3, typeof data3);
var data3 = "수정했지롱~";
console.log(data3, typeof data3);
data3 = 2025;
console.log(data3, typeof data3);