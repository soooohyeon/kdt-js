// 목록 추가
const newTxt = document.querySelector('#new-item');
const addBtn = document.querySelector('#add-item');
const lists = document.querySelectorAll('#todo-list > ul');

function addList() {
  if (newTxt.value === "") {
    alert('내용을 입력해주세요.');
  } else {
    const newList = document.createElement("li");
    newList.innerHTML = newTxt.value + '<button class="delete">삭제</button>';
    console.log(newList);
    // lists.appendChild(newList);
  }
}
addBtn.addEventListener('click', addList);