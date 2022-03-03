import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import FlockPage from "./components/FLockPage";
import BirdPage from "./components/BirdPage";
import AddBird from "./components/AddBird";
import EditBird from "./components/EditBird";
import HomePage from "./components/HomePage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { getAllImages } from "./store/imagesReducer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getAllImages());
  }, [dispatch]);

  const birdImages = Object.values(useSelector(state => state.imagesReducer)).reverse()

  return (
    <>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/images">
            <FlockPage birdImages={birdImages} />
          </Route>
          <Route path="/images/add">
            <AddBird />
          </Route>
          <Route path="/images/:imageId/edit">
            <EditBird />
          </Route>
          <Route path="/images/:imageId">
            <BirdPage birdImages={birdImages} />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;