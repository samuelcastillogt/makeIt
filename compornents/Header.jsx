import React, {useState, useEffect} from "react";
import { useSQLiteContext } from 'expo-sqlite/next';
import { View, Text, Image, StyleSheet } from "react-native";
import { constant } from "../utils/constants";
import moment from "moment";
const Header = (props)=>{
    const {open} = props
    const db = useSQLiteContext();
    async function setup() {
        try {
            await db.execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, title TEXT, descripcion TEXT);
        `);  
        } catch (error) {
            console.log(error)
        }
      }

      useEffect(() => {
        if(open == true){
            setup();            
        }

    }, []);
    return(
        <>
            <View style={styles.container}>
                <Text style={styles.text}>Hola {moment(new Date()).format("DD/MM/YYYY")}</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 100,
        padding: 20,
        backgroundColor: constant.morado,
        borderEndEndRadius: 200,
        borderBottomEndRadius:200, 
        justifyContent: "center"
    },
    text:{
        fontSize: constant.titleSize,
        fontWeight: "bold",
        color: constant.text
    }
})
export default Header