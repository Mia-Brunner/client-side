import React from 'react'

const Quote = ({quote}) => {
  // If we don't have a quote, return null.
  if (!quote) return null

  const {name, phone, message} = quote

  return (
    <div>
      <p>{name}</p>
      <p>{phone}</p>
      <p>{message}</p>
    </div>
  )
}

export default Quote