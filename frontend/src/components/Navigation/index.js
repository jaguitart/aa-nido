import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import UserInfo from './UserInfo'
import logo from '../public/img/logo.png'
import { MdLogout } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import './Navigation.css';


const Navigation = ({ isLoaded }) => {
  const dispatch = useDispatch();
  const [profileInfoOpen, setProfileInfoOpen] = useState(false)
  const user = useSelector(state => state.session.user ? state.session.user : false)
  const sessionUser = useSelector(state => state.session.user);
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  if (!user) {
    return <Redirect to='/' />;
  }


  return (
    <nav>
      <div className='navBarDiv'>
        <div className='navLogo'>
          <NavLink to='/' exact={true} className='active'>
            <img id='logo' src={logo} alt='logo' />
          </NavLink>
        </div>
        {user?.id && (
          <div className='navBarOptions'>
            <div className='navBarAccionOptions'>

              <NavLink to='/' exact={true} className='active'>
                <div id='petposts' className='optionclass'>
                  <span>Home</span>
                </div>
              </NavLink>

              {user?.account_type?.id !== 1 && (
                <NavLink to='/images/add' exact={true} className='active'>
                  <div id='newpost' className='optionclass'>
                    <span>Add</span>
                  </div>
                </NavLink>
              )}
            </div>

            <div className='navBarUserOptions'>
              {user?.id && (
                <div id='logout' className='optionclass'>
                  <MdLogout className='icon' onClick={logout} />
                </div>
              )}

              <div id='home' className='optionclass'>
                <FiUser className='icon' onClick={() => setProfileInfoOpen(!profileInfoOpen)} />
              </div>
            </div>
            {profileInfoOpen && (
              <div id='userOptionsDiv' className='dropdown-content'
                onMouseLeave={() => setProfileInfoOpen(false)}
                onClick={() => setProfileInfoOpen(false)}
              >
                <UserInfo sessionUser={sessionUser}/>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;