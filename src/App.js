import React,{Fragment, useState, useEffect} from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import SignIn from './components/SignIn';
import NotFound from './components/NotFound';
// import Home from './components/Home';
import Quotes from './components/Quotes';
import Quote from './components/Quote';
import quoteData from './data/quote_data'


const App = () => {

  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    setQuotes(quoteData)
  },[])
  

  return (
    <BrowserRouter>
    <Fragment>
    {/* <Route path="/" component={Home} /> */}
    <Route exact path="/quotes" component={Quotes} />
    <Route exact path="/quotes/:id" render={(props) => <Quotes {...props} quoteData={quotes}/> } />
    <Route exact path="/auth/login" component={SignIn} />
    <Route component={NotFound} />
    </Fragment>
    </BrowserRouter>
  )
}

export default App
