// 11. 함수 - 일반 함수

// 매개변수 O, 리턴값 O 함수 정의
function getAge(age, num) {
  console.log(age, typeof age);
  console.log(num, typeof num);
  return age + num;
}

// 매개변수 O, 리턴값 O 함수호출 ⇒ 출력(식별자(인수1, 인수2)); or 변수명 = 식별자(인수1, 인수2);
console.log(getAge(20, 1));
let result1 = getAge(25, 1);
console.log(result1);

// 디폴트 매개변수
function getAge1(name, age, num=1) {
  console.log(name, typeof name);
  console.log(age, typeof age);
  console.log(num, typeof num);
  return age + num;
}

let result2 = getAge1("홍길동", 20);
console.log(result2);

let result3 = getAge1("홍길동", 20, 5);
console.log(result3);

let result4 = getAge1("홍길동", 20, "안녕");  // 동적바인딩으로 가능
console.log(result4);   // 20안녕으로 출력됨

// 아이디, 비밀번호, 이름을 전달받고 이름의 기본값을 사용자로 설정하기
// 함수명 : introduce 매개변수 O, 리턴값 X
function introduce (id, pw, name="홍길동") {
  console.log(`아이디 : ${id}, 비밀번호 : ${pw}, 이름 : ${name}`);
}


introduce("java", 1234);
introduce("java", 0123, "짱구"); // 83 
// ⇢ 0123로 인수 전달시 8진수로 해석되어 계산됨
//    0123 8진수로 변환 ⇨  1 x 8² + 2 x 8¹ + 3 x 8^0 = 64 + 16 + 3 = 83(10진수)
// ** 0을 붙이고 싶다면 문자열로 전달할 것


// 가변 매개변수 : 함수 호출 시 몇개의 값이 전달될지 모를 때 사용
function printAdd(...numbers){
  console.log(numbers, typeof numbers);
  // for (let i = 0; i < numbers.length; i++){
  //   // console.log(i);
  //   console.log(numbers[i]);
  // }

  //자바 for(자료형 변수명 : 배열명){}, 스트림 forEach
  //자바스크립트 for(let 변수명 in 배열명){}
  // for(let i in numbers){
  //   // console.log(i); //인덱스번호
  //   console.log(numbers[i]);
  // }

}

printAdd(1, 2, 3, 'a'); // [ 1, 2, 3, 'a' ] object

