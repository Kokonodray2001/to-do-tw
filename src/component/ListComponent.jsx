import React, { useState } from "react";
var count = 0;
export default function ListComponent({ allTasks, setAllTask }) {
  const [strikes, setStrikes] = useState(Array(allTasks.length).fill(false));
  const [empty, setEmpty] = useState(true);

  const taskButtonClickHndler = (index) => {
    const newStriks = [...strikes];

    newStriks[index] = !newStriks[index];
    if (newStriks[index] === true) count++;
    else count--;
    if (count === 0) setEmpty(true);
    else setEmpty(false);
    setStrikes(newStriks);
    console.log(count);
  };
  const emptyButtonClickHandler = () => {
    if (count === 0) {
      setAllTask([]);
      return;
    }

    const newAllTask = allTasks.filter(
      (task, index) => strikes[index] === false
    );
    setEmpty(true);
    count = 0;
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
        {allTasks.length === 0 ? (
          <li className='emptyText'>Nothing to do buddy. Sleep!</li>
        ) : (
          <li></li>
        )}
      </ul>
      <button className='emptyButton' onClick={emptyButtonClickHandler}>
        {empty ? "Empty" : "Remove Completed"}
      </button>
    </div>
  );
}
