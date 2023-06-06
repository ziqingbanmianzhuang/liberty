import request from "@/utils/request";
export function postByTitle(allUser) {
    return request({
        datas: {
            url: '/post/title/0',
            method: 'post',
            data: allUser
        }
    })
}