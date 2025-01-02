//10번

// 9번 : promise

//DB 빈 배열 생성
const DB = [];

//사용자 정보를 받아서 저장하는 함수
function saveDB(user){
  //setTimeout(callback, delay);
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      const beforeLength = DB.length;
      const afterLength = DB.push(user); 

      if(beforeLength < afterLength){
        resolve(user);
        console.log(`${user.name}의 정보가 저장되었습니다`)
      }else{
        reject(new Error("저장되지 않았습니다"));
      }
    });
  }, 3000);
}

//사용자 정보를 받아서 이메일 전송 메시지를 출력하는 함수
function sendEmail(user){
  //사용자 정보를 Promise 이행하고 사용자 정보를 resolve 함수에 전달
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user);
      console.log(`이메일 ${user.email} 전송`);

    }, 5000);
  });
}

//사용자 정보를 받아서 사용자 이름을 포함한 정보 반환하는 함수
function getResult(user){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`방문자 ${user.name}`);
    }, 500);
  });
}

//사용자 등록 함수
function register(user){
  //Promise.all 메소드를 사용하여 여러 Promise를 동시에 실행하고 그 결과를 담은 Promise 객체 생성
  const resultAsync = Promise.all([
    saveDB(user),
    sendEmail(user),
    getResult(user),
  ]);
  //resultAsync Promise 객체가 이행될 때 실행
  resultAsync.then(console.log);
}

//사용자 등록 함수 호출
register({
  name : "홍길동",
  email : "hong111@gmail.com",
});
