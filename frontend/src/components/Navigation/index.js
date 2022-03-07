import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FiUser } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import UserInfo from './UserInfo'
import './Navigation.css';
import * as sessionActions from '../../store/session';
import logo from '../public/img/logo.png'

// function Navigation({ isLoaded }) {
//   const sessionUser = useSelector(state => state.session.user);


//   let sessionLinks;
//   if (sessionUser) {
//     sessionLinks = (
//       <div className='profileAndAdd'>
//         <div id='userTexts'>
//           <p id='userNameNavBar'>{sessionUser.username}</p>
//           <p id='emailNavBar'>{sessionUser.email}</p>
//         </div>
//         <div id='logOutLogoDiv'>
//           <MdLogout id="navbar-icons" onClick={logout} />
//         </div>
//       </div>
//     );
//   } else {
//     sessionLinks = (
//       <div className='profileAndAdd'>
//         <NavLink to="/login" id='logInNameNavBar'>Log In</NavLink>
//         <NavLink to="/signup" id='signUpNameNavBar'>Sign Up</NavLink>
//       </div>
//     );
//   }

//   return (
//     <div className='navbar-alldiv'>
//       {/* <div className='boxAroundNav divNavigation'> */}
//       <div className='logoBoxDiv'>
//         <NavLink exact to="/" className="navbar-item" id='navbarItemLeft'>
//           <img src={logo} className="nidoLogo" alt="nido logo" />
//         </NavLink>
//       </div>
//       <div className='navbar-nesthome'>
//         <NavLink exact to="/images" className="navbar-item" id='navbarItemLeft'>
//           <GiNestBirds id="navbar-icons" />
//         </NavLink>
//       </div>
//       {sessionUser &&
//           <div className='navbar-add'>
//             <NavLink to={`/images/add`}>
//               <FaPlus id="navbar-icons" />
//             </NavLink>
//           </div>
//         }
//         <div>
//         {isLoaded && sessionLinks}
//         </div>
//       {/* </div> */}
//       <div className='blackSpace' />
//     </div>
//   );
// }

// export default Navigation;

// import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';


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