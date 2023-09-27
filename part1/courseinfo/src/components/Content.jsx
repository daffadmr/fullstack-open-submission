import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, index) => {
        return <Part key={index} content={part} />;
      })}
    </>
  );
};

export default Content;
