import React from "react";
import qs from "qs";
import IndexPage from "../view/index";
import TopicPage from "../view/topic";
import AboutPage from "../view/about";
import UserPage from "../view/user";
import Page404 from "../view/pagers404";
import GetStartPage from "../view/getstart";

const types = [
    "all",
    "good",
    "share",
    "ask",
    "job",
    "dev"
]
const route = [
    {
        path:'/',
        exact:true,
        render(props){
            // console.log(props)
            let {location} = props;
            let {search} = location;
            let {tab,page} = qs.parse(search.substr(1));
            // console.log(qs.parse(search))
            if ((tab===undefined&&page===undefined)||(types.includes(tab)&&(page===undefined||page>0))){
                return <IndexPage {...props}/>
            }
            return <Page404 {...props}/>

        }
    },
    {
        path:'/topics/:id',
        exact:true,
        render(props){
            return <TopicPage {...props}/>
        }
    },
    {
        path:'/user/:username',
        exact:true,
        render(props){
            return <UserPage {...props}/>
        }
    },
    {
        path:'/getstart',
        exact:true,
        render(props){
            return <GetStartPage {...props}/>
        }
    },
    {
        path:'/about',
        exact:true,
        render(props){
            return <AboutPage {...props}/>
        }
    },
    {
        path:'',
        exact:false,
        render(props){
            return <Page404 {...props}/>
        }
    }
];
const nav = [
    {
        to:'/',
        txt:'首页'
    },
    {
        to:'/getstart',
        txt:'新手入门'
    },
    {
        to:'/about',
        txt:'关于我们'
    }
]

const indexNav = [
    {
        to:'/?tab=all',
        txt:'全部'
    },
    {
        to:'/?tab=good',
        txt:'精华'
    },
    {
        to:'/?tab=share',
        txt:'分享'
    },
    {
        to:'/?tab=ask',
        txt:'问答'
    },
    {
        to:'/?tab=job',
        txt:'招聘'
    },
    {
        to:'/?tab=dev',
        txt:'客户端测试'
    }
]
export {route,nav,indexNav,types}