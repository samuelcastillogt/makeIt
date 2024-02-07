import React, {useState, useEffect} from "react";
import { useSQLiteContext } from 'expo-sqlite/next';
import { View, Text, Image, StyleSheet, Dimensions, Button, TextInput } from "react-native";
import { constant } from "../utils/constants";
import moment from "moment";
const Header = (props)=>{
    const {open} = props
    const db = useSQLiteContext();
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