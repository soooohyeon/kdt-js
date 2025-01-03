// 한 페이지당 표시될 게시물 수
const pageSize = 5;
// 총 게시물 수
const totalItems = 20;
// 전체 페이지 수 - Math.ceil 올림함수 사용
// ? 게시물 수가 18개 일때 5로 나누면 4가 나와야 하므로
const totalPage = Math.ceil(totalItems / pageSize);

// 게시물을 표시할 컨테이너와 페이지네이션을 표시할 영역을 DOM에서 가져옴
const contentWrap = document.getElementById("content");
const pagenationWrap = document.getElementById("pagenation-container");
const pagenation = document.getElementById("pagenation");
// 페이지 요소를 생성할 li 태그 생성

// 게시물 생성함수
function createPost(content) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.textContent = content;
  return post;
}

// 페이지 번호 출력시 이벤트 핸들러
function onPageClick(event) {
  // parseInt : 정수로 바꿔주는 함수
  const currentPage = parseInt(event.target.textContent); // 클릭된 페이지를 정수로 변환
  // 해당 페이지에 표시할 게시물을 보여지는 함수 호출
  showPage(currentPage);
  // 페이지 네비게이션 업데이트 함수 호출
  updatePagination(currentPage);

}

// 페이지에 해당하는 게시물 표시 함수
function showPage(page) {
  contentWrap.innerHTML = "";   // 현재 표시된 게시물 초기화
  const startIdx = (page-1) * pageSize; // 현재 페이지의 시작 인덱스 계산
  const endIdx = Math.min(startIdx + pageSize, totalItems); // 현재 페이지의 마지막 인덱스 계산
  
  // 시작 인덱스 부터 마지막 인덱스까지 반복하면 게시물 생성 및 추가
  for (let i = startIdx; i < endIdx; i++) {
    const post = createPost(`게시물 ${i + 1}`);  // 게시물 생성
    contentWrap.appendChild(post);  // 게시물을 컨테이너에 추가
  }
}

// 페이지 네비게이션 업데이트 함수
function updatePagination(currentPage) {
  // 모든 페이지 번호에서 active 클래스 제거
  pagenationWrap.querySelectorAll("li").forEach(item => {
    item.classList.remove('active');
  });

  // 현재 페이지 번호에 'acitve' 클래스 추가
  pagenationWrap.querySelector(`li:nth-child(${currentpage})`).classList.add('active');
}
// 페이지 번호 생성 및 이벤트 핸들러 추가
for (let i = 1; i <= totalPage; i++) {
  const li = document.createElement("li");    // <li> 요소 생성
  li.textContent = i;   // 페이지 번호 생성

  if(i == 1) {
    li.classList.add('active');   // 첫 페이지에 active 클래스 추가
  }
  li.addEventListener("click", onPageClick);    // 페이지 번호 클릭 이벤트 핸들러 추가
  pagenation.appendChild(li);    // 페이지 번호를 <ul> 자식 요소로 <li> 요소 추가
}

pagenationWrap.appendChild(pagenation);
showPage(1);