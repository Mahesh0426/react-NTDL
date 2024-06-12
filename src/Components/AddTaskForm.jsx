import { useState } from "react";
import { randomIdGenerator } from "../utility/randomIdGenerator";

const initialTaskObject = {
  taskName: "",
  taskTime: "",
  type: "entry",
};
const AddTaskForm = (props) => {
  const { addTask } = props;

  const [taskObject, setTaskObject] = useState(initialTaskObject);

  // destructure the task from taskObject
  const { taskName, taskTime } = taskObject;

  //function onchange to get input fields
  const handleOnChange = (e) => {
    const keyToUpdate = e.target.name;
    setTaskObject({ ...taskObject, [keyToUpdate]: e.target.value });
  };
  //function to submit form
  const handleOnSubmit = (e) => {
    // stops  the default behavior of form to reload the page
    e.preventDefault();

    //add id to taskObject
    const taskWithId = { ...taskObject, id: randomIdGenerator() };

    //Logic to add task to the taskList
    addTask(taskWithId);

    //reset the taskObject to initialTaskObject
    setTaskObject(initialTaskObject);
  };

  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <div className="d-flex flex-column gap-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Task"
          name="taskName"
          value={taskName}
          onChange={(e) => handleOnChange(e)}
          required
        />

        <input
          type="number"
          className="form-control"
          placeholder="Enter Time Spent (hr)"
          name="taskTime"
          min="1"
          max="168"
          value={taskTime}
          onChange={(e) => handleOnChange(e)}
          required
        />

        <button className="btn btn-primary" type="submit">
          Add New Task
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
