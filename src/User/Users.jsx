import React from 'react'
import Navbar from '../Navbar/Navbar'
import Cardlist from './Card/Cardlist';
import { useSelector } from 'react-redux';
import Userpublic from './Card/Userpublic';


function Users() {
  const accessLevel = useSelector((state) => state.access.privilege);
  const homeselector = document.querySelector("body");
  homeselector.style.cssText = "display: block;";
  const sessionId = sessionStorage.getItem('sessionId');
  if (!sessionId) {
    window.location.href = '/userauthenication';
  } 
  return (
    <div>
      <Navbar />
      { sessionId ? (accessLevel === "admin" ? <Cardlist /> : <Userpublic />) : null}
    </div>
  )
}

export default Users
