function display(){
let times=new Date();
let hours=times.getHours()>12?times.getHours()-12:times.getHours();
let mins=times.getMinutes();
let secs=times.getSeconds();
let session=document.getElementById("timeText3");
let msg=document.getElementById("text3");
let msgDisplay=document.getElementById("text2");
// let displayImage=document.getElementById("img1")

if(hours>=12 && hours<=4){
    
   
    msgDisplay.innerText="LETS HAVE SOME LUNCH";
    // displayImage.style.backgroundImage=url("C:\Users\91951\Desktop\Prepbytes\JavaScript_pjt\lunch_time.png");
    
    
}
else if(hours>=4 && hours<=8){
    
    
    msgDisplay.innerText="STOP YAWNING, GET SOME TEA..ITS JST EVENING";
}

else{
    
}

document.getElementById("timetext1").innerText=hours;
document.getElementById("timetext2").innerText=mins;
document.getElementById("timetext3").innerText=secs;
}
setInterval(display,1000);


function setAlarm(){
    const wakeUpTime=document.getElementById("wakeUpTime");
    const LunchTime=document.getElementById("LunchTime");
    const NapTime=document.getElementById("NapTime");
    const NightTime=document.getElementById("NightTime");

    const wakeUpTimeDropdown=document.getElementById("wakeUpTimeDropdown");
    const lunchTimeDropdown=document.getElementById("lunchTimeDropdown");
    const napTimeDropdown=document.getElementById("napTimeDropdown");
    const nightTimeDropdown=document.getElementById("nightTimeDropdown");

    let setAlarmBtn=document.getElementById("setAlarmBtn");
    setAlarmBtn.addEventListener("click",function(){
        wakeUpTime.innerText=wakeUpTimeDropdown.options[wakeUpTimeDropdown.selectedIndex].innerText;
        LunchTime.innerText=lunchTimeDropdown.options[lunchTimeDropdown.selectedIndex].innerText;
        NapTime.innerText=napTimeDropdown.options[napTimeDropdown.selectedIndex].innerText;
        NightTime.innerText=nightTimeDropdown.options[nightTimeDropdown.selectedIndex].innerText;

           let wakeUpTimeHour=wakeUpTimeDropdown.options[wakeUpTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[0];
           let wakeUpPeriod=wakeUpTimeDropdown.options[wakeUpTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[1];
           setTimeout(playWakeUpTime,getAlarmInterval(wakeUpPeriod,wakeUpTimeHour));

           let lunchTimeHour=lunchTimeDropdown.options[lunchTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[0];
           let lunchTimePeriod=lunchTimeDropdown.options[lunchTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[1];
           console.log(lunchTimePeriod,lunchTimeHour);
           setTimeout(playLunchTime,getAlarmInterval(lunchTimePeriod,lunchTimeHour));

           let napTimeHour=napTimeDropdown.options[napTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[0];
           let napTimePeriod=napTimeDropdown.options[napTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[1];
           console.log(napTimePeriod,napTimeHour);
           setTimeout(playNapTime,getAlarmInterval(napTimePeriod,napTimeHour));

           let nightTimeHour=nightTimeDropdown.options[nightTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[0];
           let nightTimePeriod=nightTimeDropdown.options[nightTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[1];
           console.log(nightTimePeriod,nightTimeHour);
           setTimeout(playNightTime,getAlarmInterval(nightTimePeriod,nightTimeHour));

   })
}


function setSession(){
    let time= new Date();
    let session=document.getElementById("timeText3");

    let am_pm=time.getHours()>=12 ? "PM" : "AM";
    session.innerText=am_pm;
}
function playWakeUpTime(){document.getElementById("text3").innerText="Good Morning!! Wake up!!";}
function playLunchTime(){document.getElementById("text3").innerText="Good Afternoon!! Take some sleep";}
function playNapTime(){document.getElementById("text3").innerText="Good Evening!!";}
function playNightTime(){ document.getElementById("text3").innerText="Good Night!!";}

function getAlarmInterval(alarmPeriod, alarmHour) {
    let currentDate = new Date();
    let currentPeriod = currentDate.getHours() > 12 ? "PM" : "AM";
    let alarmTime = "";
    let currentHour = currentPeriod === "PM" ? currentDate.getHours() - 12 : currentDate.getHours();
    // let currentHour=currentDate.getHours();
    alarmHour = alarmPeriod === "PM" ? alarmHour + 12 : alarmHour;
    let isBothPeriodPM = alarmPeriod === "PM" && currentPeriod === "PM";
    let isBothPeriodAM = alarmPeriod === "AM" && currentPeriod === "AM";
    let interval = 0;
    if (isBothPeriodPM || isBothPeriodAM) {
        if (alarmHour > currentHour) {
            alarmTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), alarmHour);
        }
        else if (alarmHour < currentHour) {
            alarmTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, alarmHour);
        }

    }

    else if (alarmPeriod === "AM" && currentPeriod === "PM") {
        alarmTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, alarmHour);
    }
    else {
        alarmTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), alarmHour);
    }

    interval = alarmTime - currentDate.getTime();
    console.log((alarmTime - currentDate.getTime()) / 3600000);
    return interval;

}

// getAlarmInterval("AM", 9);





setSession();
setAlarm();
playWakeUpTime();