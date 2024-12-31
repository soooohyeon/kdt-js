
// ---------- 최상단 광고 닫기 ----------
const adClose = document.querySelector('.ad-top-close');
adClose.addEventListener('click', () => {
    document.querySelector('#ad-wrap-top-container').remove();
});

// ---------- 메뉴바 ----------
// 검색창 클릭하면 placeholder 값 사라짐
const search = document.getElementById('search');
search.addEventListener('click', () => {
    search.removeAttribute('placeholder');
});

// 드롭 다운 메뉴
const menuLists = document.querySelectorAll('.nav-menu--wrap li');
const dropMenuList = document.querySelectorAll('.nav-dropMenu--wrap');
const menu = document.querySelector('nav');

// console.log(menuLists);
menuLists.forEach((list, idx) => {
    // 영화 ~ 혜택 칸에 마우스가 올라갈 때 메뉴 펼치기
    if (idx <= 2) {
        list.addEventListener('mouseover', () => {
            // console.log(idx + " 들어옴")
            dropMenuList.forEach(dl => {
                dl.style.display = 'block';
                menu.classList.add('dropMenu-active');
            });
        });
    }
});

menu.addEventListener('mouseout', () => {
    dropMenuList.forEach(dl => {
        dl.style.display = 'none';
        menu.classList.remove('dropMenu-active');
    });
});

// ---------- 메인 광고 배너 ----------
// 광고 재생 / 멈춤 버튼
const adPlayBtn = document.getElementsByName('adBtn')[0];
adPlayBtn.addEventListener('click',() => {
    if (adPlayBtn.classList.contains("ad-play")) {
        adPlayBtn.className = ['ad-movie-button ad-pause'];
    } else {
        adPlayBtn.className = ['ad-movie-button ad-play'];
    }
});

// 광고 볼륨 / 음소거 버튼
const adSoundBtn = document.getElementsByName('adBtn')[1];
adSoundBtn.addEventListener('click',() => {
    if (adSoundBtn.classList.contains("ad-volumeOff")) {
        adSoundBtn.classList.replace('ad-volumeOff', 'ad-volumeOn');
    } else {
        adSoundBtn.classList.replace('ad-volumeOn', 'ad-volumeOff');
    }
});

// ---------- 무비차트 | 상영예정작 ----------
// 영화에 마우스 올라가면 생기는 이벤트
const movieLists = document.querySelectorAll('.img_wrap');
movieLists.forEach(movie => {
    function over(){
        movie.children[1].style.display='none';
        movie.children[2].style.display='flex';
    }
    function out(){
        movie.children[1].style.display='flex';
        movie.children[2].style.display='none';
    }
    movie.addEventListener('mouseover', over);
    movie.addEventListener('mouseout', out);
});

// swiper 버튼 활성화
const preBtn = document.querySelector('.pre_swiperBtn');
const clickCount = 0;
// movieLists.forEach((movie, idx) => {
//     if (idx === 0) {
//         preBtn.style.display = 'none';
//     } else {
//         preBtn.style.display = 'flex';

//     }
// });