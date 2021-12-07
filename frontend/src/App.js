import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import FlockPage from "./components/FLockPage";
import BirdPage from "./components/BirdPage";
import AddBird from "./components/AddBird";
import EditBird from "./components/EditBird";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <NavLink to='/images'>
              <p>Birds</p>
            </NavLink>
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/images">
            <FlockPage />
          </Route>
          <Route path="/images/add">
            <AddBird />
          </Route>
          <Route path="/images/:imageId/edit">
            <EditBird />
          </Route>
          <Route path="/images/:imageId">
            <BirdPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;