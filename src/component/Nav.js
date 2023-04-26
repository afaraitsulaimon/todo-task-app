import React, {useContext} from 'react'
import { Container } from '../assets/styles/NavStyles'
import { TaskContext } from '../context/TaskContext';

const Nav = () => {
    const yearDate = new Date();

    const [tasks,setTask] = useContext(TaskContext);
  return (
    
    <Container>
         <p>{yearDate.toDateString()}</p> 
         <p>{tasks.length} Task(s) available</p>
        <p>Welcome Bola</p>
    </Container>
  )
}

export default Nav