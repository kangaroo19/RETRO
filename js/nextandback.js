const sectionImg=document.querySelector("#window-section-img");
const sectionheader=document.querySelector("#window-section-header");
const sectionText=document.querySelector("#window-section-text");
const navBack=document.querySelector("#window-nav-back");
const navNext=document.querySelector("#window-nav-next");
const navEnter=document.querySelector("#window-nav-enter");


const imgAndText=[
    {
        image:"./img/momentum.jpg",
        header:"MOMENTUM",
        text:"유튜버 노마드 코더님의 강의를 듣고 만든 구글 모멘텀 웹페이지 클론코딩입니다\n 기능으로는 랜덤 배경화면,로그인,할 일 목록,현재 위치와 날씨조회가 있습니다.\n개발기간은 약 한달입니다.\n\n\n\n\n\n\n\n\n기술스택\nJavaScript,CSS,HTML",
        url:"https://kangaroo19.github.io/Momentum/momentem/index.html"
    },
    {
        image:"./img/maple2.jpeg",
        header:"CARDMATCHING",
        text:"어릴 때 재미있게 플레이하던 '메이플스토리'라는 게임 안에 있는 미니게임인 같은그림찾기게임을 채팅기능을 포함해 1vs1 온라인으로 할 수 있게 웹 상에 구현하였습니다.\n개발기간은 약 한달 반 정도입니다.\n\n\n\n\n\n\n\n기술스택\nJavaScript,NodeJS,CSS,HTML",
        url:"http://cjh.cafe24app.com"
    },
    {
        image:'./img/aaaa.jpeg',
        header:'MOVIEWEB',
        text:'리액트를 배우기 위해 유투버 노마드 코더님의 강의를 듣고 만든 영화 정보 웹입니다.\n기존 기능에 별도로 다음 영화와 이전 영화를 선택 할 수 있는 기능을 추가하였습니다.\n개발기간은 약 2주 입니다. \n\n\n\n\n\n\n\n\n기술스택\nReact,CSS,JSX,HTML',
        url:'https://kangaroo19.github.io/movieweb'
    }
    ,
    {
        image:"./img/books.jpeg",
        header:"STUDYCAFE",
        text:"리액트를 배우고 처음으로 혼자서 만든 스터디 카페 시간 계산 사이트 입니다\n 사용하고 싶은 요금제와 공부 할 시간,스터디 카페에 나올 일 수를 입력하면\n 그에 맞는 시간권이 나와 어떤 요금제를 사용하는 것이 좀 더 이득인지 알 수 있습니다.\n개발기간은 약 1주 입니다.\n\n\n\n\n\n기술스택\nReact,CSS,JSX,HTML",
        url:"https://kangaroo19.github.io/studycafe"
    }
    ,
    {
        image:"./img/earth.jpg",
        header:"MBTI-APP",
        text:"인프런에서 강의를 듣고 만든 MBTI앱입니다.\n 12개의 질문이 주어지고 자신에게 해당하는 버튼을 클릭하면 자신의 MBTI와 그에 따른 국가가 나옵니다. \n나온 결과는 카카오톡을 이용해 친구들에게 공유할 수도 있습니다.\n\n\n\n\n\n\n기술스택\nReact,CSS,JSX,HTML",
        url:"https://mbtiapp1.netlify.app/"
    }
    ,
    {
        image:"./img/army.webp",
        header:"MTPLANET",
        text:"학교 해외전공연수 프로그램에 참여하게 되었을 때 아이디어 위주의 웹 프로젝트를 진행하게 되었는데 그 때 나온 아이디어를 구체화하여 만든 페이지 입니다.\nMTPLANET은 군대 훈련소를 대상으로한 생활관,훈련강도 등에 대한 리뷰들을 보거나 직접 작성할 수 있습니다.\n\n\n\n\n\n\n기술스택\nReact,Firebase",
        url:"https://kangaroo19.github.io/mtplanet/"
    }
    ,
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
    // audio.play()
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
    // audio.play()
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