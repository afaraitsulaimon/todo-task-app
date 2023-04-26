import React, { useContext, useState } from "react";
import {
  Container,
  BoardHolder,
  LeftSideBar,
  RightSideBar,
  InnerLeftSideBar,
  InnerRightSideBar,
} from "../assets/styles/HomeStyles";
// import Nav from "./Nav";
import TaskList from "./TaskList";
import { TaskContext } from "../context/TaskContext";
import { FaTimes } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [tasks, setTask] = useContext(TaskContext);

  // state for showing and hidden modal
  const [displayModal, setDisplayModal] = useState(false);

  const [displayEditModal, setDisplayEditModal] = useState(false);

  const [displayTaskDetailsModal, setDisplayTaskDetailsModal] = useState(false);

  // state for the inputs in the form
  const [taskTitle, setTaskTitle] = useState("");

  const [taskDetails, setTaskDetails] = useState("");

  const [taskDetailsView, setTaskDetailsView] = useState({});


  // state for the edit inputs values and id
  const [inputEditTitle, setinputEditTitle] = useState("");
  const [inputEditDetails, setinputEditDetails] = useState("");
  const [isEditItem, setIsEditItem] = useState(null);

  // store error for the form
  const [error, setError] = useState("");

  const [errorEdit, setErrorEdit] = useState("");

  // function to run the showing and hidden create modal

  const handleShowModal = () => {
    setDisplayModal(true);
  };

  const handleHideModal = () => {
    setDisplayModal(false);
  };

  // function to run the showing and hidden edit modal
  //this is to show edit Modal, which we passed the argument
  //that we collected from the parameter of the  props we passed to the
  //TaskList components
  // we used find , so that we can check the task that is equal to the
  //same id that we get the parameter from TaskList
  //Then we set the new input field of the edit form
  //to the new details of the task we find
  //which simply means, once we pop out the modal, we collected the details
  //of the clicked task, so that we can display it in the input

  const handleEditShowModal = (id) => {
    setDisplayEditModal(true);
    let newEditItem = tasks.find((elem) => {
      return elem.id === id;
    });

    setinputEditTitle(newEditItem.title);
    setinputEditDetails(newEditItem.taskDetails);
    setIsEditItem(id);
  };

  const handleEditHideModal = () => {
    setDisplayEditModal(false);
  };

  // handle the submitted value for creating task

  const handleSubmittedTask = (e) => {
    e.preventDefault();

    if (taskTitle === "" || taskDetails === "") {
      setError("Both fields are required");
    } else {
      setTask((prevTasks) => [
        ...prevTasks,
        { id: uuidv4, title: taskTitle, taskDetails: taskDetails, status: false },
      ]);
      setError("");
      setTaskTitle("");
      setTaskDetails("");
    }
  };

  // handle the submitted value for edited task
  //to submit the edit task, you map through the task
  // then check if the task id is equal to the id of the one we want to
  //edit, then we now update using this return {...element, title:inputEditTitle, taskDetails:inputEditDetails}
  // then we return all the task, so that it can display everything
  //including the updated one

  const handleSubmitEditTask = (e) => {
    e.preventDefault();

    if (inputEditTitle === "" || inputEditDetails === "") {
      setErrorEdit("Both fields are required");
    } else {
      setTask(
        tasks?.map((element) => {
          if (element.id === isEditItem) {
            return {
              ...element,
              title: inputEditTitle,
              taskDetails: inputEditDetails,
            };
          }
          return element;
        })
      );
    }
  };

  //to display and hide details Modal

  const handleShowTaskDetailsModal = (theId) => {
    setDisplayTaskDetailsModal(true);
    let taskToView = tasks.find((elem) => {
      return elem.id === theId;
    });

    setTaskDetailsView(taskToView);
  };

  const handleHideTaskDetailsModal = () => {
    setDisplayTaskDetailsModal(false);
  };

  //handle Task status
  const handleTaskStatus = (idOfClickOne) => {
    // let theClickedOne = tasks.find((elem) => {
    //   return elem.id === idOfClickOne;
    // });

    setTask(
      tasks?.map((element) => {
        if (element.id === idOfClickOne) {
          return {
            ...element,
            status:true
          };
        }
        return element;
      })
    );

  };


  return (
    <Container>
      <BoardHolder>
        <LeftSideBar>
          <InnerLeftSideBar>
            <ul>
              <li>
                <button>All Task</button>
              </li>
              <li>
                <button>Completed Task</button>
              </li>
              <li>
                <button onClick={handleShowModal}>Add Task</button>
              </li>
            </ul>
            <div className="logoutHolder">
              <button>Logout</button>
            </div>
          </InnerLeftSideBar>
        </LeftSideBar>

        <RightSideBar>
          <InnerRightSideBar>
            <div className="header">
              <p>Task List</p>
            </div>

            <div className="taskDetailsHolder ">
              {tasks?.map((task, index) => {
                return (
                  <div className="taskHolder" key={index}>
                    <TaskList
                      task={task}
                      setTask={setTask}
                      tasks={tasks}
                      handleEditShowModal={handleEditShowModal}
                      handleShowTaskDetailsModal={handleShowTaskDetailsModal}
                      handleTaskStatus={handleTaskStatus}
                    />
                  </div>
                );
              })}
            </div>
          </InnerRightSideBar>
        </RightSideBar>
      </BoardHolder>

      {/* theModal for the form of Add Task start here */}
      <div className={displayModal ? "modalShowHolder" : "modalHideHolder"}>
        <div className="fatimesHolder">
          <FaTimes size="1.5em" className="faTimes" onClick={handleHideModal} />
        </div>
        <div className="formHolder">
          <h3>Create Task/Todo</h3>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ color: "red" }}>{error}</h3>
          </div>
          <form onSubmit={handleSubmittedTask}>
            <div className="form-control">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                placeholder="Title of task"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label htmlFor="details">Details:</label>
              <input
                type="text"
                placeholder="Details of task"
                value={taskDetails}
                onChange={(e) => setTaskDetails(e.target.value)}
              />
            </div>

            <div className="submitButtonHolder">
              <button type="submit">Create Task</button>
            </div>
          </form>
        </div>
      </div>
      {/* theModal for the form of Add Task ends here */}

      {/* the Modal for the edit form start here */}
      <div
        className={
          displayEditModal ? "editModalShowHolder" : "editModalHideHolder"
        }
      >
        <div className="fatimesHolder">
          <FaTimes
            size="1.5em"
            className="faTimes"
            onClick={handleEditHideModal}
          />
        </div>
        <div className="formHolder">
          <h3>Edit Task/Todo</h3>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ color: "red" }}>{errorEdit}</h3>
          </div>
          <form onSubmit={handleSubmitEditTask}>
            <div className="form-control">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                value={inputEditTitle}
                onChange={(e) => setinputEditTitle(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label htmlFor="details">Details:</label>
              <input
                type="text"
                value={inputEditDetails}
                onChange={(e) => setinputEditDetails(e.target.value)}
              />
            </div>

            <div className="submitButtonHolder">
              <button type="submit">Update Task</button>
            </div>
          </form>
        </div>
      </div>
      {/* the Modal for the edit form end here */}

      {/* the Modal for the show full task details  start here */}
      <div
        className={
          displayTaskDetailsModal
            ? "taskDetailsModalShowHolder"
            : "taskDetailsModalHideHolder"
        }
      >
        <div className="fatimesHolder">
          <FaTimes
            size="1.5em"
            className="faTimes"
            onClick={handleHideTaskDetailsModal}
          />
        </div>
        <div className="taskDetailsHolder">
        <h3>Task Details</h3>

<div className="innerDetailsHolder">

          <div className="titleHolder">
            <span>Title:</span>
            <span>{taskDetailsView.title}</span>
          </div>

          <div className="detailsHolder">
            <span>Details:</span>
            <span>{taskDetailsView.taskDetails}</span>
          </div>

          <div>
            <span>Status:{taskDetailsView.status === false ? 'Incomplete' : 'Completed'}</span>
            <span></span>
          </div>

          </div>

        </div>
      </div>
      {/* the Modal for the show full task details  ends here */}
      </Container>
  );
};

export default Home;
