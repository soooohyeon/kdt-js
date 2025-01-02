
// ---------- 최상단 광고 닫기 ----------
// console.log(document.querySelector('#ad-wrap-top-container'));
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
// 탭 변경
const movieTab = document.querySelectorAll('.chartBtn--wrap > h3')
const movies = document.querySelectorAll('.movieChart_list');
// const before = document.getElementById('beforeMovie_wrap');
// const after = document.getElementById('afterMovie_wrap');

movieTab[0].addEventListener('click', () => {
    movies[0].style.display='flex';
    movies[1].style.display='none';
    console.log(movieTab[0].children[0]);
    movieTab[0].children[0].classList.add('active');
    movieTab[1].children[0].classList.remove('active');
});

movieTab[1].addEventListener('click', () => {
    movies[0].style.display='none';
    movies[1].style.display='flex';
    movieTab[0].children[0].classList.remove('active');
    movieTab[1].children[0].classList.add('active');
});

// 영화 포스터 이벤트

// 순위 표시
const movieNumLists = document.querySelectorAll('.movieChart_list');
for (let i in movieNumLists) {
    console.log("카테고리 : " + movieNumLists.length);
    console.log("카테고리 : " + i);
    console.log("영화 : " + movieNumLists[0].children[1].childNodes[1]);
//     movieNumLists[i].forEach((movie, idx) => {
//         console.log(movie.children[2]);
//     });
}


const movieImgs = document.querySelectorAll('.img_wrap');
movieImgs.forEach((movie, idx) => {
    // // 순위 표시
    // movie.children[1].innerHTML = idx + 1;
    
    function over(){
        movie.children[1].style.display='none';
        movie.children[2].style.display='flex';
    }
    function out(){
        movie.children[1].style.display='flex';
        movie.children[2].style.display='none';
    }

    // 영화 포스터에 마우스 올라가면 생기는 이벤트
    movie.addEventListener('mouseover', over);
    movie.addEventListener('mouseout', out);
});

// swiper 버튼 활성화
const preBtn = document.querySelector('.pre_swiperBtn');
const nextBtn = document.querySelector('.next_swiperBtn');
let clickCount = 0;
function showSwiperBtn() {
    if (clickCount === 0) {
        preBtn.style.display = 'none';
        nextBtn.style.display = 'flex';
    } else if (clickCount === 3) {
        preBtn.style.display = 'flex';
        nextBtn.style.display = 'none';
    } else {
        preBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
    }
}

// swiper 버튼 클릭시 포스터 넘기기
const movieLists = document.querySelectorAll('.movieChart_wrap');
const nextMovieLists = document.querySelectorAll('.movieChart_wrap');
const width = movieLists[0].offsetWidth + 32.391;   // 한 포스터의 가로 길이

function moveMovies() {
    for (let i = 0; i < movieLists.length; i++) {
        if (clickCount * 5 < i < clickCount * 5 + 4) {
            let translate = -width * clickCount * 5;
            movieLists[i].style.transform = `translateX(${translate}px)`;
        }
    }
    showSwiperBtn();
}

function nextmovie() {
    clickCount++;
    moveMovies();
}

function premovie() {
    clickCount--;
    moveMovies();
}

nextBtn.addEventListener('click', nextmovie);
preBtn.addEventListener('click', premovie);

