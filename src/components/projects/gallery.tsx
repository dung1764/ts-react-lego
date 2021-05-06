import React from "react";
import { useParams } from "react-router-dom";
import "firebase/database";
import { FirebaseDatabaseNode } from "@react-firebase/database";
import DownloadButton from "./download.button";

const Gallery: React.FC = () => {
  let { project } = useParams<{ project: string }>();
  let { id } = useParams<{ id: string }>();
  const lessonPath = `lessons/${project}/${id}/`;

  return (
    <FirebaseDatabaseNode path={lessonPath}>
      {(d) => {
        if (!d.value) return <></>;
        return (
          <div className="text-center">
            <div className="flex justify-center items-center">
              {d.value.pdf && (
                <DownloadButton href={d.value.pdf} label={"pdf"} />
              )}
              {d.value.program && (
                <DownloadButton href={d.value.program} label={"program"} />
              )}
            </div>
            {[...Array(d.value.total)].map((v, i) => {
              return (
                <img
                  key={i}
                  src={`https://images.tungqian.com/${d.value.path}p${
                    i + 1
                  }.jpg`}
                  alt={d.value.ch}
                  className="border-solid border-black border inline my-1"
                />
              );
            })}
          </div>
        );
      }}
    </FirebaseDatabaseNode>
  );
};

export default Gallery;
