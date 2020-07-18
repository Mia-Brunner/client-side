import React,{useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
    <Switch>
    {/* <Route path="/" component={Home} /> */}
    <Route exact path="/quotes" component={Quotes} />
    <Route exact path="/quotes/:id" render={(props) => <Quotes {...props} quoteData={quotes}/> } />
    <Route exact path="/auth/login" component={SignIn} />
    <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  )
}

export default App
