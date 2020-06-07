import React from "react";
import {Pagination} from "antd";
import {Link, useLocation} from "react-router-dom";
import qs from "qs";

export default function IndexPagination() {
    let {search} = useLocation();
    // console.log(search);
    let {tab="all",page=1} =qs.parse(search.substr(1));
    // console.log(tab)
    return <div className={"index-pagination"}>
        <Pagination
            defaultCurrent={page}
            defaultPageSize={20}
            total={2000}
            itemRender={(page,type)=>{
                // console.log(type,page)
                switch (type) {
                    case "page":
                        return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>
                    case "prev":
                        return <Link to={`/?tab=${tab}&page=${page}`}>prev</Link>
                    case "next":
                        return <Link to={`/?tab=${tab}&page=${page}`}>next</Link>
                    default:
                        return <Link to={`/?tab=${tab}&page=${page}`}>...</Link>
                }
            }}
        />
    </div>
}