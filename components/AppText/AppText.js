import React from 'react';
import {Text} from 'react-native';

import styles from "./styles"

const AppText = ({children,customStyle}) => {
    return (
        <Text style={[styles.text,{...customStyle}]}>
            {children}
        </Text>
    );
}


export default AppText;
