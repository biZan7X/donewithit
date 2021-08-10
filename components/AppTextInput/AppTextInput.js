import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
  } from 'react-native-fontawesome';

import styles from "./styles"


const AppTextInput = ({icons,...otherProps}) => {
    return (
        <View style={styles.container} >
            { icons && <FontAwesome style={styles.icon} icon={SolidIcons[icons]}/>}
            <TextInput style={styles.textInput} {...otherProps} />
        </View>
    );
}


export default AppTextInput;
