import React, {useState} from 'react'
import {useGlobalState} from '../config/store'


// const { default: Quotes } = require("./Quotes")

const Quote = ({history}) => {
    const initialFormState = {
        name: "",
        phone: "",
        message: ""
    } 
    const [newQuote,setQuote] = useState(initialFormState)
    const [errorMessage, setErrorMessage] = useState(null)
    const {dispatch} = useGlobalState()

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setQuote({
            ...newQuote,
            [name]: value,
            [phone]: value,
            [message]: value,
        })
    }

    // Axios 
    function handleSubmit(event) {
        event.preventDefault()
        // Attempt login on server
        submitQuote(newQuote).then(() => {
            setQuote(newQuote)
            dispatch({
                type: "newQuote",
                data: newQuote.name,
                data: newQuote.phone,
                data: newQuote.message
            })
            history.push("/")

        }).catch((error) => {
            if (error.response && error.response.status === 401)
                setErrorMessage("Please ensure all details have been filled in")
            else   
                setErrorMessage("There may be a problem with the server. Please try again after a few moments.")
        })		
    }

    const errorStyles = {
        color: "red"
    }

    return (
        <form onSubmit={handleSubmit}>
            {errorMessage && <p style={errorStyles}>{errorMessage}</p>}
            <div>
                <label>Name</label>
                <input required type="text" name="name" placeholder="Name" onChange={handleChange}></input>
            </div>
            <div >
                <label >Phone</label>
                <input required type="text" name="phone" placeholder="Phone" onChange={handleChange}></input>
            </div>
            <div >
                <label >Message</label>
                <input required type="text" name="message" placeholder="Message" onChange={handleChange}></input>
            </div>
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default Quote
