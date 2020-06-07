import React from "react";
import {Tag} from "antd";

function setTag(tab) {
    switch (tab) {
        case "top":
            return <Tag color={"#f50"}>置顶</Tag>
        case "good":
            return <Tag color={"red"}>精华</Tag>
        case "share":
            return <Tag color={"volcano"}>分享</Tag>
        case "ask":
            return <Tag color={"orange"}>问答</Tag>
        case "job":
            return <Tag color={"blue"}>招聘</Tag>
        case "dev":
            return <Tag color={"purple"}>测试</Tag>
    }
    return null;
}


export default function TopicTag(props) {
    // console.log(props);
    let {tab} =props;
    return  setTag(tab)
}