import React from 'react';
import {SafeAreaView} from 'react-native';

import styles from './styles';

const Screen = ({children,style}) => {
    return (
        <SafeAreaView style={[styles.screen,style]} >
            {children}
        </SafeAreaView>
    );
}

export default Screen;
