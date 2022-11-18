const userWindow=document.getElementById("window");//window는 이미 있으므로 변수명 userWdindow로 명명
const myInfo=document.getElementById('my-info')
const closeButton=document.getElementById("close-button");
const icon1=document.getElementById("icon1");
const icon2=document.getElementById("icon2");
const taskbarThings=document.getElementById('taskbar-things');
const errorBtn=$('#error-window-bottom').children()

taskbarThings.classList.remove("view");

function closeWindow(){
    userWindow.classList.add("hidden");
    taskbarThings.classList.remove('view');
    taskbarThings.innerText=null;
    
}

closeButton.addEventListener("click",closeWindow);
// icon2.addEventListener("dblclick",(event)=>{
//     userWindow.classList.remove("hidden");
    
  
// });

$('#close-button2').click(()=>{
    $('#my-info').addClass('hidden')
    taskbarThings.classList.remove('view')
    taskbarThings.innerText=null;

})
taskbarThings.classList.add('view');
taskbarThings.innerText='My Information';
icon1.addEventListener('dblclick',()=>{
    if(userWindow.className==='animate__animated animate__fadeIn ui-draggable'){
        return
    }
    else{
        $('#my-info').removeClass('hidden') 
        
        taskbarThings.classList.add('view');
        taskbarThings.innerText='My Information';
    }
})
$('.icon-img-text').draggable()

$('#window').draggable()
 $('#my-info').draggable()

icon2.addEventListener('dblclick',()=>{
    console.log(myInfo.className)
    if(myInfo.className=='animate__animated animate__fadeIn ui-draggable'){
        return
    }
    else{
        $('#window').removeClass('hidden')
        taskbarThings.classList.add('view');
        taskbarThings.innerText='My projects';
    }
})
$('#icon3').on('dblclick',()=>{
    $('#error-window').removeClass('hidden')
})


$(errorBtn).on('click',()=>{
    $('#error-window').addClass('hidden')
})
const scroll2=document.getElementById('my-info-article-section')
$('#nav-button1').click(()=>{
    // audio.play()
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
