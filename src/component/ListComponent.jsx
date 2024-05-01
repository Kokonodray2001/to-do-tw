import React, { useState } from "react";

export default function ListComponent({ allTasks, setAllTask }) {
  const [strikes, setStrikes] = useState(Array(allTasks.length).fill(false));
  const taskButtonClickHndler = (index) => {
    const newStriks = [...strikes];
    newStriks[index] = !newStriks[index];
    setStrikes(newStriks);
  };
  const emptyButtonClickHandler = () => {
    const newAllTask = allTasks.filter(
      (task, index) => strikes[index] === false
    );
    setAllTask(newAllTask);
    setStrikes(Array(allTasks.length).fill(false));
  };
  return (
    <div>
      <ul className='taskList'>
        {allTasks.map((task, index) => (
          <li key={index}>
            <button
              className='taskButton'
              onClick={() => taskButtonClickHndler(index)}
              style={{
                textDecoration: strikes[index] ? "line-through" : "none",
              }}
            >
              {task}
            </button>
          </li>
        ))}
      </ul>
      <div className='emptyButtonConatiner'>
        <button className='emptyButton' onClick={emptyButtonClickHandler}>
          Remove Completed
        </button>
      </div>
    </div>
  );
}
