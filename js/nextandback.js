const sectionImg=document.querySelector("#window-section-img");
const sectionheader=document.querySelector("#window-section-header");
const sectionText=document.querySelector("#window-section-text");
const navBack=document.querySelector("#window-nav-back");
const navNext=document.querySelector("#window-nav-next");
const navEnter=document.querySelector("#window-nav-enter");

const imgAndText=[
    {
        image:"./img/momentum.PNG",
        header:"momentum",
        text:"11111111111111",
        url:"https://kangaroo19.github.io/Momentum/momentem/index.html"
    },
    {
        image:"./img/logo.png",
        header:"hellonaver",
        text:"22222222222",
        url:"http://naver.com"
    },
    {
        image:"./img/music.png",
        header:"musicyoutube",
        text:"3333333333333333",
        url:"http://youtube.com"
    }
]





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