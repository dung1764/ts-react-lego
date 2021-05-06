import Logo from "./logo";
import Menu from "./menu";
import MenuSetting from "./menu.setting";
import React from "react";
import firebase from "firebase/app";
import { FirebaseContext } from "../../core/FireBaseDataContext";
import { config } from "../../config";

const Nav: React.FC = () => {
  const { user } = React.useContext(FirebaseContext);
  return (
    <div className="fixed z-10 bg-yellow-300 w-full p-3 flex justify-between items-center">
      <div className="flex items-center">
        <Logo />
        <Menu />
        {user?.uid === config.auid && <MenuSetting />}
      </div>
      <button
        className="bg-blue-500 rounded-full text-white py-2 px-4"
        onClick={() => {
          firebase.auth().signOut();
        }}
      >
        <span className="hidden md:inline">{user?.displayName}</span> 登出
      </button>
    </div>
  );
};

export default Nav;
