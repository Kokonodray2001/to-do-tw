export default function ListComponent({
  allTasks,
  strikes,
  empty,
  emptyButtonClickHandler,
  taskButtonClickHndler,
}) {
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
