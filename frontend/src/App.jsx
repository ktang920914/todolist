import { TextInput, Button } from 'flowbite-react'
import React from 'react'
import { useState } from 'react'

const App = () => {

  const [tasks,setTasks] = useState([])
  const [newTask,setNewTask] = useState('')
  console.log(newTask)
  console.log(tasks)

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const addTask = () => {
    if(newTask.trim() !== ''){
      setTasks(t => [...t, newTask])
      setNewTask('')
    }
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_,i) => i !== index)
    setTasks(updatedTasks)
  }

  const upTask = (index) => {
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
  }
  }

  const downTask = (index) => {
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
  }
  }

  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <h1 className='mx-auto mt-20 font-semibold'>Todo list</h1>
      <div className='flex gap-1'>
      <TextInput className='' type='text' placeholder='Enter task...' color='gray'
      onChange={handleChange} value={newTask}
      />
      <Button onClick={addTask} gradientDuoTone='purpleToPink'>Add task</Button>
      </div>
    </div>
    <ol>
      {tasks.map((task,index) => 
      <li key={task}>
        <div className='flex items-center justify-center'>
        <span>{task}</span>
        <Button onClick={()=>deleteTask(index)} gradientDuoTone='purpleToBlue'>Delete</Button>
        <Button onClick={()=>upTask(index)}>Up</Button>
        <Button onClick={()=>downTask(index)}>Down</Button>
        </div>
      </li>
      )}
    </ol>
    </>
  )
}

export default App