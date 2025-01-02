// 8. promise

const promise = new Promise(function (resolve, reject) {
  check = false;
  if (check) {
    resolve("성공");  // 이행
  } else { 
    resolve("실패");  // 거부
  }
});

// console.log(promise);
// Promise 객체는 출력 X
// 비동기 작업의 결과를 다루는 객체이므로 객체 자신의 상태를 출력하는 것이 아닌
// Promise 객체가 이행되거나 거부되었을 때의 결과가 출력됨

promise.then(console.log),catch(console.log);
// Promise 객체의 than 메소드 호출
// then 메소드는 성공적으로 이행된 경우를 처리함
// catch 메소드는 거부된 경우를 처리