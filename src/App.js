import Header from "./component/Header";
import ListComponent from "./component/ListComponent";

function App() {
  const tasks = [
    "Read SpringBoot",
    "Complete assignments",
    "Prepare breakfast",
    "Sleep for 2 hours",
    "Take a shower",
  ];
  return (
    <div className='Application'>
      <Header />
      <ListComponent allTasks={tasks} />
    </div>
  );
}

export default App;
