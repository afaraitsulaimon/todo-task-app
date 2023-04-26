import React from "react";
import { Container } from "../assets/styles/TaskListStyles";
import { FaEye } from "react-icons/fa";

const TaskList = ({ task, setTask, tasks, handleEditShowModal,handleShowTaskDetailsModal, handleTaskStatus }) => {

    //handle delete

    const handleDeleteTask = () => {

      setTask(tasks.filter((theTask) => theTask.id !== task.id ))
    
    }

  return (
    <Container>
      <div className="forTitles">
        <p className={task.status ? "titleText" : ""} onClick={() => handleTaskStatus(task.id)}>{task?.title}</p>
      </div>
      <div className="forButtons">
      <FaEye className="viewTaskdetails" onClick={() => handleShowTaskDetailsModal(task.id)}/>
      <button onClick={() => handleEditShowModal(task.id)}>Edit</button>
        <button onClick={handleDeleteTask}>Delete</button>
      </div>
    </Container>
  );
};

export default TaskList;
