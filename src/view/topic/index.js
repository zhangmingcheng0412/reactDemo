import React, {Fragment, useEffect} from "react";
import {useSelector} from "react-redux";
import {useHistory, useParams} from "react-router";
import {useTopic} from "../../store/action";
import {Alert} from "antd";
import Details from "./details";

function TopicPage() {
    // useSelector()
    let {data,loading,isError,err_msg}=useSelector(state=>state.topic)
    console.log(data,loading);
    let {id} = useParams();
    let getData = useTopic();
    let history = useHistory();
    useEffect(()=>{
        getData(id)
    },[id])
    return(
        <div>
            {isError?<Alert
                closable
                type={"error"}
                description={
                    <Fragment>
                        <p>{err_msg}</p>
                        <p>点击返回上一步</p>
                    </Fragment>
                }
                onClose={()=>{
                    history.goBack();
                }}
            />:(<Fragment>
                <Details/>
            </Fragment>)}
        </div>
    )
}

export default TopicPage