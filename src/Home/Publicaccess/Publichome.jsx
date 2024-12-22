import React from 'react'
import Navbar from '../../Navbar/Navbar'
import "../Admin/Adminhome.css"
import userimg from './userimg.png';
function Publichome() {
  const userName = localStorage.getItem('userName');
  const email = localStorage.getItem('email');
  const user = userName.toUpperCase();
  
  return (
    <div >
    <Navbar />
    <div className='adminhome'>
    <div className='adminhometext'>
      <div className='inline'><h2 className='welcome'>Welcome {user}</h2></div>
      <p className='usermail'>{email}</p>
      <blockquote className="otro-blockquote"> Welcome! This web application is designed to help you securely manage your personal information. You can view and edit your profile details, including your contact information and preferences.
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
//new
export default Publichome;
