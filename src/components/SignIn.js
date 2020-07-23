import React, {useState} from 'react'
import {useGlobalState} from '../config/store'
import {loginUser, setLoggedInUser} from '../services/authServices'

const SignIn = ({history}) => {
    const initialFormState = {
        username: "",
        password: ""
    } 
    const [userDetails,setUserDetails] = useState(initialFormState)
    const [errorMessage, setErrorMessage] = useState(null)
    const {dispatch} = useGlobalState()

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    // Axios 
    function handleSubmit(event) {
        event.preventDefault()
        // Attempt login on server
        loginUser(userDetails).then(() => {
            setLoggedInUser(userDetails.username)
            dispatch({
                type: "setLoggedInUser",
                data: userDetails.username
            })
            history.push("/")

        }).catch((error) => {
            if (error.response && error.response.status === 401)
                setErrorMessage("Authentication failed. Please check your username and password.")
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
                <label>Username</label>
                <input required type="text" name="username" placeholder="Enter a username" onChange={handleChange}></input>
            </div>
            <div >
                <label >Password</label>
                <input required type="password" name="password" placeholder="Enter a password" onChange={handleChange}></input>
            </div>
            <input type="submit" value="Login"></input>
        </form>
    )
}
export default SignIn