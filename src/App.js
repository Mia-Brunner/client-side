import React,{Fragment, useReducer, useEffect} from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import SignIn from './components/SignIn';

import quoteData from './data/quote_data'
import Quotes from './components/Quotes';
import Quote from './components/Quote';
import NewQuote from './components/NewQuote';

import NotFound from './components/NotFound';
import Home from './components/Home';



import stateReducer from './config/stateReducer'


const App = () => {

  // initial state for state reducer
  // use reducer hook
  const initialState = {
    blogPosts: [],
    loggedInUser: null,
  }

  const [store,dispatch] = useReducer(stateReducer,initialState)
  const {Quotes, loggedInUser} = store

  useEffect(() => {
    dispatch({
      type: "setQuotes",
      data: QuoteData
    })
},[])

   // Returns a single quote based on the id provided
   function getQuoteFromId(id) {
    const quote =  Quotes.find((quote) =>  quote._id === parseInt(id))
    return quote
  }

  // Gets the next available id for a new quote
  function getNextId(){
    const ids = quotes.map((quote) => quote._id)
    return ids.sort()[ids.length-1] + 1
  }

   // Add a quote to quotes
   function addQuote(quote) {
    dispatch({
      type: "setQuotes",
      data: [...Quotes, quote]
    })
  }

   // Update a quote to quotes list
   function updateQuote(updatedQuote) {
    const otherQuotes = Quotes.filter((quote) => quote._id !== updatedQuote._id)
    dispatch({
      type: "setQuotes",
      data: [...otherQuotes, updatedQuote]
    })
  }

  // Delete a quote that matches id
  function deleteQuote(id) {
    const updatedQuotes = quotes.filter((quote) => quote._id !== parseInt(id))
    dispatch({
      type: "setQuotes",
      data: updatedQuotes
    })
  }

  // login user 
  function loginUser(user) {
    setLoggedInUser(user.username) 
  }

  // Logout user
  function logoutUser() {
    setLoggedInUser(null) 
  }

  

  return (
    <Page>
      <StateContext.Provider value={{store,dispatch}}>
        <BrowserRouter>
          <Navbar loggedInUser={loggedInUser} logoutUser={logoutUser}/>
          {error ?  (<NotFound /> )
          : (
            <Fragment>
              <Route path="/" component={Home} />
              <Route exact path="/quotes" component={quotes} />
              <Route exact path="/quotes/:id" render={(props) => <Quote {...props} quote={getQuoteFromId(props.match.params.id)} showControls deleteQuote={deleteQuote}/> } />
              <Route exact path="/login" component={SignIn} />
            </Fragment>
          )
              }
        </BrowserRouter>
      </StateContext.Provider>
    </Page>
  )
}

export default App
