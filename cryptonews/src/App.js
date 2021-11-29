import logo from './logo.svg';
import './App.css'
import { Switch, Route , Link } from "react-router-dom"

import { Layout, Typography, Space } from 'antd';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {NavBar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails , CryptoNews , Stocks,StockNews, NASDAQ, MostPopular, NYSE, LSE} from './components'

import {useAuthState } from "react-firebase-hooks/auth"
import {useCollectionData} from "react-firebase-hooks/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Login from './components/Login';



const firebaseConfig = {
  apiKey: "AIzaSyAyIP1D9r8RQgSo6ypflkxp78SCqpFeXg0",
  authDomain: "final-year-project-f2fb9.firebaseapp.com",
  projectId: "final-year-project-f2fb9",
  storageBucket: "final-year-project-f2fb9.appspot.com",
  messagingSenderId: "1035660284773",
  appId: "1:1035660284773:web:176af23ca11e14653f878c",
  measurementId: "G-16NEZZEG6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//const auth = firebase.auth();
//const firestore = firebase.firestore();
//const [input, label] = generateData();

function App() {
  /*const [user] = useAuthState(auth);

  console.log(user)
  
  if (!user){
    <Login></Login>
  }
  */
  return (
    <div className="app">
      <div className = "navbar">
          <NavBar></NavBar>
      </div>
      <div className = "main">
          <Layout>
            <div className = "routes">
              <Switch>
                  <Route exact path = "/">
                    <Homepage/>
                  </Route>
                  <Route exact path = "/NASDAQ">
                    <NASDAQ/>
                  </Route>
                  <Route exact path = "/NYSE">
                    <NYSE/>
                  </Route>
                  <Route exact path = "/LSE">
                    <LSE/>
                  </Route>
                  <Route exact path = "/mostpopular">
                    <MostPopular/>
                  </Route>
                  <Route exact path = "/stocks">
                    <Stocks/>
                  </Route>
                  <Route exact path = "/exchanges">
                    <Exchanges/>
                  </Route>
                  <Route exact path = "/cryptocurrencies">
                    <Cryptocurrencies/>
                  </Route>
                  <Route exact path = '/crypto/:coinId'>
                    <CryptoDetails/>
                  </Route>
                  <Route exact path = "/cryptonews">
                    <CryptoNews/>
                  </Route>
                  <Route exact path = "/stocknews">
                    <CryptoNews/>
                  </Route>
              </Switch>
            </div>
          </Layout>

      <div className = "footer" >
          <Typography.Title level = {5} style = {{color : 'white', textAlign: "center"}}>
           CrypToYou <br/>
           Created By Aaron Murphy <br/>
           All Rights Reserved
          </Typography.Title>
          <Space>
            <Link to = "/">Home</Link>
            <Link to = "/exchange">Exchange</Link>
            <Link to = "/news">News</Link>
            <Link to = "/cryptocurrencies">CryptoCurrencies</Link>

          </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
