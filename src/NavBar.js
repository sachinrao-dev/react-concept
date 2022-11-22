import React from "react";
import {  NavLink } from 'react-router-dom';


const NavBar = () =>{
    return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/hello">hello</NavLink>


    </div>
    )
}
export default NavBar;