import React, {useState} from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';
import { constant } from "../utils/constants";
import moment from "moment"
const Form =(props)=>{
    const {setOpen} = props
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const handleDate = (event,fecha) => {
        const nuevaFecha = moment(fecha).format("DD/MM/YYYY")
        setDate(nuevaFecha)
      }
      const handleTime = (event,Time) => {
        setTime(event.nativeEvent.timestamp)
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
            />
            <TextInput 
                placeholder="Descripcion"
                style={styles.input}
            />
            <DateTimePicker  value={new Date()} mode="date" onChange={handleDate}/>
            <DateTimePicker  value={new Date()} mode="time" onChange={handleTime}/>
            {
                date != undefined && <Text>{date}</Text>
            }
                        {
                time != undefined && <Text>{time}</Text>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: "50%",
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
    }
})
export default Form