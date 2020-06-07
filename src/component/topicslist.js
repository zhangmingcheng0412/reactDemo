import React from "react";
import {List, Col, Avatar} from "antd";
import { UserOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import TopicTag from "./topicTag";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.locale('zh-cn');
dayjs.extend(relativeTime);


function TopicList(props) {
    let {loading,data} = props;
    // console.log(TopicTag);
    return <List
            className="topics-list"
            loading={loading}
            dataSource={data}
            renderItem={(data)=>{
                // console.log(data)
                let {author,good,id,last_reply_at,title,top,tab} = data
                let {avatar_url,loginname} = author
                // console.log(last_reply_at)
                return <List.Item>
                    <Col xs={4} md={2}>
                        <Link to={`/user/${loginname}`}>
                            <Avatar
                                icon={<UserOutlined/>}
                                shape="square"
                                src={avatar_url}
                            />
                        </Link>
                    </Col>
                    <Col xs={20} md={20}>
                        <TopicTag
                            tab={top?"top":(good?"good":tab)}
                        />
                        <Link to={`/topics/${id}`}>
                            {title}
                        </Link>
                    </Col>
                    <Col xs={0} md={2} className={"from-now"}>
                        {dayjs(last_reply_at).fromNow()}
                    </Col>
                </List.Item>
            }}
        >
        </List>
}

export default TopicList



