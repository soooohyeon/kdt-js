// 6. 동기

function func1() {
  console.log("함수 1 실행");
  func2();
}

function func2() {
  console.log("함수 2 실행");
  func3();
}

function func3() {
  console.log("함수 3 실행");
}

func1();