import React from "react";
import {Affix,Layout,Row,Col,Menu} from "antd";
import {Link, useLocation} from "react-router-dom";
import {nav} from "../router";

function Header() {
    const {pathname} = useLocation()
    let activeIndex = nav.findIndex(navItem=>{
        return pathname===navItem.to
    })
    // console.log(activeIndex)
    return(
        <Affix offsetTop={0}>
            <Layout.Header id="header">
                <div className="wrap">
                    <Row>
                        <Col span={8}>
                            <h1 className="logo"><Link to="/">logo</Link></h1>
                        </Col>
                        <Col span={16}>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                selectedKeys={[activeIndex+'']}
                            >
                                {nav.map((navItme,index)=>{
                                    return <Menu.Item
                                        key={index}
                                    >
                                        <Link to={navItme.to}>
                                            {navItme.txt}
                                        </Link>

                                    </Menu.Item>
                                })}
                            </Menu>
                        </Col>
                    </Row>
                </div>
            </Layout.Header>
        </Affix>
    )
}

export default Header



