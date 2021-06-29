import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const data = {
      id:new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    if(newTaskTitle !== ''){
      setTasks(oldState => [...oldState, data])

    }
    //TODO - add new task if it's not empty
  }

  function handleMarkTaskAsDone(id: number) {

    let filterItemDoneTrue = tasks.filter(task => task.id === id)
    // .map(task => {return({...task,done: true})})

    let newObj = {
      id: filterItemDoneTrue[0].id,
      title: filterItemDoneTrue[0].title,
      done: !filterItemDoneTrue[0].done
    }

    let filterItemDoneFalse = tasks.filter(task => task.id !== id)

    setTasks([...filterItemDoneFalse, newObj])
    // console.log('handleMarkTaskAsDone', tasks,id)
    //TODO - mark task as done if exists
  }

  function handleRemoveTask(id: number) {
    // console.log('handleRemoveTask', tasks,id)
    setTasks(oldState => oldState.filter(task => task.id !== id))
    //TODO - remove task from state
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}