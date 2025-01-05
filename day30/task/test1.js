// 할 일이 없을 때 띄울 메세지
const lists = document.querySelector('#task-list');
function checkEmpty() {
    if (lists.children.length < 1) {
        lists.innerHTML = `<li class="empty_list">등록된 일정이 없습니다</li>`;
    } else if (lists.children.length === 2) {
        const emptyLi = document.querySelector('.empty_list');
        emptyLi.remove();
    }
}
checkEmpty();

// 할 일 추가 클릭시 입력받을 prompt 띄우기
function addToDo() {
    let toDo = prompt("추가할 할 일을 입력하세요.");
    // console.log(toDo);
    if (toDo) {
        addList(toDo);
        checkEmpty();
    }
}

// 입력 후 확인 클릭시 리스트 추가
function addList(toDo) {
    // console.log("추가");
    const list = document.createElement('li');
    const label = document.createElement('label');
    label.innerHTML = `<input type="checkbox" value="${toDo}">${toDo}`;
    const removeBtn = document.createElement('button');
    removeBtn.innerText = '삭제';
    
    list.append(label, removeBtn);
    lists.append(list);

    let check = list.children[0].children[0];
    // 체크된 리스트 삭제
    removeBtn.addEventListener('click', removeList);
    function removeList() {
        if (check.checked) {
            let flag = confirm("정말 삭제하시겠습니까?");
            if (flag) {
                list.remove();
            }
        } else {
            alert("체크 박스를 확인해주세요");
        }
        checkEmpty();
    }
    console.log(check);
    check.addEventListener('click', function() {
        console.log("체크");
        if(check.checked) {
            list.style.backgroundColor = "lightgray";
        } else {
            list.removeAttribute('style');
        }
    });
}
