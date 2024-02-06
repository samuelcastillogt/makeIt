import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
const Empty = ()=>{
    return(
        <View style={styles.constainer}>
            <Image source = {require('../assets/empty.png')} style={styles.img}/>
            <Text style={styles.title}>No hemos encontrado tareas ....</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    constainer:{
        flex: 1,
        width: "90%",
        justifyContent: "center",
        alignItems: "center"
    },
    img:{
        width: 300,
        height: 300
    },
    title:{
        fontSize: 30,
        fontWeight: "bold"
    }
})
export default Empty