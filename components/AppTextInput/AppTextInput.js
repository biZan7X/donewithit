import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
  } from 'react-native-fontawesome';

import styles from "./styles"
import defaultStyles from "../../config/styles"


const AppTextInput = ({icons,...otherProps}) => {
    return (
        <View style={styles.container} >
            { icons && <FontAwesome style={styles.icon} icon={SolidIcons[icons]}/>}
            <TextInput style={defaultStyles.text} {...otherProps} />
        </View>
    );
}


export default AppTextInput;
