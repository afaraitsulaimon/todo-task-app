import React,{useState, createContext} from 'react'

export const TaskContext = createContext();

export const TaskProvider = props => {
    const [tasks, setTask] = useState([
        {
          id: 1,
          title: "Read Code",
          taskDetails: "Debug Code and makes ure the code is clean and clear",
          status: false,
        },
        {
          id: 2,
          title: "Read Quran",
          taskDetails: "Sural Mulk and one other surat",
          status: false,
        },
        {
          id: 3,
          title: "Meeting",
          taskDetails:
            "With Management of the Ariel Construction of the Lekki Housing",
          status: false,
        },
      ]);
  return (
    <TaskContext.Provider value={[tasks, setTask]}>
         {props.children}
    </TaskContext.Provider>
  )
}

