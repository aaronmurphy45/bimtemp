import {React, useState} from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router'
import millify from 'millify'
import { Col, Row, Typography, Select } from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import FileUpload from '../machineLearning/FileUpload'

import { useGetCryptoDetailsQuery } from '../services/cryptoAPI'
import { Option } from 'rc-select'
import { useGetStockBusinessDetailsQuery } from '../services/yahooRecommmend'
const {Title, Text} = Typography;
const {Options} = Select;




export default function CryptoDetails() {
    const {coinId} = useParams();
    console.log(coinId)
    const [timePeriod, setTimePeriod] = useState('7d')

    const {data, isFetching} = useGetCryptoDetailsQuery(coinId)
    const cryptoDetails = data?.data?.coin;

    console.log(isFetching)
    if (isFetching){
        console.log("still fetching")
        return <div>Loading...</div>
    }
    console.log(data)

    console.log(cryptoDetails)

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
    
  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails.approvedSupply ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${millify(cryptoDetails.totalSupply)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails.circulatingSupply)}`, icon: <ExclamationCircleOutlined /> },
  ];

    

    return (
        <div>
            <FileUpload/>
            <h1>CryptoDetails {coinId}</h1>
            <Col className = "coin-detail-container">
                <Col className = "coin-heading-container">
                    <Title level={2} className = "coin-name">
                        {cryptoDetails.name} ({cryptoDetails.slug}) Price
                    </Title>
                    <p>
                        {cryptoDetails.name } live price 
                        View Value Statistics, Market Cap and Supply
                    </p>
                </Col>
                <Select 
                    defaultValue = "7d"
                    className = "select-time-period"
                    placeholder = "Select Time Period "
                    onChange = {(value)=>setTimePeriod(value)}
                >
                    {time.map((element)=>{
                        <Option key = {element}>{element}</Option>
                    })}
                </Select>
                
            </Col>
            
        </div>
    )
}