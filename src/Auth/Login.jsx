import React, { useState, useEffect } from 'react';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { setTrue } from '../Store/authReducer';
import { setCurrentUser } from '../Store/currentUserReducer';
import { setPublic } from '../Store/accessReducer';
import  {setAdmin}  from '../Store/accessReducer';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Login() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userName = localStorage.getItem('userName');
    const email = localStorage.getItem('email');
    const loggedIn = localStorage.getItem('logged_in');
    const sessionToken = localStorage.getItem('sessionToken');

    if (userName && email && loggedIn && sessionToken) {
      sessionStorage.setItem('sessionId', sessionToken);
      const user = cards.find(card => card.email === email);

      if (user) {
        dispatch(setCurrentUser(user));

        if (user.access === 'admin') {
          dispatch(setAdmin());
        } else {
          dispatch(setPublic());
        }

        navigate('/home');
      }
    }
  }, [dispatch, cards, navigate]);

  function handlesubmitlogin(e) {
    
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = cards.find(card => card.email === email && card.password.toString() === password);

    if (user) {
      const sessionId = uuidv4();
      sessionStorage.setItem('sessionId', sessionId);
      localStorage.setItem('userName', user.name);
      localStorage.setItem('email', user.email);
      localStorage.setItem('logged_in', 'true');
      localStorage.setItem('sessionToken', sessionId);

      dispatch(setCurrentUser(user));

      if (user.access === 'admin') {
        dispatch(setAdmin());
      } else {
        dispatch(setPublic());
      }

      navigate('/home');
    } else {
      setErrorMessage("Wrong email or password");
    }
  }

  return (
    <div className="loginform">
      <h1 className='h1'>Login</h1>
      <br />
      <form className="logininnerform" onSubmit={handlesubmitlogin}>
        <label className="loginlabel" htmlFor="email">
          Email:<span className="mandatory"> *</span>
          <br />
          <input placeholder="example@gmail.com" id="email" className="logininput" type="email" name="email" required autoComplete="email" />
        </label>
        <br />
        <label className="loginlabel" htmlFor="password">
          Password:<span className="mandatory"> *</span>
          <br />
          <input className="logininput" id="password" type="password" name="password" required autoComplete="current-password" />
        </label>
        <br />
        <input className="loginsubmit btn btn-light rounded-pill" type="submit" value="Submit" />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <center className="infopara"><p onClick={() => dispatch(setTrue())}>Don't have an account?</p></center>
      </form>
    </div>
  );
}

export default Login;
