import backgroundNido from '../HomePage/background.jpg'
import logo from '../public/img/logo-white.png'
import { useSelector } from 'react-redux';
import { Redirect, NavLink } from "react-router-dom";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import './Home.css';

const HomePage = () => {
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser) return (
    <Redirect to="/images" />
  );

  return (
      <div id='allHome'>
        <img src={backgroundNido} className="homeBackground" alt="homeBackground" />
        <div className="container2">
          <div className="card2">
            <div className="card-image2">
              <h2 className="card-heading2">
                Welcome to
                <img src={logo} id="home-logo" alt="homeBackground" />
              </h2>
            </div>
            <div className='action2'>
              <NavLink to={`/login`}>
                <button className='action-button2'>Log In</button>
              </NavLink>
              <NavLink to={`/signup`}>
                <button className='action-button2'>Sign Up</button>
              </NavLink>
            </div>
            <div id='logos'>
              <a href="https://github.com/jaguitart" className='logoAnchor'>
                <FaGithubSquare id='gitHub' />
              </a>
              <a href="https://www.linkedin.com/in/joaquin-guitart-a950ab63/" className='logoAnchor'>
                <FaLinkedin id='linkedIn' />
              </a>
            </div>
          </div>
        </div>
      </div>
  )
};

export default HomePage;