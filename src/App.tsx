import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";
import { config } from "./config";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import DefaultLayout from "./components/defaultLayout";
import Home from "./components/home";
import Setting from "./components/setting";
import { FirebaseContextProvider } from "./core/FireBaseDataContext";
import Projects from "./components/projects";
import "./App.css";

const App: React.FC = () => {
  return (
    <FirebaseAuthProvider firebase={firebase} {...config}>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user }) => {
          if (isSignedIn) {
            return (
              <FirebaseContextProvider isSignedIn={isSignedIn} user={user}>
                <Router>
                  <Switch>
                    <Route path="/projects/:project/:id?">
                      <DefaultLayout>
                        <Projects />
                      </DefaultLayout>
                    </Route>
                    <Route
                      exact
                      path="/"
                      render={() => {
                        return <Redirect to="/home" />;
                      }}
                    />
                    <Route path="/home">
                      <DefaultLayout>
                        <Home />
                      </DefaultLayout>
                    </Route>
                    {user?.uid === config.auid && (
                      <Route path="/setting/:uid?/:category?">
                        <DefaultLayout>
                          <Setting />
                        </DefaultLayout>
                      </Route>
                    )}
                  </Switch>
                </Router>
              </FirebaseContextProvider>
            );
          } else {
            return (
              <FirebaseContextProvider isSignedIn={isSignedIn}>
                <Router>
                  <Redirect to="/home" />
                  <Switch>
                    <Route path="/home">
                      <DefaultLayout>
                        <Home />
                      </DefaultLayout>
                    </Route>
                  </Switch>
                </Router>
              </FirebaseContextProvider>
            );
          }
        }}
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  );
};

export default App;
