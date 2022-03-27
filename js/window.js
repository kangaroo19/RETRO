const userWindow=document.getElementById("window");//window는 이미 있으므로 변수명 userWdindow로 명명
const closeButton=document.getElementById("window-top-button");
const icon2=document.getElementById("icon2");
const taskbarThings=document.getElementById('taskbar-things');


function closeWindow(){
    userWindow.classList.add("hidden");
    taskbarThings.classList.remove('view');
    taskbarThings.innerText=null;
}

closeButton.addEventListener("click",closeWindow);
icon2.addEventListener("dblclick",()=>{
    userWindow.classList.remove("hidden");
    taskbarThings.classList.add('view');
    taskbarThings.innerText='Helloo';
});





