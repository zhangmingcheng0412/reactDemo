import React,{Fragment} from "react";
import {Card} from "antd";

export default function Details(props) {
    let {data,loading} = props
    console.log(data)
    // let {author,content,create_at,good,top,tab,title,visit_count} = data
    return <Card
        bordered
        loading={loading}
        title={<Fragment>

        </Fragment>}
        type={"inner"}
    >
        <div
        dangerouslySetInnerHTML={{
            __html:null
        }}>

        </div>
    </Card>
}