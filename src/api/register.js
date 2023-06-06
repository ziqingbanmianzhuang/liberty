import request from "@/utils/request";
export function register(loginObj) {
    return request({
        datas: {
            url: '/login',
            method: 'post',
            data: loginObj
        }
    })
}