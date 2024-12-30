// 2. Object 객체

const user = {
  name : '신짱구',
  age : 5,
  address : '서울시',
  introduce : () => console.log("안녕하세요"),
};

console.log(user, typeof user);
console.log(user.introduce);  // [Function: introduce]
user.introduce; // 안녕하세요

console.log(user['name']);  // 신짱구
// .으로 직접 접근 가능하고, key값의 규칙성이 필요하다면 [''] 문법 사용해서 접근 가능

// 1. programming 객체 생성(const로 생성)
//프로퍼티 키는 pro1~pro4까지
//프로퍼티 값은 java, dbms, html/css, javascript
const programming = {
  pro1 : 'java',
  pro2 : 'dbms',
  pro3 : 'html/css',
  pro4 : 'javascript',
};

// 2. 객체 출력
console.log(programming);

// 3. javascript만 출력하기(방법2개)
console.log(programming.pro4);
console.log(programming['pro4']);

// 4. pro1의 값을 자바로 변경
programming.pro1 = '자바';
console.log(programming);

// 5. pro5 객체 추가 프로퍼티 값은 git
programming.pro5 = 'git';
console.log(programming);
// const는 재할당이 안되어야 하지만 객체에서는 생성했더라도 프로퍼티 추가, 수정 가능

// 6. 객체의 값 출력
for (let i in programming) {
  console.log(i); // 해당 인덱스의 프로퍼티 키가 나옴
  console.log(programming[i]);
}
// -> of 객체에서는 사용 불가, 배열에서는 of 사용 가능
// for ... in
//    객체의 키(프로퍼티 이름)을 순회함
//    일반 객체나 배열에서 모두 사용 가능
// for ... of
//    이터러블(iterable) 객체에서만 사용 가능 -> 배열, 문자열, Map, Set, ... 
//    순회시 객체의 값(value) 반환
//    일반 객체는 이터러블 객체가 아니기 때문에 사용 불가
//    [Symbol.iterator] 메소드를 가진 객체를 이터러블 객체라고 함

// 객체를 for ... of로 순회하려면 배열로 변환하면 됨
// Object.key(), Object.values(), Object.entries() 사용
for(let key of Object.keys(programming)){
  console.log(key);
}
for(let value of Object.values(programming)){
  console.log(value);
}
for(let [key, value] of Object.entries(programming)){
  console.log(key, value);
}
// 객체에 [Symbol.iterator] 직접 추가 - 중요 X, 해당 방법이 있다는 것만 알아도 충분함
const program = {
  lang1 : "javascript",
  lang2 : "git",
  lang3 : "jsp",
  [Symbol.iterator] : function* (){
    for(let key in this){
      if(this.hasOwnProperty(key)){
        yield this[key];
      }
    }
  },
};

for(let value of program){
  console.log(value);
}
