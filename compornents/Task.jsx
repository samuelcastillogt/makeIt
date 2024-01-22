import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { constant } from "../utils/constants";

const Task = (props)=>{
    const {title, descripcion} = props.data
    return(
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                   <Text style={styles.title}>{title}</Text> 
                </View>
                <Text style={styles.descripcion}>{descripcion}</Text>
            </View>
    )
} 
const styles = StyleSheet.create({
    container: {
        backgroundColor: constant.amarilloTransparente,
        width: "80%",
        height:150,
        borderRadius: 20,
        margin: 5
    },
    titleContainer:{
        backgroundColor: constant.amarillo,
        padding: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    title:{
        fontSize: 20,
        fontWeight: "bold"
    },
    descripcion:{
        padding: 20
    }
})
export default Task