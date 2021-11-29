import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '906ab71e6amsh5ee0a63d7fa3c16p15ceb9jsn6c720da7ca33'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({
    url , headers : cryptoApiHeaders
})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        getCryptos: builder.query({
            query : (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query : (coinId) => 
            createRequest(`/coin/${coinId}`)
        })
    })
})

export const { 
    useGetCryptosQuery,
} = cryptoApi


export const { 
    useGetCryptoDetailsQuery,
    
} = cryptoApi



// This creates a hook which allows you to make API requests 