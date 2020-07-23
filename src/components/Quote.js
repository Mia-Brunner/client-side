import React from 'react'
import {useGlobalState} from '../config/store'

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
    <div>
      <p>{name}</p>
      <p>{phone}</p>
      <p>{message}</p>
      <div>
      <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Quote