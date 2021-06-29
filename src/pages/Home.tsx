import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
  const [visualMode, setVisualMode] = useState("light")

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) return

    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks((oldState) => [...oldState, data])
  }

  function handleMarkTaskAsDone(id: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done
        }
      } else return task
    })

    setTasks(newTasks)
  }

  function handleRemoveTask(id: number) {
    setTasks((oldState) => oldState.filter(
      (task) => task.id !== id
    ))
  }

  function handleToogleVisualMode(){
    console.log('handleToogleVisualMode')
    const toggledMode = visualMode === "light" ? "dark" : "light"
    setVisualMode(toggledMode)
  }

  return (
    <>
      <Header visualTheme={visualMode}/>

      <View style={visualMode === "light" ? styles.lightbackgroundColor : styles.darkbackgroundColor}> 
        <TodoInput addTask={handleAddTask} visualMode={visualMode}/>
      </View>

      <View style={[styles.container, visualMode === "light" ? styles.lightbackgroundColor : styles.darkbackgroundColor]}> 
        <MyTasksList
          tasks={tasks} 
          onPress={handleMarkTaskAsDone} 
          onLongPress={handleRemoveTask}
          visualMode={visualMode}
        />
      </View>

      <View style={visualMode === "light" ? styles.lightbackgroundColor : styles.darkbackgroundColor}> 
        <TouchableOpacity
        style={styles.button}
          onPress={handleToogleVisualMode}
        >
          <Text style={{color:'white'}}>{visualMode === "light" ? 'Dark Mode' : 'Light Mode'}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightbackgroundColor: {
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  darkbackgroundColor: {
    backgroundColor: '#10101E',
    alignItems: 'center'
  },
  button:{
    backgroundColor: '#273FAD',
    width: 100,
    padding: 10,
    margin: 10
    

  }
});