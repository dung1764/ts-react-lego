import React from "react";
import Select from "./select";
import Gallery from "./gallery";
import { useParams } from "react-router-dom";
const Projects: React.FC = () => {

  let { id } = useParams<{ id: string }>();

  return (
    <>
      <Select></Select>
      {id && <Gallery></Gallery>}
    </>
  );
};

export default Projects;
