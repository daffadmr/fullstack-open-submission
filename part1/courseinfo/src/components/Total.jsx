import React from "react";

const Total = ({ parts }) => {
  const totalParts = parts
    .map((part) => part.exercise)
    .reduce((acc, cur) => acc + cur, 0);
  return <p>Number of exercises {totalParts}</p>;
};

export default Total;
