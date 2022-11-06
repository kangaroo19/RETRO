const sectionImg=document.querySelector("#window-section-img");
const sectionheader=document.querySelector("#window-section-header");
const sectionText=document.querySelector("#window-section-text");
const navBack=document.querySelector("#window-nav-back");
const navNext=document.querySelector("#window-nav-next");
const navEnter=document.querySelector("#window-nav-enter");


const imgAndText=[
    {
        image:"./img/momentum.jpg",
        header:"momentum",
        text:"유튜버 노마드 코더님의 강의를 듣고 만든 구글 모멘텀 웹페이지 클론코딩입니다\n 기능으로는 랜덤 배경화면,로그인,할 일 목록,현재 위치와 날씨조회가 있습니다.\n개발기간은 약 한달입니다.\n\n\n\n\n\n\n\n기술스택\nJavaScript,CSS,HTML",
        url:"https://kangaroo19.github.io/Momentum/momentem/index.html"
    },
    {
        image:"./img/maple2.jpeg",
        header:"cardmatching",
        text:"어릴 때 재미있게 플레이하던 '메이플스토리'라는 게임 안에 있는 미니게임인 같은그림찾기게임을 채팅기능을 포함해 1vs1 온라인으로 할 수 있게 웹 상에 구현하였습니다.\n개발기간은 약 한달 반 정도입니다.\n\n\n\n\n\n\n\n기술스택\nJavaScript,NodeJS,CSS,HTML",
        url:"https://chatting22.herokuapp.com/"
    },
    {
        image:'',
        header:'MovieWeb',
        text:'리액트를 배우기 위해 유투버 노마드 코더님의 강의를 듣고 만든 영화 정보 웹입니다.\n기존 기능에 다음 영화와 이전 영화를 선택해 볼수 있습니다.',
        url:'https://kangaroo19.github.io/movieweb'
    }
    {
        image:"",
        header:"以?鍮꾩쨷蟻낅땲宥",
        text:"懿덈뀞壬섏꽭矣볖泥쒖옱恁꾩엯宥덈떎 諛섍?義뚯슂 踰꾧굅茵밸㉨怨좎떢宥懿덈뀞壬섏꽭矣볖泥쒖옱恁꾩엯宥덈떎 諛섍?義뚯슂 踰꾧굅茵밸㉨怨좎떢宥懿덈뀞壬섏꽭矣볖泥쒖옱恁꾩엯宥덈떎 諛섍?義뚯슂 踰꾧굅茵밸㉨怨좎떢宥懿덈뀞壬섏꽭矣볖泥쒖옱恁꾩엯宥덈떎 諛섍?義뚯슂 踰꾧굅茵밸㉨怨좎떢宥 ",
        url:"http://xn--2v5b93gprj.kro.kr/error"
    }
]


//$('#window-section-img').children('img').attr('src',imgAndText[0].image)


sectionImg.style.backgroundImage='url('+imgAndText[0].image+')';

sectionheader.innerText=imgAndText[0].header;
sectionText.innerText=imgAndText[0].text;
navBack.disabled=true;
let i=0;
function clickNext(){
    i++;
    navNext.disabled=false;
    navBack.disabled=false;
    sectionImg.style.backgroundImage='url('+imgAndText[i].image+')';
    //$('#window-section-img').children('img').attr('src',imgAndText[i].image)
    sectionheader.innerText=imgAndText[i].header;
    sectionText.innerText=imgAndText[i].text;
    navEnter.href=imgAndText[i].url;
    if(i==imgAndText.length-1){
        navNext.disabled=true;
    }
}
function clickBack(){
    i--;
    navNext.disabled=false;
    navBack.disabled=false;
    sectionImg.style.backgroundImage='url('+imgAndText[i].image+')';
$('#window-section-img').children('img').attr('src',imgAndText[i].image)
    
    sectionheader.innerText=imgAndText[i].header;
    sectionText.innerText=imgAndText[i].text;
    navEnter.href=imgAndText[i].url;
    if(i==0){
        navBack.disabled=true;
    }
}
navNext.addEventListener('click',clickNext);
navBack.addEventListener('click',clickBack);

// let i=0;
// if(i==0){
//     navBack.classList.add("hidebutton");
//     navNext.classList.add("click");
//     navEnter.classList.add("click");
// }
// function clickNext(){
//     i++;
//     navBack.classList.remove("hidebutton");
//     navBack.classList.add("click");
//     sectionImg.style.backgroundImage='url('+imgAndText[i].image+')';
//     sectionheader.innerText=imgAndText[i].header;
//     sectionText.innerText=imgAndText[i].text;
//     if(i==imgAndText.length-1){
//         navBack.classList.add("click");
//         navNext.classList.add("hidebutton");
//         navNext.classList.remove("click");
//     }
// }




// function clickBack(){
//     if(i==0){
//         navBack.classList.add("hidebutton");
//         navBack.classList.remove("click");
//         navNext.classList.add("click");
//         navBack.removeEventListener('click',clickBack);
//     }
//     i--;
//     navNext.classList.remove("hidebutton");
//     navNext.classList.add("click");
//     sectionImg.style.backgroundImage='url('+imgAndText[i].image+')';
//     sectionheader.innerText=imgAndText[i].header;
//     sectionText.innerText=imgAndText[i].text;
// }


// navNext.addEventListener('click',clickNext);
// navBack.addEventListener('click',clickBack);