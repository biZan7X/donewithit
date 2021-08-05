import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

import color from "../config/color"

const ViewImageScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.closeButton} ></View>
            <View style={styles.deleteButton} ></View>
            <Image style={styles.image} resizeMode="contain" source={require('../assets/chair.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    closeButton: {
        width: 50,
        height: 50,
        backgroundColor: color.primary,
        position: "absolute",
        top: 40,
        left: 30
    },
    container: {
        flex: 1,
        backgroundColor: color.black
    },
    deleteButton: {
        width: 50,
        height: 50,
        backgroundColor: color.secondary,
        position: "absolute",
        top: 40,
        right: 30
    },
    image: {
        height: "100%",
        width: "100%"
    }
})

export default ViewImageScreen;
