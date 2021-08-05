import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from "./styles"
import colors from "../../config/color"

const AppButton = ({title,color = "primary",onPress}) => {
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor: colors[color]}]} onPress={onPress} >
            <Text style={styles.text} >{title}</Text>
        </TouchableOpacity>
    );
}

export default AppButton;
