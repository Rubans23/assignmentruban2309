import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Signup.css';
import { setFalse } from '../Store/authReducer';
import { addCard } from '../Store/cardsReducer'; // Import the addCard action

function Signup() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  const inputStyle = {
    '::placeholder': {
      fontFamily: 'Courier New',
      color: 'gray',
    },
  };

  const handlesubmitsignup = (e) => {
    e.preventDefault();

    const newCard = {
      id: Date.now(), // Generate a unique ID based on the current timestamp
      name: name,
      access: 'public', // Set default access, you can change as per requirement
      email: e.target.email.value,
      gender: gender,
      mobile: e.target.mobile_number.value,
      location: location,
      bankno: e.target.accnum.value,
      password: e.target.password.value,
    };

    dispatch(addCard(newCard)); // Dispatch the action to add the new card

    console.log(
      "Signup email is " + e.target.email.value,
      "Name is " + name,
      "Location is " + location,
      "Mobile number is " + e.target.mobile_number.value,
      "Password is " + e.target.password.value,
    );
    dispatch(setFalse())

  };

  const capitalizeFirstLetter = (value) => {
    if (value.length > 0) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(capitalizeFirstLetter(value));
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(capitalizeFirstLetter(value));
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCurrentPasswordChange = (e) => {
    const value = e.target.value;
    setCurrentPassword(value);
    setPasswordsMatch(password === value);
  };

  return (
    <Fragment>
      <div className="signupfrom">
        <h1 className='h1'>Sign Up</h1>
        <form className="signininnerform" onSubmit={handlesubmitsignup}>
          <label className="signinlabel" htmlFor="email">
            Email:<span className="mandatory"> *</span>
            <br />
            <input placeholder=" Ex:example@gmail.com" required className="signininput" type="email" id="email" autoComplete="email" style={inputStyle} />
          </label>
          <br />
          <label className="signinlabel" htmlFor="name">
            Name:<span className="mandatory"> *</span>
            <br />
            <input required placeholder=" Ex:Ruban" className="signininput" type="text" id="name" value={name} onChange={handleNameChange} autoComplete="name" style={inputStyle} />
          </label>
          <br />
          <label className="signinlabel">
            Gender:<span className="mandatory"> *</span>
            <br />
            <div className="radio-input">
              <label className="radiotext">
                <input required type="radio" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} autoComplete="sex" /> Male
              </label>
              <label className="radiotext">
                <input required type="radio" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} autoComplete="sex" /> Female
              </label>
              <label className="radiotext">
                <input required type="radio" name="gender" value="other" checked={gender === 'other'} onChange={handleGenderChange} autoComplete="sex" /> Other
              </label>
            </div>
          </label>
          <br />
          <label className="signinlabel" min='10' htmlFor="mobile_number">
            Mobile Number:<span className="mandatory"> *</span>
            <br />
            <input minLength={10} required className="signininput" placeholder=" 0123456789" maxLength="10" type="number" id="mobile_number" autoComplete="tel" />
          </label>
          <br />
          <label className="signinlabel" htmlFor="location">
            Location:<span className="mandatory"> *</span>
            <br />
            <input required className="signininput location" placeholder=" Chennai" type="text" id="location" value={location} onChange={handleLocationChange} autoComplete="address-level2" />
          </label>
          <br />
          <label className="signinlabel" htmlFor="accnum">
            Bank Account Number:<span className="mandatory"> *</span>
            <br />
            <input minLength={16} required className="signininput" placeholder=" 16-digit" type="number" id="accnum" autoComplete="cc-number" />
          </label>
          <br />
          <label className="signinlabel" htmlFor="password">
            Password:<span className="mandatory"> *</span>
            <br />
            <input minLength={8} required className="signininput"  type="password" id="password" value={password} onChange={handlePasswordChange} autoComplete="new-password" />
          </label>
          <br />
          <label className="signinlabel current_t" htmlFor="current_password">
            Re-enter Password:<span className="mandatory"> *</span>
            <br />
            <input minLength={8} required className="signininput" type="password" id="current_password" value={currentPassword} onChange={handleCurrentPasswordChange} autoComplete="new-password" />
            {!passwordsMatch && currentPassword && (<p className="caution_text">Passwords do not match</p>)}
          </label>
          <br />
          <input className="formsub btn btn-light rounded-pill signinsubmit" type="submit" value="Submit" disabled={!passwordsMatch} />
          <center>
            <p className="infopara" onClick={() => dispatch(setFalse())}>Already have an account?</p>
          </center>
        </form>
      </div>
    </Fragment>
  );
}
export default Signup;
