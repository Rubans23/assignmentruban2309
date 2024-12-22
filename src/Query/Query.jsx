import React from 'react'
import "./Query.css"
import UserQuery from './UserQuery';
import Navbar from '../Navbar/Navbar';
function Query() {
    const homeselector = document.querySelector("body"); 
     homeselector.style.cssText = "display: block;";
  return (
    <div>
        <Navbar />
     <UserQuery />
    </div>
  )
}
//new comment
export default Query
