import React, {useState} from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select'
import { AntDesign } from '@expo/vector-icons';
import { useSQLiteContext } from 'expo-sqlite/next';
import { constant } from "../utils/constants";
import moment from "moment"
const Form =(props)=>{
    const db = useSQLiteContext();
    const {setOpen, tasks} = props
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [timeCrude, setTimeCrude] = useState()
    const [title, setTitle] = useState()
    const [desc, setDesc] = useState()
    const handleDate = (event,fecha) => {
        const nuevaFecha = moment(fecha).format("DD/MM/YYYY")
        setDate(nuevaFecha)
      }
      const handleTime = (event,Time) => {
        var h = new Date(event.nativeEvent.timestamp).getHours();
        var m = new Date(event.nativeEvent.timestamp).getMinutes();
        h = (h<10) ? '0' + h : h;
        m = (m<10) ? '0' + m : m;
        setTimeCrude(event.nativeEvent.timestamp)
        var output = h + ':' + m;
        setTime(output)
      }
      const saveTask = async()=>{
        await db.runAsync(`INSERT INTO test (title, descripcion, time, date) VALUES (?, ?, ?, ?)`, title, desc, timeCrude, date)        
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
            <View style={{margin: 20}}>
              <RNPickerSelect
                        placeholder={{
                            label: 'Selecciona el tipo de tarea',
                            value: null,
                            color: 'red',
                          }}
            
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football', key: 1 },
                { label: 'Baseball', value: 'baseball', key: 2 },
                { label: 'Hockey', value: 'hockey', key: 3 },
            ]}
        />  
            </View>
            
            
            {
                date != undefined && <Text style={styles.title}>{date}</Text> || <DateTimePicker  value={new Date()} mode="date" onChange={handleDate}/>
            }
                        {/* {
                time != undefined && <Text style={styles.title}>{time}</Text> || <DateTimePicker  value={new Date()} mode="time" onChange={handleTime}/>
            } */}
            <Button title="Registrar Tarea" onPress={saveTask} color="green"/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: "auto",
        zIndex: 9999,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderColor: "black",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        padding: 50
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