import React from 'react'
import { Link } from 'react-router-dom'
import {useGlobalState} from '../config/store'

const Navbar = () => {
  const divStyles = {
    display: 'flex'
}
const linkStyles = {
    fontSize: '1.2em',
    textDecoration: 'none',
    margin: '.5em'
}
// Logout user
function handleLogout() {
    dispatch({
    type: "setLoggedInUser",
    data: null
    })
}
const {store, dispatch} = useGlobalState()
const {loggedInUser} = store
return (
    <div style={divStyles}>
        {loggedInUser 
        ? (<div>
            <Link style={linkStyles} to="/">{loggedInUser}</Link>
            <Link style={linkStyles} onClick={handleLogout} to="/">Logout</Link>
            </div>)
        : (<div>
            <Link style={linkStyles} to="/">Home</Link>
            <Link style={linkStyles} to="/auth/login">Login</Link>
            </div>)
        }
        <div >
            <Link style={linkStyles} to="/">Home</Link>
            <Link style={linkStyles} to="/quotes/new">Add a quote</Link>
        </div>
    </div>
)
}

export default Navbar