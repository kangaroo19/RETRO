const sectionImg=document.querySelector("#window-section-img");
const sectionheader=document.querySelector("#window-section-header");
const sectionText=document.querySelector("#window-section-text");
const navBack=document.querySelector("#window-nav-back");
const navNext=document.querySelector("#window-nav-next");

const imgAndText=[
    {
        image:"./img/momentum.PNG",
        header:"momentum",
        text:"11111111111111"
    },
    {
        image:"./img/logo.png",
        header:"hello",
        text:"22222222222"
    },
    {
        image:"./img/music.png",
        header:"music",
        text:"3333333333333333"
    }
]



sectionImg.style.backgroundImage='url('+imgAndText[0].image+')';


sectionheader.innerText=imgAndText[0].header;
sectionText.innerText=imgAndText[0].text;

// for(let i=1;i<imgAndText.length;i++){ //0~2
//     navNext.addEventListener('click',()=>{
//     sectionImg.style.backgroundImage='url('+imgAndText[i].image+')';
    
//     })
// }
let i=0;
navNext.addEventListener('click',()=>{
    i++;
    sectionImg.style.backgroundImage='url('+imgAndText[i].image+')';
    sectionheader.innerText=imgAndText[i].header;
    sectionText.innerText=imgAndText[i].text;
    if(i==imgAndText.length-1){//배열의 끝인덱스(현재는 2)까지 가면 i=-1로 초기화
        i=-1; 
    }
    console.log("next"+i);
})

navBack.addEventListener('click',()=>{
    --i;
    if(i<0){
        i=0;
    }
    console.log("back"+i);
    sectionImg.style.backgroundImage='url('+imgAndText[i].image+')';
    sectionheader.innerText=imgAndText[i].header;
    sectionText.innerText=imgAndText[i].text;
})