const clock=document.querySelector("#clock");
var amPm="";

function getClock(){
    const date=new Date(); //date 객체 생성
    const hours = String(date.getHours()).padStart(2, "0"); //String은 ()안의 내용 문자열로 저장한다는 뜻
    const minutes = String(date.getMinutes()).padStart(2, "0");//padstart는 2칸중 앞에 0채워넣는다는 뜻
    if(12<=hours && hours<=23){
        amPm="PM";
    }
    else if(0<=hours && hours<=11){
        amPm="AM";
    }
    clock.innerText = hours+":"+minutes+" "+amPm;
    
}
getClock();
setInterval(getClock,1000);