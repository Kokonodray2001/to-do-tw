import React from "react";

export default function ListComponent({ allTasks }) {
  return (
    <div>
      <ol>
        {allTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </div>
  );
}
