import { useState } from "react";
import Header from "./component/Header";
import ListComponent from "./component/ListComponent";

var count = 0;
function App() {
  const [tasks, setTasks] = useState([
    "Read SpringBoot",
    "Complete assignments",
    "Prepare breakfast",
    "Sleep for 2 hours",
    "Take a shower",
  ]);
  const [strikes, setStrikes] = useState(Array(tasks.length).fill(false));
  const [empty, setEmpty] = useState(true);

  const taskButtonClickHndler = (index) => {
    const newStriks = [...strikes];
    newStriks[index] = !newStriks[index];
    if (newStriks[index] === true) count++;
    else count--;
    if (count === 0) setEmpty(true);
    else setEmpty(false);
    setStrikes(newStriks);
  };
  const emptyButtonClickHandler = () => {
    if (count === 0) {
      setTasks([]);
      return;
    }

    const newAllTask = tasks.filter((task, index) => strikes[index] === false);
    setEmpty(true);
    count = 0;
    setTasks(newAllTask);
    setStrikes(Array(tasks.length).fill(false));
  };
  return (
    <div className='Application'>
      <Header />

      <ListComponent
        allTasks={tasks}
        strikes={strikes}
        empty={empty}
        emptyButtonClickHandler={emptyButtonClickHandler}
        taskButtonClickHndler={taskButtonClickHndler}
      />
    </div>
  );
}

export default App;
