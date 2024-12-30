// 6. 객체와 배열 실습

//1. 학생의 정보를 저장하는 객체를 만들고 그 학생의 정보를 출력하기
//학생정보 : 이름, 나이, 성적(1과목)
//1) 객체에 최소 3명의 데이터를 추가하고 이름과 성적 출력하기
//2) 객체에서 이름 키에 해당하는 값들만 출력하기
//3) 객체에 새로운 속성(학년)을 추가하고 객체 전체 출력하기(for문 사용)

//방법1) 클래스로 객체 생성
class Students1{
  constructor(name, age, score){
    this.name = name;
    this.age = age;
    this.score = score;
  }
}

//학생 객체 생성
const student1 = new Students1("짱구", 5, 85);
const student2 = new Students1("철수", 5, 90);
const student3 = new Students1("유리", 5, 100);

// 생성한 객체 배열에 넣기
const students = [student1, student2, student3];

//1) 이름과 성적 출력
students.forEach(student => {
  console.log(`이름 : ${student.name}, 성적 : ${student.score}`);
});

//2) 객체에서 이름 키에 해당하는 값들만 출력하기
students.forEach(student => {
  console.log(`이름 : ${student.name}`);
});

//3) 학년 속성 추가후 전체 출력
students.forEach(student => {
  student.grade = '1학년';
});
students.forEach(student => {
  console.log(student);
});

//방법2) 생성자 함수 사용
function Students2(name, age, score){
  this.name = name;
  this.age = age;
  this.score = score;
}

//학생 객체 생성
const student4 = new Students1("짱구", 5, 85);
const student5 = new Students1("철수", 5, 90);
const student6 = new Students1("유리", 5, 100);

// 생성한 객체 배열에 넣기
const stu2 = [student4, student5, student6];

//2) 이름만 출력
stu2.forEach(student => {
  console.log(`이름 : ${student.name}`);
});

//3) 학년 속성 추가후 전체 출력
stu2.forEach(student => {
  student.grade = '2학년';
});
stu2.forEach(student => {
  console.log(student);
});

// //방법3) 객체 리터럴 바로 사용
const students3 = {
  student1 : {name : '짱구', age : 5, score:90},
  student2 : {name : '철수', age : 5, score:100},
  student3 : {name : '유리', age : 5, score:88},
};

//2) 이름만 출력
for(let key in students3){
  console.log(`이름 : ${students3[key].name}`);
}

//3) 학년 속성 추가 후 전체 출력
for(let key in students3){
  students3[key].grade = '1학년';
}

// ------------------------------------------------------------------

//2. 배열의 모든 요소를 2배로 증가시켜 새로운 배열을 만들어 출력하기
const numbers = [1, 2, 3, 4, 5];

//1) 2배 증가시켜 새로운 배열로 출력하기
// 방법 01. 배열 생성 후 반복문 돌려서 해당 값 2배 연산 후 배열에 값 넣기
const newNumbers01 = new Array(numbers.length);
for (let i in numbers) {
  newNumbers01[i] = numbers[i] * 2;
}
console.log(newNumbers01);

// 방법 02. map() 함수 이용
const newNumbers02 = numbers.map(function(Element) {
  return Element * 2;
});
console.log(newNumbers02);

//2) 배열의 길이를 구하고 출력하기
console.log(numbers.length);

//3) 배열에서 특정요소를 삭제하기(3) 메소드 사용
numbers.splice(numbers.indexOf(3), 1);
console.log(numbers);

//4) 배열에서 특정 값(cat)을 검색하고 그 값의 인덱스 출력하기
const animals = ['dog', 'cat', 'rabbit'];
console.log('cat의 인덱스 번호 : ' + animals.indexOf('cat'));

//5) 배열의 첫번째와 마지막요소를 제거한 뒤 남은 배열 출력하기
const colors = ['red', 'blue', 'green', 'yellow'];
colors.shift();   // 첫 번째 요소 제거
colors.pop();     // 마지막 요소 제거
console.log(colors);

// ------------------------------------------------------------------

//3. 혼합문제
//1) 배열의 요소를 객체로 변환하여 새로운 배열을 만들기
//  주어진 배열의 값을 객체의 value 속성으로 저장할것
const data = [10, 20, 30];

// 방법 01. 프로토타입으로 객체 생성
function Datas01(value){
  this.value = value;
};
const newData01 = [new Datas01(data[0]), new Datas01(data[1]), new Datas01(data[2])]; 
console.log(newData01);

// 방법 02. 클래스 문법으로 객체 생성
class Datas02 {
  constructor(value) {
    this.value = value;
  }
}
const d01 = new Datas02(data[0]);
const d02 = new Datas02(data[1]);
const d03 = new Datas02(data[2]);

const newData02 = [d01, d02, d03];
console.log(newData02);

// 방법 03. 리터럴을 이용한 객체 생성
const newData03 = [
  {value : data[0]},
  {value : data[1]},
  {value : data[2]}
];
console.log(newData03);

//출력결과 : [{value: 10}, {value: 20}, {value: 30}]

//2) 배열을 활용하여 특정값을 기준으로 객체 업데이트하기
const users = [
  {id : 1, name : "짱구", age : 5, subject : 'javascript'},
  {id : 2, name : "철수", age : 5, subject : 'javascript'},
  {id : 3, name : "맹구", age : 5, subject : 'javascript'}, 
];
//id가 2인 객체의 나이를 6으로 변경, subject를 'web표준'으로 변경
for (let i in users) {
  users[i].age = users[i].id === 2 ? 6 : users[i].age;
  users[i].subject = 'web 표준';
  console.log(users[i]);
}

//3) 배열의 요소를 모두 더하여 총합 출력하기
const numbers2 = [2, 5, 20, 10];

// 방법 01.
globalThis.result01 = 0;

let sum01 = (numbers2) => {
  for (let i in numbers2) {
    globalThis.result01 += numbers2[i];
  }
  return globalThis.result01;
}
console.log("numbers2 배열 요소의 총 합 : " + sum01(numbers2));

// 방법 02.
globalThis.result02 = 0;
const sum02 = numbers2.forEach(element => {
  globalThis.result02 += element;
});

console.log("numbers2 배열 요소의 총 합 : " + globalThis.result02);
