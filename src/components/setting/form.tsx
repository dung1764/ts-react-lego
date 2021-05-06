import React from "react";
import "firebase/database";
import { FirebaseDatabaseNode } from "@react-firebase/database";
import { Lesson, LessonsOption } from "../../core/FireBaseDataContext";
import SelectMulti from "./select.multi";

type Props = {
  uid: string;
  category: string;
};

const Form: React.FC<Props> = ({ uid, category }) => {
  const userLessonPath = `users/${uid}/${category}/`;
  const lessonPath = `lessons/${category}/`;

  let options: LessonsOption[] = [];
  let selectedO: LessonsOption[] = [];

  return (
    <FirebaseDatabaseNode path={lessonPath}>
      {(d) => {
        if (!d.value || d.isLoading || d.path !== lessonPath) return <></>;
        options = d.value.map((lesson: Lesson) => {
          return { label: lesson.ch, value: lesson.id.toString() };
        });
        return (
          <FirebaseDatabaseNode path={userLessonPath}>
            {(u) => {
              if (u.isLoading || u.path !== userLessonPath) return <></>;
              selectedO = d.value
                .filter((lesson: Lesson) =>
                  u.value.split(",").includes(lesson.id.toString())
                )
                .map((item: Lesson) => {
                  return { label: item.ch, value: item.id.toString() };
                });
              return <SelectMulti options={options} selectedO={selectedO} />;
            }}
          </FirebaseDatabaseNode>
        );
      }}
    </FirebaseDatabaseNode>
  );
};
export default Form;
