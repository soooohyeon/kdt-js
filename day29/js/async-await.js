//11번

// async function getName() {
//   return "짱구";  
// }

// async function printName() {
//   const name = await getName();  // getName() 함수 실행 후 실행하겠다는 의미
//   console.log(name);
// }

// printName();

async function fetchData() {
  // 2초 후 데이터를 반환하는 비동기 함수
  return new Promise(() => {
    setTimeout(() => {
      resolve("데이터 로드 완료");
    }, 2000);
  });
}

async function printData() {
  const data = await fetchData();
  console.log(data);
}

printData();