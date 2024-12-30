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