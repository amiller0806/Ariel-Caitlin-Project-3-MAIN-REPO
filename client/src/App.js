import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MyFaves from './components/MyFaves';
import SearchProduct from "./components/SearchProduct";
import About from './components/About'

import Homepage from './components/Homepage'



import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import {setContext} from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: { ...headers, authorization: token ? `Bearer ${token}` : "" },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
        <Navigation/>

        <Routes>
            <Route path='/' element={<Homepage />} ></Route>
            <Route path='/myfaves' element={<MyFaves />}>

            </Route>

            <Route path='/searchProduct' element={<SearchProduct />}>

            </Route>

            <Route path='/about' element={<About />}>

            </Route>
        </Routes>
        </>
      </Router>
      
      
    <div className='footer'><Footer  /></div>
    </ApolloProvider>

  );
}

export default App;
