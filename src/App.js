import React from 'react';
import {Layout} from 'antd';
import './static/css/App.css';
// import {useSelector} from "react-redux";
import {route} from "./router/index";
import {Switch, Route} from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";


function App() {
    // console.log(route)
    return (
        <Layout className="index-app">
            <Header/>
            <Layout.Content>
                <div className="wrap">
                    <Switch>
                        {route.map((itemData, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={itemData.path}
                                    exact={itemData.exact}
                                    render={
                                        (props) => {
                                            props.username = "myreact"
                                            return itemData.render(props)
                                        }
                                    }
                                />
                            )
                        })
                        }
                    </Switch>
                </div>

            </Layout.Content>
            <Footer/>
        </Layout>
    );
}

export default App;
