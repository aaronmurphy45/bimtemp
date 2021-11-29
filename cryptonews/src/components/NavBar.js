import React from 'react'
import { Button, Menu , Typography , Avatar}  from 'antd'
import {Link} from 'react-router-dom'
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined , MenuOutlined, MailOutlined} from '@ant-design/icons'

import icon from '../images/cryptocurrency.png'
import iconx from '../images/CrypToYou.png';

const { SubMenu } = Menu;

export default function NavBar() {
    return (
        <div className = "nav-container">
            <div className = "logo-container">
                {/*   <Avatar src = {iconx} size ="large"></Avatar>*/ }
             
                <Typography.Title level = {2} className="logo">
                    <Link to = "/"> <img src={iconx} alt={"logo"}/></Link>
                </Typography.Title>
            </div>
            <Menu theme = "light"> 
                 <Menu.Item icon = {<HomeOutlined/>} key ="1">
                     <Link to = "/">Home</Link>
                 </Menu.Item>
                 <SubMenu key="sub1" icon={<FundOutlined/>} title="Stocks">
                 <Menu.Item key="3">
                        <Link to = "/NYSE">New York Stock Exchange</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to = "/LSE">London Stock Exchange</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to = "/NASDAQ">NASDAQ</Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to = "/MostPopular">Most Popular</Link>
                    </Menu.Item>
                   
            </SubMenu>
                 <Menu.Item icon = {<FundOutlined/>} key ="9">
                     <Link to = "/cryptocurrencies">Crypto Currencies </Link>
                 </Menu.Item>
                 <Menu.Item icon = {<MoneyCollectOutlined/>} key ="10">
                     <Link to = "/exchanges">Exchanges</Link>
                 </Menu.Item>
                 <Menu.Item icon = {<BulbOutlined/>} key ="11">
                     <Link to = "/news">News </Link>
                 </Menu.Item>
            </Menu>
        </div>
    )
}
 