import React, {useState} from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';
import { useSQLiteContext } from 'expo-sqlite/next';
import { constant } from "../utils/constants";
import moment from "moment"
const Form =(props)=>{
    const db = useSQLiteContext();
    const {setOpen, tasks} = props
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [title, setTitle] = useState()
    const [desc, setDesc] = useState()
    const handleDate = (event,fecha) => {
        const nuevaFecha = moment(fecha).format("DD/MM/YYYY")
        setDate(nuevaFecha)
      }
      const handleTime = (event,Time) => {
        let date = new Date(event.nativeEvent.timestamp * 1000)
        let hours = date.getHours()
        let minutes = date.getMinutes()
        console.log(minutes)
        let formatTime = hours + ':' + minutes
        setTime(formatTime)
      }
      const saveTask = async()=>{
        await db.runAsync(`INSERT INTO test (title, descripcion) VALUES (?, ?)`, title, desc)        
        setOpen()
      }
    return(
        <View style={styles.container}>
            <AntDesign 
                name="closecircle" 
                size={30} 
                color={constant.morado} 
                onPress={setOpen}
                style={styles.closeButton}
            />
            <TextInput 
                placeholder="Titulo"
                style={styles.input}
                onChange={(e)=> setTitle(e.nativeEvent.text)}
            />
            <TextInput 
                placeholder="Descripcion"
                style={styles.input}
                onChange={(e)=> setDesc(e.nativeEvent.text)}
            />
            
            
            {
                date != undefined && <Text style={styles.title}>{date}</Text> || <DateTimePicker  value={new Date()} mode="date" onChange={handleDate}/>
            }
                        {
                time != undefined && <Text style={styles.title}>{time}</Text> || <DateTimePicker  value={new Date()} mode="time" onChange={handleTime}/>
            }
            <Button title="Registrar Tarea" onPress={saveTask}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: "80%",
        zIndex: 9999,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderColor: "black",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        borderWidth: 1,
        padding: 20,
        width: "90%",
        margin: 10,
        borderRadius: 10
    },
    closeButton:{
        position: "absolute",
        top: 20,
        left: 20
    },
    title:{
        fontSize: 20,
        fontWeight: "bold"
    }
})
export default Form