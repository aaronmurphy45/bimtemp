import React, {useState, useEffect} from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import { useGetStockTimeSeriesQuery } from '../services/stockTimeSeriesAPI'

export default function MostPopular(state) {

    console.log("Stocks")

  
   // const count = simplified ? 10: 100;
    const [country, setCountry] = React.useState("");
    const [exchange, setExchange] = React.useState("");
    const [symbol, setSymbol] = React.useState("AAPL,EUR/USD,ETH/BTC,TSLA");
    const [interval, setInterval] = React.useState("1min");


    const [type, setType] = React.useState("");
    const format = "json";
    const {data :stocksList, isFetching } = useGetStockTimeSeriesQuery({symbol, interval});
    console.log(state)
    console.log(stocksList)
    
    const [stocks, setStocks ] = React.useState([])

    const [searchTerm, setSearchTerm] = useState('')
    console.log(stocks)
    console.log(stocksList)


    // use treding from api.

    useEffect(()=> { 

        const filteredData = stocksList?.data?.filter((stock)=> stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()))

        setStocks(filteredData)
    }, [stocksList, searchTerm])
    
    if (isFetching){
        return 'Loading...'
    }
    return (
        <> 
        <Input placeholder = "Search" onChange = {(e)=> setSearchTerm(e.target.value)}></Input>
            
            <Row gutters = {[32,32]} className = "crypto-card-container">
                {stocks?.map((stock)=> (
                    <Col xs ={24} sm={12} lg={6} className ="crypto-card">
                        <Link to = {`'/crypto/32'`}> 
                            <Card 
                            title = { `${stock}`}
                            >
                                <p>
                                    Exchange: {(stock.meta.exchange)} <br/>
                                    Symbol: {(stock.meta.symbol)}  <br/>
                                    Country: {(stock.meta.country)}  <br/>
                                    Type: {(stock.meta.type)} <br/>
                                    Currency: {(stock.meta.currency)}
                                </p>
                            </Card>
                        </Link>
                        
                    </Col>
                ))}
            </Row>
        </>
    )
}
