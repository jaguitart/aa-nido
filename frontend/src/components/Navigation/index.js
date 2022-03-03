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
          <MdLogout id="navbar-icons" onClick={logout} />
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
    <div className='navbar-alldiv'>
      {/* <div className='boxAroundNav divNavigation'> */}
      <div className='logoBoxDiv'>
        <NavLink exact to="/" className="navbar-item" id='navbarItemLeft'>
          <img src={logo} className="nidoLogo" alt="nido logo" />
        </NavLink>
      </div>
      <div className='navbar-nesthome'>
        <NavLink exact to="/images" className="navbar-item" id='navbarItemLeft'>
          <GiNestBirds id="navbar-icons" />
        </NavLink>
      </div>
      {sessionUser &&
          <div className='navbar-add'>
            <NavLink to={`/images/add`}>
              <FaPlus id="navbar-icons" />
            </NavLink>
          </div>
        }
        <div>
        {isLoaded && sessionLinks}
        </div>
      {/* </div> */}
      <div className='blackSpace' />
    </div>
  );
}

export default Navigation;