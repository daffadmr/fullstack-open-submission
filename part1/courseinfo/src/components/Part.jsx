import React from "react";

const Part = ({ content }) => {
  const { name, exercise } = content;
  return (
    <p>
      {name} {exercise}
    </p>
  );
};

export default Part;
