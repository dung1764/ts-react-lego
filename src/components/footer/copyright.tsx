import "firebase/database";
import { FirebaseDatabaseNode } from "@react-firebase/database";

const Copyright: React.FC = () => {
  return (
    <FirebaseDatabaseNode path="copyright/">
      {(d) => {
        if (!d.value) return <></>;
        return <>{d.value.en}</>;
      }}
    </FirebaseDatabaseNode>
  );
};
export default Copyright;
