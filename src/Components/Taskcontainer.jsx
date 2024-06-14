import { useEffect, useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import TimeDisplay from "./TimeDisplay";

const TaskContainer = () => {
  const [taskList, setTaskList] = useState([]);

  //Function to add task
  const addTask = (taskObject) => {
    setTaskList([...taskList, taskObject]);
  };
  // function to delete task
  const deleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      const updatedTaskList = taskList.filter((task) => task.id !== taskId);
      setTaskList(updatedTaskList);
    }
  };
  //Function to switch task
  const switchTask = (taskId) => {
    const updatedswitchTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        task.type = task.type === "entry" ? "unwanted" : "entry";
      }
      return task;
    });
    setTaskList(updatedswitchTaskList);
  };

  //filter entry task
  const entryTask = taskList.filter((task) => task.type === "entry");
  const unwantedTask = taskList.filter((task) => task.type === "unwanted");

  //function  for total time spent
  const totalTimeSpent = entryTask.reduce((acc, curr) => {
    return acc + Number(curr.taskTime);
  }, 0);

  // fubnction for total time waste
  const totalTimeWasted = unwantedTask.reduce((acc, curr) => {
    return acc + Number(curr.taskTime);
  }, 0);

  // useffect for local storage
  useEffect(() => {
    const taskLocal = JSON.parse(localStorage.getItem("task"));
    if (taskLocal && taskLocal.length > 0) {
      setTaskList(taskLocal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="shadow-lg border p-4 rounded">
      <div className="row gap-2">
        {/* <!---First Column--> */}
        <div className="col border p-4 rounded align-self-center">
          {/* <!----Form To Add Task--> */}
          <AddTaskForm addTask={addTask} deleteTask={deleteTask} />
        </div>

        {/* <!---Second Column--> */}
        <div className="col border p-4 rounded">
          {/* <!----Task List--> */}
          <TaskList
            title="TaskList"
            taskList={entryTask}
            deleteTask={deleteTask}
            switchTask={switchTask}
          />
        </div>

        {/* <!---Third Column--> */}
        <div className="col border p-4 rounded">
          {/* <!----Unwanted Task List--> */}
          <TaskList
            title="Unwanted Task"
            taskList={unwantedTask}
            deleteTask={deleteTask}
            switchTask={switchTask}
          />
        </div>
      </div>

      {/* <!----Second Row--> */}
      <TimeDisplay
        totalTimeSpent={totalTimeSpent}
        totalTimeWasted={totalTimeWasted}
      />
    </div>
  );
};

export default TaskContainer;
