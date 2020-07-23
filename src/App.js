import React,{Fragment, useReducer, useEffect} from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import SignIn from './components/SignIn';

import quoteData from './data/quote_data';
import Quotes from './components/Quotes';
import Quote from './components/Quote';
import NewQuote from './components/NewQuote';

import NotFound from './components/NotFound';
import Home from './components/Home';

import stateReducer from './config/stateReducer'
import {StateContext} from './config/store'

import {getQuoteFromId, getAllQuotes} from './services/quoteServices'

const App = () => {

  // initial state for state reducer
  // use reducer hook
  const initialState = {
    quotes: [],
    loggedInUser: null,
  }



  const [store,dispatch] = useReducer(stateReducer,initialState)
  const {Quotes, error} = store

  useEffect(() => {
    dispatch({
      type: "setQuotes",
      data: quoteData
    })
},[])


  return (
      <StateContext.Provider value={{store,dispatch}}>
        <BrowserRouter>
          <Navbar />
          {error ?  (<NotFound /> )
          : (
            <Fragment>
              <Route path="/" component={Home} />
              <Route exact path="/quotes" component={Quotes} />
              <Route exact path="/quotes/:id" render={(props) => <Quote {...props} quote={getQuoteFromId(props.match.params.id)} showControls /> } />
              <Route exact path="/quotes/new" component={NewQuote} />
              <Route exact path="/login" component={SignIn} />
            </Fragment>
          )
          }
        </BrowserRouter>
      </StateContext.Provider>
  )
}

export default App