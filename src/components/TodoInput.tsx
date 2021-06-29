import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  visualMode: string
}

export function TodoInput({ addTask, visualMode }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    addTask(task)
    setTask('')
    //TODO - Call addTask and clean input value 
  }

  return (
    <View 
    style={[
      styles.InputContainer, 
      Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow,
      visualMode === "light" ? styles.lightInputContainer : styles.darkInputContainer
    ]}>
      <TextInput 
        style={[styles.input, visualMode === "light" ? styles.lightInput : styles.darkInput]}
        placeholder="Adicionar novo todo..."
        placeholderTextColor={visualMode === "light" ? "#000" : "#fff"}
        returnKeyType="send"
        onChangeText={setTask}
        value={task}
        onSubmitEditing={handleAddNewTask}
        //TODO - use value, onChangeText and onSubmitEditing props
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.AddButton, visualMode === "light" ? styles.lightAddButton : styles.darkAddButton]}
        onPress={handleAddNewTask}
        //TODO - onPress prop
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  InputContainer: {
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lightInputContainer: {
    backgroundColor: '#F5F4F8',
  },
  darkInputContainer: {
    backgroundColor: '#34313D',
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  lightInput: {
    color: '#000',
  },
  darkInput: {
    color: '#fff',
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  AddButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  lightAddButton: {
    backgroundColor: '#3FAD27',
  },
  darkAddButton: {
    backgroundColor: '#565BFF',
  },
});