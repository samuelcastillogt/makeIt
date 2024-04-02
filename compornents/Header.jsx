import React, {useState, useEffect} from "react";
import { useSQLiteContext } from 'expo-sqlite/next';
import { View, Text, Image, StyleSheet, Dimensions, Button, TextInput } from "react-native";
import { constant } from "../utils/constants";
import moment from "moment";
const Header = (props)=>{
    const {open} = props
    
    return(
        <>
            <View style={styles.container}>
                
                <Text style={styles.text}>Hola, hoy es {moment(new Date()).format("DD/MM/YYYY")} y es un buen dia para escribir...</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 100,
        padding: 20,
        backgroundColor: constant.morado,
        borderBottomEndRadius:200, 
        justifyContent: "center"
    },
    text:{
        fontSize: 20,
        fontWeight: "bold",
        color: constant.text,
        padding: 0
    }
})
export default Header