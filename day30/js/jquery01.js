let $box2 = $(`.box2`);
// console.log($box2);   // JQuery 객체

// let box1 = document.querySelector('.box1');
// console.log(box1);    // 해당 코드 출력됨

console.log($box2.parent());      // 부모 요소인 main 선택
console.log($box2.parents());     // 모든 부모와 조상 요소인 main, body, html 요소 선택
console.log($box2.prev());        // 형 요소인 box1 요소 선택
console.log($box2.nextAll());     // 동생 요소의 전체 box3, box4 요소 선택
console.log($box2.nextAll()[1]);  // 인덱스로 box4 요소 선택

// 클래스명으로 가져온 모든 요소 중 2번째 인덱스 요소 선택
console.log($('.div-box').eq(2));
