import MenuItem from "./menu.item";
import "firebase/database";
import { FirebaseDatabaseNode } from "@react-firebase/database";

type MenuItemType = {
  ch: string;
  en: string;
  icon: string;
  route: string;
};

const Menu: React.FC = () => {
  return (
    <FirebaseDatabaseNode path="topMenu/">
      {(d) => {
        if (!d.value) return <></>;
        return d.value.map((item: MenuItemType) => (
          <MenuItem key={item.en} label={item.en} route={item.route} />
        ));
      }}
    </FirebaseDatabaseNode>
  );
};
export default Menu;
