import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
  } from 'react-native-fontawesome';

import styles from "./styles"
import AppText from "../AppText"


const AppPicker = ({icons,placeholder}) => {
    return (
        <View style={styles.container} >
            { icons && <FontAwesome style={styles.icon} icon={SolidIcons[icons]}/>}
            <AppText customStyle={styles.text} >{placeholder}</AppText>
            <FontAwesome style={[styles.icon,{marginRight: 0,}]} icon={SolidIcons["caret-square-down"]}/>
        </View>
    );
}


export default AppPicker;
