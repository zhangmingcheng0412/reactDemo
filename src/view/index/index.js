import React, {useEffect} from "react";
import IndexNav from "./indexNav";
import TopicList from "../../component/topicslist";
import {useSelector} from "react-redux";
import {useTopicsList} from "../../store/action";
import qs from "qs";
import {useLocation} from "react-router";
import IndexPagination from "./indexPsginaation";

function IndexPage() {
    let {data,loading} = useSelector(state => state.topics)
    let getData = useTopicsList();
    let {search} = useLocation();
    let {tab="all",page=1} = qs.parse(search.substr(1));

    useEffect(()=>{
        // console.log(111)
        getData(tab,page);
    },[tab,page])
    return(
        <div>
            <IndexNav/>
            <TopicList
                data={data}
                loading={loading}
            />
            {loading?"":<IndexPagination/>}
        </div>
    )
}

export default IndexPage