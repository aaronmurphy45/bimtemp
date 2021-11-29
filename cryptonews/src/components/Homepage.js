import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoAPI'
import { Cryptocurrencies, CryptoNews, Stocks, StockNews } from '../components'
import NASDAQ from './NASDAQ'

const {Title} = Typography;

export default function Homepage() {

    const {data, isFetching} = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats

    console.log(data)

    if (isFetching){
        return 'Loading...'
    }

    return (
        <>{/*}
           <Title level ={2} className= "heading">Global Crypto Stats</Title>
           <Row>
               <Col span = {12}><Statistic title = "Total Cryto Currecncies" value = {globalStats.total}></Statistic></Col>
               <Col span = {12}><Statistic title = "Total Exchanges" value = {millify(globalStats.totalExchanges)}></Statistic></Col>
               <Col span = {12}><Statistic title = "Total Market Cap" value = {millify(globalStats.totalMarketCap)}></Statistic></Col>
               <Col span = {12}><Statistic title = "Total 24 Hour Cap" value = {millify(globalStats.total24hVolume)}></Statistic></Col>
               <Col span = {12}><Statistic title = "Total Markets" value = {millify(globalStats.totalMarkets)}></Statistic></Col>
           </Row>
    */}
           <div className = "home-heading-container">
               <Title level = {2} className = "home-title">Your Favourites</Title>
               <Title level ={3} className ="show-more"><Link to = '/favourites'>Show More</Link></Title>
           </div>
           <div className = "home-heading-container">
               <Title level = {2} className = "home-title">Most Popluar</Title>
               <Title level ={3} className ="show-more"><Link to = '/mostpopular'>Show More</Link></Title>
           </div>
           <div className = "home-heading-container">
               <Title level = {2} className = "home-title"> Top 10 Stocks</Title>
               <Title level ={3} className ="show-more"><Link to = '/stocks'>Show More</Link></Title>
           </div>
            {/*
           <NASDAQ simplidied></NASDAQ>
            */}
           <div className = "home-heading-container">
               <Title level = {2} className = "home-title"> Top 10 Crypto Currencies </Title>
               <Title level ={3} className ="show-more"><Link to = '/cryptocurrencies'>Show More</Link></Title>
           </div>
           <Cryptocurrencies simplified ></Cryptocurrencies>
           <div className = "home-heading-container">
               <Title level = {2} className = "home-title"> Latest Crypto News </Title>
               <Title level ={3} className ="show-more"><Link to = '/cryptonews'>Show More</Link></Title>
           </div>
           <CryptoNews simplified> </CryptoNews>
           <div className = "home-heading-container">
               <Title level = {2} className = "home-title"> Latest Stocks News </Title>
               <Title level ={3} className ="show-more"><Link to = '/stocknews'>Show More</Link></Title>
           </div>
           <CryptoNews simplified> </CryptoNews>
        </>
    )
}
