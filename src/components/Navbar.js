import React from 'react'
import { Link } from 'react-router-dom'
import {logoutUser} from '../services/authServices'
import {useGlobalState} from '../config/store'
import {StyledNav, NavItems, NavBrand, NavItem, NavItemButton} from '../styled/StyledNav.js'

const Navbar = () => {
// Logout user
function handleLogout() {
  logoutUser().then((response) => {
      console.log("Got back response on logout", response.status)
  }).catch ((error) => {
      console.log("The server may be down - caught an exception on logout:", error)
  })
  // Even if we catch an error, logout the user locally
  dispatch({
      type: "setLoggedInUser",
      data: null
  })
}

const {store, dispatch} = useGlobalState()
const {loggedInUser} = store

return (
    <StyledNav data-cy="navbar">
        <NavBrand>
            <NavItem to="/">PID Electrical Services</NavItem>
        </NavBrand>
        {loggedInUser 
        ? (<NavItems>
            <NavItem to="/dashboard" data-cy="login">{loggedInUser}'s Dashboard</NavItem>
            <NavItemButton data-cy="logout" onClick={handleLogout} to="/">Logout</NavItemButton>
            </NavItems>
            )
        : (
            <NavItems>
            <NavItemButton to="/services">Services</NavItemButton>
            <NavItemButton to="/quotes/new"data-cy="addQuote">Request Call</NavItemButton>
            </NavItems>)
        }
        
    </StyledNav>
)
 }

export default Navbar