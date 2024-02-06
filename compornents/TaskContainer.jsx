import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite/next';
import Task from './Task';
const TaskContainer = ()=>{
    const db = useSQLiteContext();
    const [tasks, setTasks] = useState()
    async function getAllTasks() {
       try {
       const firstRow = await db.getAllAsync('SELECT * FROM test')
       setTasks(firstRow)   
       } catch (error) {
           console.log(error)
       }
     }
   useEffect(() => {
     getAllTasks();
   }, []);
   return(
    <ScrollView style={styles.taskContainer} contentContainerStyle={{ justifyContent: 'center', alignItems: "center", elevation:10 }}>
    {tasks && tasks.length > 0 && tasks.map(item => <Task data={item} key={item.id}/>) }        
    </ScrollView>
   )
    
}
const styles = StyleSheet.create({
    taskContainer:{
        display: "flex",
        // width: "100%",
        // alignContent: "center",
      }
})
export default TaskContainer