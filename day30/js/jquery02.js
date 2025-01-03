let $boxes = $('.div-box');
console.log($boxes);

console.log($boxes[2]);
// JQuery 객체에서 인덱스 사용하여 접근한 요소는 일반적인 DOM 요소로 반환됨
// 따라서 JQuery 객체가 아닌 순수 DOM 객체

// DOM 속성 사용 가능
// let element = $boxes[1];
// console.log(element);
// element.style.backgroundColor = "lightpink";

console.log($boxes.eq(2));  // JQuery 객체
$boxes.eq(2).css('background-color', "lightpink");
// jquery 변수를 이용하여 css 변경시 .css() 메소드 사용

// jquery 이용하여 사용할 것
// 1. li 태그 전체 가져오기
console.log($(`li`));
$(`li`).each((li)=>{
  console.log(typeof li);   // number
});
// 2. 클래스명이 product인 태그 전체 가져오기
console.log($(`.product`));

// 3. 자식 태그 중 첫번째 자식 가져오기
// 자식이 없다면 length가 0으로 나옴
console.log($(`.product`).children().first());

// 4. ul 태그의 부모태그 가져오기
console.log($(`ul`).parent());

//5. li태그의 부모태그 가져오기
console.log($(`li`).parent());

//6. ul 태그 자식 중에서 0번째 인덱스 가져오기
console.log($(`ul`).children().eq(0));
console.log($(`ul > li:first-child`));
console.log($(`ul > li:nth-child(1)`));
console.log($(`ul`).find('li').first());

//7. ul 태그 자식 중에서 2번째 인덱스 가져오기
console.log($(`ul`).children().eq(2));
console.log($(`ul > li:nth-child(2)`));