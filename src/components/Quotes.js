import React from 'react'
import Quote from './Quote'
import {useGlobalState} from '../config/store'



const Quotes = () => {
  const {store} = useGlobalState()
  const {quotes} = store
  return (
    <div>
      <p>Hi Paul, Welcome to your Dashboard</p>
      <p>Messages</p> 
      
    {quotes.map(quote => (<Quote key={quote._id} quote={quote} /> ))}
    </div>
  )
}

export default Quotes