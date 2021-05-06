import { FirebaseDatabaseMutation } from "@react-firebase/database";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LessonsOption, Category } from "../../core/FireBaseDataContext";

type Props = {
  selected: LessonsOption[];
};
const Update: React.FC<Props> = ({ selected }) => {
  let { uid } = useParams<{ uid: string }>();
  let { category } = useParams<{ category: Category }>();
  const [reLoadFireBaseMutaion, setReLoadFireBaseMutaion] = useState(false);

  useEffect(() => {
    setReLoadFireBaseMutaion(false);
    setTimeout(() => {
      setReLoadFireBaseMutaion(true);
    }, 0);
  }, [selected]);

  return (
    <div className="md:inline-block">
      {reLoadFireBaseMutaion && (
        <FirebaseDatabaseMutation type="update" path={`users/${uid}`}>
          {({ runMutation }) => {
            return (
              <button
                className="my-2 py-2 px-5 rounded-xl w-auto bg-red-500 text-white text-center"
                onClick={async () => {
                  await runMutation({
                    [category]: selected
                      .map((item: LessonsOption) => item.value)
                      .sort((a, b) => parseInt(a) - parseInt(b))
                      .join(","),
                  });
                  console.log("done");
                }}
              >
                UPDATE
              </button>
            );
          }}
        </FirebaseDatabaseMutation>
      )}
    </div>
  );
};

export default Update;
