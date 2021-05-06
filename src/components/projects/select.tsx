import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "firebase/database";
import { FirebaseDatabaseNode } from "@react-firebase/database";
import { FirebaseContext, Lesson } from "../../core/FireBaseDataContext";

const Select: React.FC = () => {
  let { project } = useParams<{ project: string }>();
  let history = useHistory();
  const { user } = React.useContext(FirebaseContext);
  const lessonPath = `lessons/${project}/`;

  const handlChange = (id: string) => {
    setSelected(id);
    if (id) {
      history.push(`/projects/${project}/${id}`);
    }
  };

  const [selected, setSelected] = React.useState("");
  const [userPath, setUserPath] = React.useState(
    `users/${user?.uid}/${project}/`
  );

  useEffect(() => {
    setUserPath(`users/${user?.uid}/${project}/`);
    setSelected("");
  }, [user?.uid, project]);

  return (
    <FirebaseDatabaseNode path={userPath}>
      {(u) => {
        if (!u.value || u.isLoading || u.path !== userPath) return <></>;
        return (
          <div className="relative">
            <select
              defaultValue={selected}
              onChange={(e) => handlChange(e.target.value)}
              className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
            >
              <option value="">Select</option>
              <FirebaseDatabaseNode path={lessonPath}>
                {(d) => {
                  if (!d.value) return <></>;
                  return d.value
                    .filter((lesson: Lesson) =>
                      u.value.split(",").includes(lesson.id.toString())
                    )
                    .map((lesson: Lesson) => {
                      return (
                        <option key={lesson.id} value={lesson.id}>
                          {lesson.ch}
                        </option>
                      );
                    });
                }}
              </FirebaseDatabaseNode>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
              </svg>
            </div>
          </div>
        );
      }}
    </FirebaseDatabaseNode>
  );
};

export default Select;
