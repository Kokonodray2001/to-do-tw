import { useState } from "react";
import Header from "./component/Header";
import ListComponent from "./component/ListComponent";

function App() {
  const [tasks, setTasks] = useState([
    "Read SpringBoot",
    "Complete assignments",
    "Prepare breakfast",
    "Sleep for 2 hours",
    "Take a shower",
  ]);
  const emptyButtonClickHandler = () => {
    setTasks(["Nothing to do buddy. Sleep!"]);
  };

  return (
    <div className='Application'>
      <Header />
      <ListComponent
        allTasks={tasks}
        emptyButtonClickHandler={emptyButtonClickHandler}
      />
    </div>
  );
}

export default App;
