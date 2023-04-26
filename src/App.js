import Home from "./component/Home";
import Nav from "./component/Nav";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <Nav/>
        <Home />
      </div>
    </TaskProvider>
  );
}

export default App;
