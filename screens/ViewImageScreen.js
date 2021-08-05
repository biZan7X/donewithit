import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

import color from "../config/color"
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
  } from 'react-native-fontawesome';

const ViewImageScreen = () => {

    return (
        <View style={styles.container} >
            <View style={styles.closeButton} >
                <FontAwesome style={{color: color.primary,fontSize:40}} icon={SolidIcons.timesCircle} />
            </View>
            <View style={styles.deleteButton} >
                <FontAwesome style={{color: color.secondary,fontSize:40}} icon={SolidIcons.trashAlt} />
            </View>
            <Image style={styles.image} resizeMode="contain" source={require('../assets/chair.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    closeButton: {
        position: "absolute",
        top: 40,
        left: 30
    },
    container: {
        flex: 1,
        backgroundColor: color.black
    },
    deleteButton: {
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
