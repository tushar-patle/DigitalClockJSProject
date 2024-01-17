func_t = () => {
    let dateVar = new Date();
    let seconds = dateVar.getSeconds();
    let minutes = dateVar.getMinutes();
    let hours = dateVar.getHours();
    let currentDate = dateVar.getDate();
    let year = dateVar.getFullYear();
    let month = dateVar.getMonth() + 1;

    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let currentDayOfWeek = daysOfWeek[dateVar.getDay()];

    let dateformat = currentDate + "/" + month + "/" + year;
    let time = document.getElementsByClassName("time");

    let hours12 = 0;
    let ampm = "AM";
    if(hours>12){
        hours12 = hours-12;
        ampm = "PM";
    } else {
        hours12 = hours + " AM";
        ampm = "AM";
    }

    time[0].innerHTML = hours12;
    time[1].innerHTML = minutes;
    time[2].innerHTML = seconds +" "+ ampm;
    time[3].innerHTML = dateformat;
    time[4].innerHTML = currentDayOfWeek;
}
setInterval(func_t, 1000)