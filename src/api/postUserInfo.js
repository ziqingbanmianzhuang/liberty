import request from "@/utils/request";
export function postUserInfo(allUser) {
    return request({
        datas: {
            url: '/user/update',
            method: 'post',
            data: allUser
        }
    })
}