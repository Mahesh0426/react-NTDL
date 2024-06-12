const TaskList = (props) => {
  const { title, taskList = [], deleteTask, switchTask } = props;
  return (
    <>
      <h3 className="text-center">{title}</h3>

      <div className="px-4" style={{ height: "50vh", overflowY: "auto" }}>
        <table className="table table-hover border">
          {/* <!--this is where you add all task--> */}
          <tbody id="taskListElement">
            {taskList.map((task, index) => {
              const arrowButtonClass =
                task.type === "entry"
                  ? "btn btn-info btn-sm"
                  : "btn btn-warning btn-sm";

              const arrowClass =
                task.type === "entry"
                  ? "fa-solid fa-circle-arrow-right"
                  : "fa-solid fa-circle-arrow-left";

              return (
                <tr key={task.id}>
                  <th>{index + 1}</th>
                  <td>{task.taskName}</td>
                  <td>{task.taskTime}hrs</td>
                  <td className="text-end ">
                    <button
                      className="btn btn-danger btn-sm "
                      onClick={() => deleteTask(task.id)}
                    >
                      <i class="fa-solid fa-trash-can"></i>
                    </button>

                    <button
                      className={arrowButtonClass}
                      onClick={() => switchTask(task.id)}
                    >
                      <i className={arrowClass}></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskList;
