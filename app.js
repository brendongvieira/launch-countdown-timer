const countdown = () => {
    const countDate = new Date('Jul 01, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Calculate
    let daysLeft = Math.floor(gap / day);
    let hoursLeft = Math.floor((gap % day) / hour);
    let minutesLeft = Math.floor((gap % hour) / minute);
    let secondsLeft = Math.floor((gap % minute) / second);

    daysLeft = daysLeft < 10 ? "0" + daysLeft : daysLeft;
    hoursLeft = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
    minutesLeft = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
    secondsLeft = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

    document.querySelector('.day').innerText = daysLeft;
    document.querySelector('.hour').innerText = hoursLeft;
    document.querySelector('.minute').innerText = minutesLeft;
    document.querySelector('.second').innerText = secondsLeft;
};

setInterval(countdown, 1000);