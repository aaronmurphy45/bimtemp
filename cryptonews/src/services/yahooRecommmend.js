import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseUrl = 'https://yfapi.net';

const apikey = {
    "x-api-key" : "sS4iNusyPrPDa9LLGIdA2rNlSBcpAIrafsBVms10" 
};


const createRequest = (url) => ({
    url , headers : apikey
})

console.log("called");
export const yahooRecommmend = createApi({
    reducerPath: 'stockListApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        getStocks: builder.query({
            query : ({symbol}) => createRequest(`/v6/finance/recommendationsbySymbol/${symbol}`)
        }),
        getStockBusinessDetails: builder.query({
            query : ({symbol}) => createRequest(`/ws/insights/v1/finance/insights?symbol=${symbol}`)
        })
    })
})
export const { 
    useGetStockBusinessDetailsQuery,
} = yahooRecommmend
export const { 
    useGetStocksQuery,
} = yahooRecommmend

/*
export const { 
    useGetStocksTimeSeriesQuery,
} = stockListApi
*/


// This creates a hook which allows you to make API requests 