import React, {useState} from 'react'
import {useGlobalState} from '../config/store'
import {loginUser, setLoggedInUser} from '../services/authServices'
import {SplitTitle, StyledForm, StyledFormWrapper, StyledInput, StyledButton} from '../styled/StyledSignIn'



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
            history.push("/dashboard")

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
        

        <StyledFormWrapper>
            <SplitTitle>
            Admin Sign In
        </SplitTitle>
        <StyledForm onSubmit={handleSubmit}>
            {errorMessage && <p style={errorStyles}>{errorMessage}</p>}
            <div>
                <label>Username</label>
                <StyledInput required type="text" name="username" placeholder="Enter a username" onChange={handleChange}></StyledInput>
            </div>
            <div >
                <label >Password</label>
                <StyledInput required type="password" name="password" placeholder="Enter a password" onChange={handleChange}></StyledInput>
            </div>
            <StyledButton type="submit" value="Login">Sign In</StyledButton>
        </StyledForm>
        </StyledFormWrapper>
    )
}
export default SignIn