import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import NavGuest from "./nav/index.guest";
import FooterGuest from "./footer/index.guest";
import { FirebaseContext } from "../core/FireBaseDataContext";
import firebase from "firebase/app";
import "firebase/database";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import { config } from "../config";

const DefaultLayout: React.FC = ({ children }) => {
  const { isSignedIn } = React.useContext(FirebaseContext);
  if (isSignedIn) {
    return (
      <FirebaseDatabaseProvider firebase={firebase} {...config}>
        <div className="bg-red-200 h-screen relative overflow-auto">
          <Nav />
          <div className="my-20 p-5">{children}</div>
          <Footer />
        </div>
      </FirebaseDatabaseProvider>
    );
  } else {
    return (
      <FirebaseDatabaseProvider firebase={firebase} {...config}>
        <div className="bg-red-200 h-screen relative overflow-auto">
          <NavGuest />
          <div className="my-20 p-5">{children}</div>
          <FooterGuest></FooterGuest>
        </div>
      </FirebaseDatabaseProvider>
    );
  }
};

export default DefaultLayout;
