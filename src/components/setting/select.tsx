import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "firebase/database";
import { FirebaseDatabaseNode } from "@react-firebase/database";

type User = {
  boost: string;
  esm: string;
  ev3: string;
  name: string;
  spm: string;
};

const Select: React.FC = () => {
  let history = useHistory();
  const usersPath = "users/";
  const [selected, setSelected] = React.useState("");
  const [categorySelected, setCategorySelected] = React.useState("");

  const handlChange = (uid: string) => {
    setSelected(uid);
    if (uid) {
      history.push(`/setting/${uid}`);
    }
  };

  const handlCategoryChange = (category: string) => {
    setCategorySelected(category);
    if (category) {
      history.push(`/setting/${selected}/${category}`);
    }
  };

  useEffect(() => {
    setCategorySelected("");
  }, [selected]);

  return (
    <>
      <div className="relative pr-1 inline-block w-1/2 md:w-auto">
        <select
          defaultValue={selected}
          onChange={(e) => handlChange(e.target.value)}
          className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
        >
          <option value="">User</option>
          <FirebaseDatabaseNode path={usersPath}>
            {(d) => {
              if (!d.value) return <></>;
              const uids = Object.keys(d.value);
              return (
                <>
                  {uids.map((uid: string, i) => {
                    const u: User = d.value[uid];
                    return (
                      <option key={i} value={uid}>
                        {u.name}
                      </option>
                    );
                  })}
                </>
              );
            }}
          </FirebaseDatabaseNode>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
          </svg>
        </div>
      </div>
      <div className="relative inline-block w-1/2 md:w-auto">
        <select
          // defaultValue={categorySelected}
          value={categorySelected}
          onChange={(e) => handlCategoryChange(e.target.value)}
          className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
        >
          <option value="">Category</option>
          <option value="esm">ESM</option>
          <option value="boost">BOOST</option>
          <option value="spm">SPM</option>
          <option value="ev3">EV3</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Select;
