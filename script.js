let displayImage = document.getElementById("alarmImage");
function display() {
    let time = new Date();
    let hour=time.getHours()>12?time.getHours()-12:time.getHours();
    let currentHour = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let msgDisplay = document.getElementById("text2");
    
    hour=hour<=9?"0"+hour:hour;
    mins=mins<=9?"0"+mins:mins;
    secs=secs<=9?"0"+secs:secs;
    

    if (( currentHour>= 6 && currentHour <= 11) ) {
        msgDisplay.innerHTML = "GRAB SOME!! HEALTHY BREAKFAST!!"; 
    }

    else if (currentHour >= 12 && currentHour <=16 ) {
        msgDisplay.innerText = "HAVE SOME LUNCH!!";
    }

    else if ((currentHour >= 17 && currentHour <= 20) ) {
        msgDisplay.innerText = "STOP YAWNING!!ITS JUST EVENING!!";  
    }

    else if ((currentHour >= 21 && currentHour <= 23) ) {
        msgDisplay.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
    }
    else {
        msgDisplay.innerText = "Its not good to see laptop at this time :(";
    }

    document.getElementById("timetext1").innerText = hour;
    document.getElementById("timetext2").innerText = mins;
    document.getElementById("timetext3").innerText = secs;
}
setInterval(display, 1000);


function setAlarm() {
    let currentDate=new Date();
    let currentHour = currentDate.getHours();
    const wakeUpTime = document.getElementById("wakeUpTime");
    const LunchTime = document.getElementById("LunchTime");
    const NapTime = document.getElementById("NapTime");
    const NightTime = document.getElementById("NightTime");

    const wakeUpTimeDropdown = document.getElementById("wakeUpTimeDropdown");
    const lunchTimeDropdown = document.getElementById("lunchTimeDropdown");
    const napTimeDropdown = document.getElementById("napTimeDropdown");
    const nightTimeDropdown = document.getElementById("nightTimeDropdown");

    let setAlarmBtn = document.getElementById("setAlarmBtn");
    setAlarmBtn.addEventListener("click", function () {
        wakeUpTime.innerText = wakeUpTimeDropdown.options[wakeUpTimeDropdown.selectedIndex].innerText;
        LunchTime.innerText = lunchTimeDropdown.options[lunchTimeDropdown.selectedIndex].innerText;
        NapTime.innerText = napTimeDropdown.options[napTimeDropdown.selectedIndex].innerText;
        NightTime.innerText = nightTimeDropdown.options[nightTimeDropdown.selectedIndex].innerText;

        let wakeUpTimeHour =wakeUpTimeDropdown.value;
        // let wakeUpPeriod = wakeUpTimeDropdown.options[wakeUpTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[1];
        if(Number.parseInt(wakeUpTimeHour)===currentHour){
            displayImage.style.background="url('GoodMorningImage.svg')";
            console.log("helo");
            document.getElementById("text3").innerText = "Good Morning!! Wake up!!";
            
            

        }

        // setTimeout(playWakeUpTime, getAlarmInterval(Number.parseInt(wakeUpTimeHour), wakeUpPeriod));
        // console.log("wakeup alarm set for " + getAlarmInterval(Number.parseInt(wakeUpTimeHour), wakeUpPeriod) / 3600000);

        let lunchTimeHour = lunchTimeDropdown.value;
        // let lunchTimePeriod = lunchTimeDropdown.options[lunchTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[1];
        if(Number.parseInt(lunchTimeHour)===currentHour){
            displayImage.style.background="url('LunchImage.svg')";
            document.getElementById("text3").innerText = "Good Afternoon!! Take some sleep";
            

        }

        // console.log(lunchTimeHour, lunchTimePeriod);
        // setTimeout(playLunchTime, getAlarmInterval(Number.parseInt(lunchTimeHour), lunchTimePeriod));
        // console.log("lunch alarm set for " + getAlarmInterval(Number.parseInt(lunchTimeHour), lunchTimePeriod) / 3600000);

        let napTimeHour = napTimeDropdown.value;
        // let napTimePeriod = napTimeDropdown.options[napTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[1];
        if(Number.parseInt(napTimeHour)===currentHour){
            displayImage.style.background="url('GoodEveningImage.png')";
            document.getElementById("text3").innerText = "Good Evening!!";

        }

        // setTimeout(playNapTime, getAlarmInterval(Number.parseInt(napTimeHour), napTimePeriod));
        // console.log("nap alarm set for " + getAlarmInterval(Number.parseInt(napTimeHour), napTimePeriod) / 3600000);

        let nightTimeHour = nightTimeDropdown.value;
        // let nightTimePeriod = nightTimeDropdown.options[nightTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[1];
        if(Number.parseInt(nightTimeHour)===currentHour){
            displayImage.style.background="url('Good_night_Image.svg')";
            document.getElementById("text3").innerText = "Good Night!!";

        }

        // setTimeout(playNightTime, getAlarmInterval(Number.parseInt(nightTimeHour), nightTimePeriod));
        // console.log("night alarm set for " + getAlarmInterval(Number.parseInt(nightTimeHour), nightTimePeriod) / 3600000);
    })
}


function setSession() {
    let time = new Date();
    let session = document.getElementById("timeText3");
    let am_pm = time.getHours() >= 12 ? "PM" : "AM";
    session.innerText = am_pm;
}

// function playWakeUpTime() { 
//     document.getElementById("text3").innerText = "Good Morning!! Wake up!!";
//     displayImage.style.background="url('Component 30 – 1.png')";
//  }
// function playLunchTime() {
//      document.getElementById("text3").innerText = "Good Afternoon!! Take some sleep";
//     displayImage.style.background="url('Group 5183.svg')";
//  }
// function playNapTime() { 
//     document.getElementById("text3").innerText = "Good Evening!!";
//     displayImage.style.background="url('lunch_image.png')"; 
// }
// function playNightTime() { 
//     document.getElementById("text3").innerText = "Good Night!!";
//     displayImage.style.background="url('Group 5194.svg')"; 
// }

function getAlarmInterval(alarmHour, alarmPeriod) {
    let currentDate = new Date();
    let alarmTime = "";
    let currentHour = currentDate.getHours();
    alarmHour = alarmPeriod === "PM" ? alarmHour + 12 : alarmHour;
    let interval = 0;

    if (alarmHour == 12 && alarmPeriod === "AM") {
        alarmHour = 0;
    }
    if (alarmHour == 24 && alarmPeriod === "PM") {
        alarmHour = 12;
    }

    if (alarmHour > currentHour) {
        alarmTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), alarmHour);
        // alarmTime=new Date(2022,11,24,13);
        console.log("alarmtime:"+alarmTime);
    }
    else if (alarmHour < currentHour) {
        alarmTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, alarmHour);
         alarmTime=new Date(2022,11,25,0)
    }
    else {
        alarmTime = currentDate.getTime() + 1000;
    }

    interval = alarmTime - currentDate.getTime();
    return interval;
}

setSession();
setAlarm();


