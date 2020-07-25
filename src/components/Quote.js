import React, {useState} from 'react'
import {useGlobalState} from '../config/store'
import {deleteQuote} from '../services/quoteServices'
import {StyledQuote} from './StyledCompnents'

const Quote = ({quote, history}) => {

  const {store, dispatch} = useGlobalState()
    const {quotes} = store
    const [errorMessage, setErrorMessage] = useState(null)

    // If we don't have a post, return null
    if (!quote) return null

  const {name, phone, message} = quote
  // const allowDelete = loggedInUser 
    // Handle the delete button
    function handleDelete(event) {
      event.preventDefault()
      deleteQuote(quote._id).then(() => {
          console.log("deleted quote")
          const updatedQuotes = quotes.filter((quote) => quote._id !== quote._id)
          dispatch({
              type: "setQuotes",
              data: updatedQuotes
          })
          history.push("/dashboard")
      }).catch((error) => {
          const status = error.response ? error.response.status : 500
          console.log("caught error on edit", error)
          if(status === 403)
              setErrorMessage("Oops! It appears we lost your login session. Make sure 3rd party cookies are not blocked by your browser settings.")
          else
              setErrorMessage("Well, this is embarrassing... There was a problem on the server.")
      })
  }

  return (
    <>
   
    <div>
      <p>Name: {name}</p>
      <p>Phone number: {phone}</p>
      <p>Message:{message}</p>
     
       <button onClick={handleDelete}>Delete</button>
      
      </div>
    
    </>
  )
}

export default Quote