//1. 나이가 19살 이상이면 입장가능, 19살 미만이면 입장 불가 출력
// 나이가 10살이면 당첨을 출력하고 아니면 다음기회에 출력
// 본인이름, 나이는 상수로 설정, 삼항연산자 사용할 것

//출력결과
// 본인이름님은 00살 입장가능여부는 결과 
// 이벤트 당첨여부
//출력
const customers = [
  {name : '짱구', age : 5},
  {name : '치타', age : 10},
  {name : '봉미선', age : 28}
];

const welcome = function(name, age) {
  let result = age >= 19 ? "입장 가능\n다음 기회에..." : age === 10 ? "입장 불가\n이벤트 당첨!!!" : "입장 불가\n다음 기회에...";
  console.log(`${name}님 ${age}살 ` + result);
}

for (let i in customers) {
  welcome(customers[i].name, customers[i].age);
}

//2. 점수가 60점 이상이면 합격, 60점 미만이면 불합격출력
// 점수가 100점이면 장학생, 아니면 일반학생 출력
// 학생이름, 점수는 상수로 설정
const students = [
  {name : '짱구', scroe : 76},
  {name : '철수', scroe : 97},
  {name : '맹구', scroe : 100},
  {name : '유리', scroe : 84},
  {name : '훈이', scroe : 45}
];
const checkScore = function(name, score) {
  const result = score === 100 ? "합격!!  장학생 입니다~" : score >= 60 ? "합격!!  일반학생" : "불합격ㅜㅜ";
  console.log(`${name}님 ` + result);
} 

for (let stu of students) {
  checkScore(stu.name, stu.scroe);
}

//3. 학생의 이름과 성적을 입력받아서 성적에 따른 학점 출력
// 90점 이상 : A, 80점 이상 : B,  70점이상 : C, 그외 : F
const checkGrade = (score) => grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'F'
for (let stu of students) {
  console.log(`${stu.name}님 성적 : ${checkGrade(stu.scroe)}등급`);
}

// //4. 1부터 100까지의 숫자중 3, 6, 9의 배수 합계 출력
// 방법 01.
let numbers01 = new Array();
let sum01 = 0;
for(let i = 1; i <= 100; i++){
  numbers01[i-1] = i;
}

numbers01.filter((element) => {
  return element % 3 === 0
}).map((element) => {
  sum01 += element;
});
console.log("3의 배수 총합 결과 : " + sum01);

// 방법 02.
let numbers02 = new Array();
let count = 0, sum02 = 0;

for(let i = 1; i <= 100; i++){
  if (i % 3 === 0) {
    numbers01[count++] = i;
  }
}

for (let num of numbers02) {
  sum02 += num;
}
console.log("3의 배수 총합 결과 : " + sum01);