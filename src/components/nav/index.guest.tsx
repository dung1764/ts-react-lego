import Logo from "./logo";
import firebase from "firebase/app";

const Nav: React.FC = () => {
  return (
    <div className="fixed z-10 bg-yellow-300 w-full p-3 flex justify-between items-center">
      <Logo />
      <button
        className="bg-blue-500 rounded-full text-white p-2"
        onClick={() => {
          const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(googleAuthProvider);
        }}
      >
        Google帳號登入
      </button>
    </div>
  );
};

export default Nav;
