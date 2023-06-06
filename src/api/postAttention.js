import request from "@/utils/request";
export function postAttention(allUser) {
    return request({
        datas: {
            url: '/post/make_attention_post',
            method: 'post',
            data: allUser
        }
    })
}