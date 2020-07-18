import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignIn from './components/SignIn';
import NotFound from './components/NotFound';
import Home from './components/Home'


const App = () => {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" component={Home} />
    <Route exact path="/auth/login" component={SignIn} />
    <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  )
}

export default App
