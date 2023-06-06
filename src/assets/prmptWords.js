function prmptWords() {

    var arr = [
        "别人用好听形容音乐，我用你的音乐来形容好听", "你的好运正在派件,请保持心情舒畅。", "把心腾干净,住进来的人才舒服。", "大声的笑出来，就不害怕了。", "人总要走在路上，才能扶着自己成长", "我们所度过的每一个日常，也许就是连续发生的奇迹。", "若时间是一个圆，我期待与你再圆的另一头重逢。", "生活原本沉闷，但跑起来就会有风。", "有自制力的人，才配谈自由。", "我们所度过的每一个日常，也许就是连续发生的奇迹。", "夏天这么美好，你当然值得快乐。", "为自己守护的世界战斗不是很好吗", "只要你的心是善良的，对错都是别人的事。"
        , "带上信仰,去找寻属于你自己的国度吧！哪怕倾尽一生", "只要活着，就该笑着去面对一切的一切", "我们虽然不能抹掉过去，可是却可以超越他", "相信奇迹的人，本身就和奇迹一样了不起", "弱小的人能保护什么？又能拯救谁", "知道人的眼睛为什么是长在前面的吗？"
    ];
    var box = document.querySelector(".side-main")
    box.onclick = function (x) {
        var section = document.createElement("section");

        section.style.color = "#2c698d";
        section.style.position = "absolute";
        section.style.transition = "1s"
        section.style.left = x.clientX + "px";
        section.style.top = x.clientY + "px";
        section.innerHTML = arr[Math.floor(Math.random() * arr.length)]
        setTimeout(function () {
            section.style.opacity = "1";
            section.style.transform = "translateY(-100px)"
        }, 100);
        setTimeout(function () {
            section.style.opacity = "0";
            section.style.transform = "translateY(-230px)"
        }, 1500);
        var chi = document.getElementsByTagName("section");
        for (var i = 0; i < chi.length; i++) {
            if (chi[i].style.opacity === "0") {
                document.body.removeChild(chi[i]);
            }
        }
        document.body.appendChild(section);
        clearTimeout()
    }
}
module.exports = prmptWords;