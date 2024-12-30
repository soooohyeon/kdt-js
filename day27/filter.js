//8. filter()
//const newArray = 배열명.filter(callback(element[, index[, array]][, thisArgs]));

//1부터 10까지 요소 중 짝수 요소만 필터링
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = numbers.filter(function (element){
  return element % 2 === 0;
});

console.log(even); //[ 2, 4, 6, 8, 10 ]

//짝수 인덱스의 요소만 출력
const evenIdx = numbers.filter(function (element, index){
  // console.log(index);
  return index % 2 === 0;
});
console.log(numbers);
// [
// 1, 2, 3, 4,  5,
// 6, 7, 8, 9, 10
// ]
console.log(evenIdx); //[ 1, 3, 5, 7, 9 ]

//배열의 짝수 요소를 두배로 만든 새로운 배열 생성(map, filter 둘 다 사용)
const evenVal = numbers.filter(function (element){
  return element % 2 === 0;
}).map(function (element){
  return element * 2;
});

console.log(evenVal);   // [ 4, 8, 12, 16, 20 ]

// 화살표 함수로 변경
const evenVal2 = numbers.filter((element) => {
  element % 2 === 0
}).map((element) => element * 2);
console.log("결과 : " + evenVal2);

