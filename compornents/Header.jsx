import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { constant } from "../utils/constants";

const Header = ()=>{
    return(
        <>
            <View style={styles.container}>
                <Text style={styles.text}>Hola Iker</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 200,
        padding: 20,
        backgroundColor: constant.morado,
        borderEndEndRadius: 200,
        justifyContent: "center"
    },
    text:{
        fontSize: constant.titleSize,
        fontWeight: "bold",
        color: constant.text
    }
})
export default Header