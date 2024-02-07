import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite/next';
import { constant } from './utils/constants';
import AddButton from './compornents/AddButton';
import Header from './compornents/Header';
import Task from './compornents/Task';
import { migrateDbIfNeeded } from './db/db.controler';
import { taskDummies } from './taskDummie';
import Form from './compornents/Form';
import TaskContainer from './compornents/TaskContainer';
import Validator from './compornents/Validator';


export default function App() {
  const [open, setOpen] = useState(false)
  const modalManager =()=>{
    setOpen(!open)
  }
  return (
    <>
    <SQLiteProvider databaseName="test.db" onInit={migrateDbIfNeeded}>
         <Header open={open}/> 
    <View style={styles.container}>
    <TaskContainer open={open}/>

      {open == true && <Form setOpen={modalManager} tasks={taskDummies}/>}
      {open == false && <AddButton setOpen={modalManager}/>}
      <Validator />
    </View>
    </SQLiteProvider>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constant.blanco,
    position: "relative",
  },
  text: {
    color: constant.text,
    fontWeight: "bold"
  },
  taskContainer:{
    display: "flex",
    // width: "100%",
    // alignContent: "center",
  }
});
