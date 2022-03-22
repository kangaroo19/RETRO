const userWindow=document.getElementById("window");//window는 이미 있으므로 변수명 userWdindow로 명명
const closeButton=document.getElementById("window-top-button");

function closeWindow(){
    userWindow.classList.add("hidden");
}

closeButton.addEventListener("click",closeWindow);