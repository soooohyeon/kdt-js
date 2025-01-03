let slideBox = document.querySelector('.slide-box');
let slideImg = document.querySelectorAll('.slide-img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

// 슬라이드 너비, 현재 인덱스, 슬라이드 개수 설정
let slideWidth = 800;
let currentIdx = 0;
let slideCnt = slideImg.length;

// 슬라이드가 처음이나 마지막에 도달했는지 확인하고 이전/다음 버튼 활성화 / 비활성화 설정
function checkEnd() {
  if(currentIdx <= 0) {
    prev.style.display = 'none';
  } else {
    prev.style.display = 'block';
  }

  if (currentIdx >= slideCnt -1) {
    next.style.display = 'none';
  } else {
    next.style.display = 'block';
  }
}

checkEnd();

// 다음 버튼 클릭 시 발생하는 이벤트
next.addEventListener("click", function(){
  currentIdx++;
  slideBox.style.left = -(currentIdx * slideWidth) + "px";
  slideBox.style.transition = '0.5s ease';
  checkEnd();
});

//이전 버튼 클릭시 발생하는 이벤트
prev.addEventListener("click", function(){
  currentIdx--;
  slideBox.style.left = -(currentIdx * slideWidth) + "px";
  slideBox.style.transition = "0.5s ease";
  checkEnd();
});