import axios from "axios"
import {useDispatch} from "react-redux";


const http =axios.create({
    baseURL:"https://cnodejs.org/api/v1"
});

//数据
function useTopicsList() {
    let dispatch=useDispatch()
    return function (tab="all",page=1,limit=20,mdrender=true) {
        dispatch({
            type:"topics_loading"
        })
        http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then((res)=>{
                console.log(res);
                dispatch({
                    type:"topics_loadover",
                    data:res.data.data
                })
            })
    }
}

//详情
function useTopic() {
    let dispatch=useDispatch()
    return function (id) {
        dispatch({
            type:"topic_loading"
        })
        console.log(id)
        http.get(`/topic/${id}`).then((res)=>{
            console.log(res);
            dispatch({
                type:"topic_loadover",
                data:res.data.data
            })
        }).catch((res)=>{
            dispatch({
                type:"topic_error",
                err_msg:res.response.data.error_msg
            })
        })
    }
}




export {useTopicsList,useTopic}