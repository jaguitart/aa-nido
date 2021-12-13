import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const handleDemo = (e) => {
    e.preventDefault();
    setErrors([]);
    const credential = 'demo@user.io'
    const password = 'password'
    dispatch(sessionActions.login({ credential, password }))
  }

  return (
    <div className='contanier'>
      <div className="card">
        <div className="card-image">
          <h2 className="card-heading">
            Nido Sign In
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="card-form">
          <ul className='formErrors'>
            {errors.map((error, idx) => <li className='loginErrors' key={idx}>{error}</li>)}
          </ul>
          <div className="input">
            <input
              className="input-field"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              
            />
            <label className='input-label'>
              Username or Email
            </label>
          </div>
          <div className="input">
            <input
              className="input-field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
            <label className='input-label'>
              Password
            </label>
          </div>
          <button type="submit" className='action-button' id='logInButton'>Log In</button>
          <button type="submit" onClick={handleDemo} className='action-button'>Demo User</button>
        </form>
      </div>
    </div>
  );
}

export default LoginFormPage;