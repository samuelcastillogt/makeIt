import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { constant } from './utils/constants';
import AddButton from './compornents/AddButton';
import Header from './compornents/Header';
import Task from './compornents/Task';

import { taskDummies } from './taskDummie';
import Form from './compornents/Form';

export default function App() {
  const [open, setOpen] = useState(false)
  const modalManager =()=>{
    setOpen(!open)
  }
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.taskContainer}>
      {taskDummies.map(item => <Task data={item} key={item.title}/>) }        
      </ScrollView>
      {open == true && <Form setOpen={modalManager}/>}
      {open == false && <AddButton setOpen={modalManager}/>}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constant.blanco,
    position: "relative"
  },
  text: {
    color: constant.text,
    fontWeight: "bold"
  },
  taskContainer:{
    display: "flex",
    width: "100%",
    alignContent: "center"
  }
});
