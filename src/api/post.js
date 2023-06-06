import request from "@/utils/request";
export function post(postObj) {
    return request({
        datas: {
            url: '/post/makePost',
            method: 'post',
            data: postObj
        }
    })
}