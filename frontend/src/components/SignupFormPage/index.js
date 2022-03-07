//borre component de aqui porque react lo pedia
import React, { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import './SignupForm.css';
import * as sessionActions from "../../store/session";
import logo from '../public/img/logo.png'


function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, country, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className=''>
      <nav>
        <div className='navBarDiv'>
          <div className='navLogo'>
            <NavLink to='/' exact={true} className='active'>
              <img id='logo' src={logo} alt='logo' />
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="card">
        <div className="card-image">
          <h2 className="card-heading">
            Nido Sign Up
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="card-form">
          <ul className='formErrors'>
            {errors.map((error, idx) => <li className='loginErrors' key={idx}>{error}</li>)}
          </ul >
          <div className="input">
            <input
              className="input-field"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className='input-label'>Email</label>
          </div>
          <div className="input">
            <input
              className="input-field"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className='input-label'>Username</label>
          </div>
          <div className="input">
            <CountryDropdown
              className="input-field"
              value={country}
              onChange={(e) => setCountry(e)} />
            <label className='input-label'>Country</label>
          </div>
          <div className="input">
            <input
              className="input-field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className='input-label'>Password</label>
          </div>
          <div className="input">
            <input
              className="input-field"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label className='input-label'>Confirm Password</label>
          </div >
          <div className='action'>
            <button type="submit" className='action-button'>Sign Up</button>
          </div>
          <p id="navlink-text">Already a Nido member? <NavLink id='navlink-signup' to={`/login`}>Log in here.</NavLink></p>
        </form>
      </div>
    </div>
  );
}

export default SignupFormPage;