import request from "@/utils/request";
export function postEval(allUser) {
    return request({
        datas: {
            url: '/post/make_evaluation',
            method: 'post',
            data: allUser
        }
    })
}