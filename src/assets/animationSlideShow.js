export function animitionSlideShow() {
    var b = document.querySelector(".b");
    var d = document.getElementsByClassName("d");
    let time;
    let index = 0;
    let a = function () {
        for (let i = 0; i < d.length; i++) {
            d[i].className = "d";
        }
    };
    let aa = function () {
        a();
        d[index].className = "d dd";
    };
    function ts() {
        time = setInterval(function () {
            aa();
            index++;
            let urlStr = require("../assets/imgs/" + [index] + ".jpg")
            b.style.backgroundImage = "url(" + urlStr + ")";
            if (index == 5) {
                index = 0;
            }
        }, 1500);
    }
    for (let i = 0; i < d.length; i++) {
        d[i].onmousemove = function () {
            b.style.backgroundImage = "url('./imgs" + [i + 1] + ".jpg')";
            let Str = require("../assets/imgs/" + [i + 1] + ".jpg")
            b.style.backgroundImage = "url(" + Str + ")";
            a();
            clearInterval(time);
            index = i + 1;
            ts();
        };
    }
    ts();
}