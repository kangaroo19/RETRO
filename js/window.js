const userWindow=document.getElementById("window");//window는 이미 있으므로 변수명 userWdindow로 명명
const closeButton=document.getElementById("close-button");
const icon2=document.getElementById("icon2");
const taskbarThings=document.getElementById('taskbar-things');

taskbarThings.classList.remove("view");

function closeWindow(){
    userWindow.classList.add("hidden");
    taskbarThings.classList.remove('view');
    //taskbarThings.innerText=null;
}

closeButton.addEventListener("click",closeWindow);
icon2.addEventListener("dblclick",()=>{
    userWindow.classList.remove("hidden");
    taskbarThings.classList.add('view');
    taskbarThings.innerText='My projects';
});

$('#close-button2').click(()=>{
    $('#my-info').addClass('hidden')

})

$('#icon1').dblclick(()=>{
    $('#my-info').removeClass('hidden')
})
const scroll2=document.getElementById('my-info-article-section')
$('#nav-button1').click(()=>{
    console.log(scroll2.scrollTop)
    console.log(scroll2.scrollTo(0,0))
})
$('#nav-button2').click(()=>{
    scroll2.scrollTo(0,300)
})

$('#nav-button3').click(()=>{
    scroll2.scrollTo(0,500)
})
$('#nav-button5').click(()=>{
    $('#my-info').addClass('hidden')
})

