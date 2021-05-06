import React from "react";
import { useParams } from "react-router-dom";
import Select from "./select";
import Form from "./form";
import { Category } from "../../core/FireBaseDataContext";

const Setting: React.FC = () => {
  let { uid } = useParams<{ uid: string }>();
  let { category } = useParams<{ category: Category }>();

  return (
    <>
      <Select />
      {category && uid && <Form uid={uid} category={category} />}
    </>
  );
};
export default Setting;
