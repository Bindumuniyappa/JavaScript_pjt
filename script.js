function display() {
    let time = new Date();
    let hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let msgDisplay = document.getElementById("text2");
    let displayImage = document.getElementById("alarmImage");
    let am_pm = time.getHours() >= 12 ? "PM" : "AM";

    if ((hours >= 1 && hours <= 4) && am_pm === "PM") {
        msgDisplay.innerHTML = "LETS HAVE SOME LUNCH";
        displayImage.style.background = "url('Group 5183.svg')";
    }

    else if (hours > 4 && hours < 8 && am_pm === "PM") {
        msgDisplay.innerText = "STOP YAWNING, GET SOME TEA..ITS JST EVENING";
        displayImage.style.background = "url('lunch_image.png')";
    }

    else if ((hours >= 8 && hours <= 12) && am_pm === "PM") {
        msgDisplay.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        displayImage.style.background = "url('Group 5194.svg')";
    }

    else if ((hours > 8 && hours <= 12) && am_pm === "AM") {
        msgDisplay.innerText = "Happy Morning :)";
        displayImage.style.background = "url('goodnight_image.svg')";
    }
    else {
        msgDisplay.innerText = "Its not good to see laptop at this time :(";
    }

    document.getElementById("timetext1").innerText = hours;
    document.getElementById("timetext2").innerText = mins;
    document.getElementById("timetext3").innerText = secs;
}
setInterval(display, 1000);


function setAlarm() {
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

        let wakeUpTimeHour = wakeUpTimeDropdown.options[wakeUpTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[0];
        let wakeUpPeriod = wakeUpTimeDropdown.options[wakeUpTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[1];
        setTimeout(playWakeUpTime, getAlarmInterval(Number.parseInt(wakeUpTimeHour), wakeUpPeriod));
        console.log("wakeup alarm set for " + getAlarmInterval(Number.parseInt(wakeUpTimeHour), wakeUpPeriod) / 3600000);

        let lunchTimeHour = lunchTimeDropdown.options[lunchTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[0];
        let lunchTimePeriod = lunchTimeDropdown.options[lunchTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[1];
        console.log(lunchTimeHour, lunchTimePeriod);
        setTimeout(playLunchTime, getAlarmInterval(Number.parseInt(lunchTimeHour), lunchTimePeriod));
        console.log("lunch alarm set for " + getAlarmInterval(Number.parseInt(lunchTimeHour), lunchTimePeriod) / 3600000);

        let napTimeHour = napTimeDropdown.options[napTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[0];
        let napTimePeriod = napTimeDropdown.options[napTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[1];
        setTimeout(playNapTime, getAlarmInterval(Number.parseInt(napTimeHour), napTimePeriod));
        console.log("nap alarm set for " + getAlarmInterval(Number.parseInt(napTimeHour), napTimePeriod) / 3600000);

        let nightTimeHour = nightTimeDropdown.options[nightTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[0];
        let nightTimePeriod = nightTimeDropdown.options[nightTimeDropdown.selectedIndex].innerText.split("-")[0].split(" ")[1];
        setTimeout(playNightTime, getAlarmInterval(Number.parseInt(nightTimeHour), nightTimePeriod));
        console.log("night alarm set for " + getAlarmInterval(Number.parseInt(nightTimeHour), nightTimePeriod) / 3600000);
    })
}


function setSession() {
    let time = new Date();
    let session = document.getElementById("timeText3");
    let am_pm = time.getHours() >= 12 ? "PM" : "AM";
    session.innerText = am_pm;
}

function playWakeUpTime() { document.getElementById("text3").innerText = "Good Morning!! Wake up!!"; }
function playLunchTime() { document.getElementById("text3").innerText = "Good Afternoon!! Take some sleep"; }
function playNapTime() { document.getElementById("text3").innerText = "Good Evening!!"; }
function playNightTime() { document.getElementById("text3").innerText = "Good Night!!"; }

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
    }
    else if (alarmHour < currentHour) {
        alarmTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, alarmHour);
    }
    else {
        alarmTime = currentDate.getTime() + 1000;
    }

    interval = alarmTime - currentDate.getTime();
    return interval;
}

setSession();
setAlarm();
playWakeUpTime();