import React from 'react';
import { useDispatch } from 'react-redux';
import { FaPlus } from "react-icons/fa";
import { GiNestBirds } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';
import * as sessionActions from '../../store/session';
import logo from '../public/img/nido-logo.png'

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };



  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='profileAndAdd'>
        <div id='userTexts'>
          <p id='userNameNavBar'>{sessionUser.username}</p>
          <p id='emailNavBar'>{sessionUser.email}</p>
        </div>
        <div id='logOutLogoDiv'>
          <MdLogout id="addSign" onClick={logout}/>
        </div>
      </div>
    );
  } else {
    sessionLinks = (
      <div className='profileAndAdd'>
        <NavLink to="/login" id='logInNameNavBar'>Log In</NavLink>
        <NavLink to="/signup" id='signUpNameNavBar'>Sign Up</NavLink>
      </div>
    );
  }

  return (
    <div className=''>
      <div className='boxAroundNav divNavigation'>
        <div className='logoBoxDiv'>
          <NavLink exact to="/" className="navbarItem" id='navbarItemLeft'>
            <img src={logo} className="nidoLogo" alt="nido logo" />
          </NavLink>
        </div>
        <div className='navDiv'>
          <NavLink exact to="/images" className="navbarItem" id='navbarItemLeft'>
            <GiNestBirds id="addSign" />
          </NavLink>
          {sessionUser &&
            <NavLink to={`/images/add`}>
              <FaPlus id="addSign" />
            </NavLink>}
          {isLoaded && sessionLinks}
        </div>
      </div>
      <div className='blackSpace'>
      </div>
    </div>
  );
}

export default Navigation;