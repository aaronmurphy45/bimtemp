
import React from 'react'
import {useForm} from 'react-hook-form'
import Button from '@material-ui/core/Button'
import {parse} from 'papaparse';
import { useDispatch } from 'react-redux'
import { useGetStockBusinessDetailsQuery } from '../services/yahooRecommmend'
//import {actionTypes }from '../../Store/result/actions';

export default function FileUpload() {

    const {register, handleSubmit} = useForm()
    const [assets, setAssets] = React.useState([])
    const [file, setFile] = React.useState()
    var obv = 0;
    const dispatch = useDispatch()
    const {datax, isFetching} = useGetStockBusinessDetailsQuery({symbol: "BTC/USD"})
    var i=0;
    var data = data?.data?.data;
    console.log(i)
    console.log(datax)
    var result;
    const onChange = (e) =>{
        
        setFile(e.target.files)
        // UseEffect Here?
        Array.from(e.target.files).filter(file => file.type === "text/csv").forEach(async (file)=> 
                {const text = await file.text();
                 result = parse(text, {header: true})
    
                 setAssets(existing => [...existing, ...result.data])
                 machineLearning(result.data)
                })
                
        console.log(assets)
    }
    const onSubmit = (data)=> {
        console.log("uploadedForm")

        //dispatch({ type: actionTypes.VIN_RESULT_REQUEST, assets})


    }

    const machineLearning = (assets) => {

        setAssets(existing => [...existing, ...result.data])
        console.log(assets)

        /*In the book, Greenblatt outlines two criteria for stock investing: 
        Stock price and company cost of capital. Instead of conducting fundamental analysis of companies and stocks,
        investors use Greenblatt's online stock screener tool to select the 20 to 30 top-ranked companies in which to invest.
        Company rankings are based on:


        Their stock's earnings which are calculated as earnings before interest and taxes (EBIT).
        Their yield, calculated as earnings per share (EPS) divided by the current stock price.
        Their return on capital measures how efficiently they generate earnings from their assets.
        */
       

    }
    const priceToEarnings = (price, costOfCapital) => {
        return price / costOfCapital
    }
    const earningsToYield = (earnings, price) => {
        return earnings / price
    }
    const returnOnCapital = (earnings, assets) => {
        return earnings / assets
    }
    
    const getPrice = (assets) => {
        return assets.map(asset => asset.price)
    }

    const priceToBook = (price, book) => {
        return price / book
    }
    const earningsPerShare = (netIncome, prefDiv, edcso ) => {
        // EDCSO stands for end of year common shares outstanding
        const eps = (netIncome - prefDiv) / edcso
        return eps
    }
    // Volume Drives Price Upwards 
    const onBalanceVolume = (assets) => {
        assets.forEach(asset => {
            
            if (asset.Close > asset.Open) {
                obv += parseInt(asset.Volume)
            }
            console.log(obv)
            if (asset.Close < asset.Open) {
                obv -= parseInt(asset.Volume)
            }
            if (asset.Close === asset.Open) {
                obv = parseInt(asset.Volume)
            }
        })
        console.log(obv);
    }
    if (isFetching){
        return 'Loading...'
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type ="file" {...register('test', { required: true })} onChange={(e)=>{onChange(e)}}></input>
            <button>Submit</button>
           </form>
        </div>
        
    )
}

