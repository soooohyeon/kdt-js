// 3. 프로토타입
// new 뒤에 나오는 생성자를 자바스크립트에서는 프로토 타입 이라고 부름
// 단, 반드시 대문자로 시작해야함

function User(id, pw, name, age, subject='javascript'){
  this.id = id;             // 새 객체의 id 프로퍼티
  this.pw = pw;             // 새 객체의 pw 프로퍼티
  this.name = name;
  this.age = age;
  this.subject = subject;
  // this는 생성된 객체를 참조함
  // 각 속성은 생성된 객체의 속성이 됨
}

// 생성자 함수로 생성된 모든 객체는 공유된 프로토 타입 객체를 가짐
// 프로토 타입 객체를 사용하면 공통 메소드나 속성 공유 가능
user1 = new User('abc', '1234', '짱구', 5);
console.log(user1);
user2 = new User('def', '1234', '철수', 5, 'java');
console.log(user2);

//클래스 문법
class User1{
  constructor(id, pw, name, age, subject){
    this.id = id;
    this.pw = pw;
    this.name = name;
    this.age = age;
    this.subject = subject;
  }
}

const user3 = new User1("aaa", "1234", "유리", 5, "javascript");
console.log(user3, typeof user3);