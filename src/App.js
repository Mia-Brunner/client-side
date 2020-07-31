
import React,{Fragment, useReducer, useEffect, useState} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar'
import SignIn from './components/SignIn';

import quoteData from './data/quote_data';
import Quotes from './components/Quotes';
import Quote from './components/Quote';
import NewQuote from './components/NewQuote';

import NotFound from './components/NotFound';
import Home from './components/Home';
import Services from './components/Services';

import stateReducer from './config/stateReducer';
import {StateContext} from './config/store';

import {getQuoteFromId, getAllQuotes} from './services/quoteServices';
import PrivateRoute from './components/PrivateRoute'
import { GlobalStyle } from '../src/styled/Global'
import SectionTitleWithText from './components/section-title/SectionTitleWithText.js';
import BannerOneSingle from './components/banner/BannerOneSingle.js';
import TextGridOneSingle from './components/text-grid/TextGridOneSingle';
import TestimonialOneSingle from './components/testimonial/TestimonialOneSingle';

const App = () => {
  
  // initial state for state reducer
  // use reducer hook
  const initialState = {
    quotes: [],
    loggedInUser: null,
  }

  function fetchQuotes() {
    getAllQuotes().then((quoteData) => {
      dispatch({
        type: "setQuotes",
        data: quoteData
      })
    }).catch((error) => {
      dispatch({
        type: "setError",
        data: true
      })
      console.log("An error occurred fetching quotes from the server:", error) 
    })
}

useEffect(() => {
    fetchQuotes()
    
},[])

  const [store,dispatch] = useReducer(stateReducer,initialState)
  const {quotes, error} = store

  useEffect(() => {
    dispatch({
      type: "setQuotes",
      data: quoteData
    })
},[])

  return (
      <StateContext.Provider value={{store,dispatch}}>
        <BrowserRouter>
        <GlobalStyle />
          <Navbar />
          {/* {error ?  (<NotFound /> )
          : ( */}
            
            <Fragment>
                <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/quotes/new" component={NewQuote} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/login" component={SignIn} />
              {/* <Route exact path="/sectionTitleWithText" component={SectionTitleWithText} />
              <Route exact path="/BannerOneSingle" component={BannerOneSingle} /> */}
              <PrivateRoute exact path="/dashboard" component={Quotes} />
              <PrivateRoute exact path="/quotes/:id" render={(props) => <Quote {...props} quote={getQuoteFromId(quotes,props.match.params.id)} showControls /> } />
              </Switch>
            </Fragment>
        </BrowserRouter>
      </StateContext.Provider>
  )
}


export default App