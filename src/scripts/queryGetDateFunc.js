export function queryGetDateFunc(date) {


    let Y = date.getFullYear();
    let M =
        date.getMonth() + 1 > 9
            ? date.getMonth() + 1
            : "0" + (date.getMonth() + 1);
    let D = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
    let h = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
    let m =
        date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
    let s =
        date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
    let Time = Y + "-" + M + "-" + D + "-" + h + "-" + m + "-" + s;
    return Time;

}