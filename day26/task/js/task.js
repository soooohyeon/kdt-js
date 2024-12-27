// 01. 매개변수로 두 숫자를 전달받아 합을 반환하는 함수를 작성하기
// - 디폴트 매개변수 1개 사용, 기본값 10
// - 일반함수 사용, addNumbers
function addNumbers(num1, num2 = 10) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else {
        return "잘못된 입력";
    }
}
// 함수 호출
// console.log(addNumbers(5));
// console.log(addNumbers(7, 4));
// console.log(addNumbers('6'));

//-----------------------------------------------------------------

// 02. 숫자의 제곱을 계산하는 함수 작성하기
// - 익명함수 사용, square
let square = function (num){
    if (typeof num === 'number') {
        console.log(num * num);
    }
}
// 함수 호출
// square(5);

//-----------------------------------------------------------------

// 03. 가변매개변수를 사용하여 전달받은 모든 숫자의 합 계산하기
// - sumAll1 일반함수
// - sumAll2 익명함수
// 일반함수
function sumAll1(... numbers) {
    let sum = 0;
    for(let num of numbers) {
        sum += num;
    }
    console.log(`일반함수 총 합 : ${sum}`)
}
// 익명함수
let sumAll2 = function(... numbers) {
    let sum = 0;
    for(let num of numbers) {
        sum += num;
    }
    return sum;
}
// sumAll1(1, 2, 3, 4, 5);
// console.log(`익명함수 총 합 : ${sumAll2(3, 5, 2, 7)}`);

//-----------------------------------------------------------------

// 04. 콜백함수를 매개변수로 받아 두 숫자를 전달하고 연산결과(사칙연산 모두) 출력하는 oper 만들기
function oper (num1, num2, callback) {
    if (callback) {   
        callback(num1, num2);
    }
}
// (1)
// oper(7, 2, function(num1, num2) {
//     console.log(`더하기 : ${num1 + num2}`);
//     console.log(`빼기 : ${num1 - num2}`);
//     console.log(`곱하기 : ${num1 * num2}`);
//     console.log(`나누기 : ${num1 / num2}`);
// });
// // (2)
// const print01 = function (num1, num2){
//     console.log(`더하기 : ${num1 + num2}`);
//     console.log(`빼기 : ${num1 - num2}`);
//     console.log(`곱하기 : ${num1 * num2}`);
//     console.log(`나누기 : ${num1 / num2}`);
// }
// oper(9, 3, print01);

// 05. 사용자 데이터를 배열로 받아 20살 이상인 사용자만 필터링 하는 newUser 함수 만들기
// - newUser함수는 두개의 매개변수를 받는다
// - users : 사용자 이름 배열(ex : [ { name: '짱구', age: 25 }, { name: '철수', age: 18 }, { name: '훈이', age: 30 } ])
// - callback : 데이터를 처리할 함수
let users =  [ { name: '짱구', age: 25 }, { name: '철수', age: 18 }, { name: '훈이', age: 30 } ];
function checkTwenty(users, callback) {
    if (callback) {
        callback(users);
    }
}
// (1)
// checkTwenty (users, function(users) {
//     for (let i in users) {
//         if (users[i].age >= 20) {
//             console.log(`${i}번째 인덱스. 이름 : ${users[i].name}, 나이 : ${users[i].age}`);
//         }
//     }
// });
// // (2)
// const print02 = function(users) {
//     for (let user of users) {
//         if (user.age >= 20) {
//             console.log(user);
//         }
//     }
// }
// checkTwenty(users, print02);

// 6. 비동기 작업 체인
// - 세 가지 작업을 수행하는 step1, step2, step3가 있습니다.
//   각 함수는 1초 후에 실행하고 runStep 함수에서 각 단계가 완료되면 다음단계로 넘어가고
//   마지막에는 모든 함수 호출 완료를 출력한다
function step1() {
    setTimeout(() => {
        console.log('step1 실행');
        step2();
    }, 1000);
}
function step2() {
    setTimeout(() =>  {
        console.log('step2 실행');
        step3();
    }, 1000);
}
function step3() {
    setTimeout(() => {
        console.log('step3 실행');
        console.log('함수 종료');
    }, 1000);
}

function runStep() {
    setTimeout(() => {
        console.log('함수 시작');
        step1();
    } , 1000);
}
runStep();