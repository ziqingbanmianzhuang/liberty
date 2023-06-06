import Vue from 'Vue'
export const countsDown=() => {
    let day = document.querySelector('.day');
    let hour = document.querySelector('.hour');
    let min = document.querySelector('.min');
    let sec = document.querySelector('.sec');
    function countDown() {
        let now = +new Date();
        let inputtime = +new Date('2022-3-27 24:00:00');
        let times = inputtime - now;
        if (times === 0) {
            clearInterval(count);
        }
        else {
            let days = parseInt(times / 1000 / 60 / 60 / 24);
            let hours = parseInt(times / 1000 / 60 / 60);
            let minutes = parseInt(times / 1000 / 60 % 60);
            let seconds = parseInt(times / 1000 % 60);
            let daysStr = days.toString();
            let hoursStr = hours.toString();
            let minutesStr = minutes.toString();
            let secondsStr = seconds.toString();
            if (daysStr.length != 2) {
                day.children[1].innerHTML = daysStr[0]
            }
            else {
                day.children[0].innerHTML = daysStr[0]
                day.children[1].innerHTML = daysStr[1]

            }
            if (hoursStr.length != 2) {
                hour.children[1].innerHTML = hoursStr[0]
            }
            else {
                hour.children[0].innerHTML = hoursStr[0]
                hour.children[1].innerHTML = hoursStr[1]

            }
            if (minutesStr.length != 2) {
                min.children[1].innerHTML = minutesStr[0]
            }
            else {
                min.children[0].innerHTML = minutesStr[0]
                min.children[1].innerHTML = minutesStr[1]

            }
            if (secondsStr.length != 2) {
                sec.children[1].innerHTML = secondsStr[0]
            }
            else {
                sec.children[0].innerHTML = secondsStr[0]
                sec.children[1].innerHTML = secondsStr[1]

            }
        }

    }
    setTimeout(countDown, 0);
    var count = setInterval(countDown, 1000);
}