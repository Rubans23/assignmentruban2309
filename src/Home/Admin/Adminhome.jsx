import React from 'react'
import Navbar from '../../Navbar/Navbar'
import "./Adminhome.css"
import userimg from './userimg.png';
import adminimg from './admin.png';
function Adminhome() {
  const userName = localStorage.getItem('userName');
  const email = localStorage.getItem('email');
  const user = userName.toUpperCase();
  //new
  return (
    <div >
    <Navbar />
    <div className='adminhome'>
    <div className='adminhometext'>
      <div className='inline'><h2 className='welcome'>Welcome {user}<img className='shield' src={adminimg} alt="adminimage" /><span>Admin</span></h2></div>
      <p className='usermail'>{email}</p>
      <blockquote className="otro-blockquote"> Hello Admin, this web application provides a platform for you to securely access, view, and modify your personal information and that of other users. You can utilize this tool to manage user profiles, update contact details, and perform other administrative tasks.
  <span>Ruban S</span>
</blockquote>
    </div>
    <div className='adminhomeimg'>
      <center><img className='homeimg' src={userimg} alt="user_img" /></center>
      
    </div>
      </div>
  </div>
  )
}

export default Adminhome;
