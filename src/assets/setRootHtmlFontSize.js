
export const setRootHtmlFontSize = () => {
    var c = () => {
        let w = document.documentElement.clientWidth;
        // 获取设备的宽度
        // 以20为基准（一般是16号字），以320（该设备宽度是最合适的）作为依据（初始化，反正会随着页面响应的
        let n = (20 * (w / 1920) > 40 ? 40 + "px" : (20 * (w / 1920) + "px"));
        document.documentElement.style.fontSize = n;
    }
    window.addEventListener("load", c);
    window.addEventListener("resize", c)


}
