// 7. 비동기

function func1() {
  console.log("함수 1 실행");
  func2();
}

function func2() {
  setTimeout(function() {
    console.log("함수 2 실행");
  }, 1000); // 1초 뒤 실행
  func3();
}

function func3() {
  setTimeout(function() {
    console.log("함수 3 실행");
  }, 500); // 1초 뒤 실행
}

func1();

// func2보다 func3의 지연시간이 더 짧기 때문에 func3 먼저 실행됨