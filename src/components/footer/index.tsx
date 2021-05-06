import Copyright from "./copyright";
import "firebase/auth";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
const Footer: React.FC = () => {
  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn }) => {
        if (!isSignedIn) return <></>;
        return (
          <div className="bottom-0 fixed bg-yellow-300 w-full text-center p-3">
            <Copyright />
          </div>
        );
      }}
    </FirebaseAuthConsumer>
  );
};

export default Footer;
