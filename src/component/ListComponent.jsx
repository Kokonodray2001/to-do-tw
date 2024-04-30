import React from "react";

export default function ListComponent({ allTasks, emptyButtonClickHandler }) {
  return (
    <div>
      <ol>
        {allTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
      <div className='emptyButtonConatiner'>
        <button className='emptyButton' onClick={emptyButtonClickHandler}>
          empty
        </button>
      </div>
    </div>
  );
}
