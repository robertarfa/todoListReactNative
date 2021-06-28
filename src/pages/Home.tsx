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
    console.log('handleMarkTaskAsDone', tasks,id)
    //TODO - mark task as done if exists
  }

  function handleRemoveTask(id: number) {
    console.log('handleRemoveTask', tasks,id)
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