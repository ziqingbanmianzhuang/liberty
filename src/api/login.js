import request from "@/utils/request";
export function login(loginObj) {
    return request({
        datas: {
            url: '/resign',
            method: 'post',
            data: loginObj
        }
    })
}