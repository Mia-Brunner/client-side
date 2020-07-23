import React from 'react'
import Quote from './Quote'
import {useGlobalState} from '../config/store'

const Quotes = () => {
  const {store} = useGlobalState()
  const {quotes} = store
  return (
    <div>
      {quotes}
    </div>
  )
}

export default Quotes