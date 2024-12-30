//1. 문자열을 인수로 받아 역순으로 뒤집을 결과를 반환하는 함수
// 콜백을 사용하여 문자열을 역순으로 출력
//함수명 printStr()  매개변수 1개
//함수명 reverseStr() 콜백사용
// 참고 : split(), reverse(), join()
function reverseStr(str, callback) {
    if (callback) {
        let strAr = str.split('');
        callback(strAr.reverse());
    }
}
const printStr = function(result){
    console.log (result.join(''));
};
const result = reverseStr('javascript', printStr);

//2.  성과 이름을 전달받아서 풀네임을 만든 뒤 000님 환영합니다 출력하기
//함수명 welcomeUser
function welcomeUser(lastName, firstName){
    console.log(lastName + firstName + "님 환영합니다.")
}
welcomeUser('신', '짱구');
welcomeUser('김', '철수');

//3. 사용자 나이를 입력후 성인이면 true반환, 아니면 false 반환
//함수명 isAdult
const isAdult = function(age){
    return age > 19;
};
console.log(isAdult(20));
console.log(isAdult(17));

//4. 객체를 사용해 성적관리 프로그램 만들기
//프로그램이 등록되지 않은 학생은 3명이다
//이름 : 둘리, 나이 : 5, 점수 : 80
//이름 : 도우너, 나이 : 6, 점수 : 50
//이름 : 또치, 나이 : 5, 점수 : 90
// 학생마다의 점수 출력하기(이름 점수 같이 출력할 것)
// 3명을 모두 프로그램에 등록시킨다
// 3명의 학생 정보를 학교 객체로 선언 후에 학교 객체에 등록시킨다

// 프로토 타입으로 객체 선언
function Students(name, age, score){
    this.name = name;
    this.age = age;
    this.score = score;
}
// 객체 생성
const stu01 = new Students('둘리', 5, 80);
const stu02 = new Students('도우너', 6, 50);
const stu03 = new Students('또치', 5, 90);

const students = {
    students01 : stu01,
    students02 : stu02,
    students03 : stu03
}
// 이름 및 점수 출력
for (let i in students) {
    console.log(students[i].name + "님 점수 : " + students[i].age);
}
// 프로그램 등록 후 출력
for (let i in students) {
    students[i].program = '등록완료';
    console.log(students[i]);
}
// 학교 객체에 등록
const school = {
    students
};
console.log(school.students);

//5. 포인트를 각각 객체에 추가하고 순서대로 point는 80, 50, 90이다
//포인트를 모두 더한 값을 출력하라
globalThis.totalPoint = 0;
const points = {
    point01 : 80,
    point02 : 50,
    point03 : 90
};
for (let i in points) {
    globalThis.totalPoint += points[i];
}
console.log(globalThis.totalPoint);