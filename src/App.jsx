import "./App.css";
import Header from "./Components/Header";
import TaskContainer from "./Components/Taskcontainer";

function App() {
  return (
    <div className="title">
      {/* <!--Title--> */}
      <Header />

      {/* <!----Application | Grid System with 1 Row and 3 columns--------> */}
      <TaskContainer />
    </div>
  );
}

export default App;
