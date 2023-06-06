import request from "@/utils/request";
export function postUserMake(allUser) {
    return request({
        datas: {
            url: '/user/userMake',
            method: 'post',
            data: allUser
        }
    })
}