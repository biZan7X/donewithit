import React from 'react';
import {TouchableOpacity} from 'react-native';

import AppText from '../AppText';
import styles from "./styles"

const PickerItem = ({label,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText customStyle={styles.text} >{label}</AppText>
        </TouchableOpacity>
    );
}

export default PickerItem;
