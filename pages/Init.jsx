import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useSQLiteContext } from 'expo-sqlite/next';
import { constant } from '../utils/constants';
import Validator from '../compornents/Validator';
import TaskContainer from '../compornents/TaskContainer';
import AddButton from '../compornents/AddButton';
import Form from '../compornents/Form';
const Init = () => {
    const db = useSQLiteContext();
    const [open, setOpen] = useState(false)
    const modalManager =()=>{
      setOpen(!open)
    }
    async function setup() {
        try {
            await db.execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, title TEXT, descripcion TEXT, date TEXT, time TEXT, type TEXT);
        `);  
        
            await db.execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY NOT NULL, pass TEXT);
        `);  
    //     await db.execAsync(`
    //     PRAGMA journal_mode = WAL;
    //     DROP TABLE test;
    // `); 
        } catch (error) {
            console.log(error)
        }
      }

      useEffect(() => {
            setup();            
    }, []);
  return (
    <View style={styles.container}>
      <Validator />
      <TaskContainer open={open}/>
      {
        open == false && <AddButton setOpen={modalManager}/> || <Form setOpen={modalManager}/>
      }
    </View>
  )
}

export default Init

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: constant.morado,
        justifyContent: "center",
        alignItems: "center"
    }
})