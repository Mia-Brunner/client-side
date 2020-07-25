import React from 'react'
import {useGlobalState} from '../config/store'
import {StyledQuote} from './StyledCompnents'

const Quote = ({quote, history}) => {

  const {store, dispatch} = useGlobalState()
    const {quotes} = store
    // If we don't have a post, return null
    if (!quote) return null

  const {name, phone, message} = quote

    // Handle the delete button
    function handleDelete(event) {
        event.preventDefault()
        const updatedQuotes = quotes.filter((quote) => quote._id !== quote._id)
        dispatch({
            type: "setQuotes",
            data: updatedQuotes
        })
        history.push("/")
    }

  return (
    <>
    <StyledQuote>
    <div>
      <p>Name: {name}</p>
      <p>Phone number: {phone}</p>
      <p>Message:{message}</p>
      <div>
      <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
    </StyledQuote>
    </>
  )
}

export default Quote