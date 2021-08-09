import React from 'react';
import {SafeAreaView, View} from 'react-native';

import styles from './styles';

const Screen = ({children,style}) => {
    return (
        <SafeAreaView style={[styles.screen,style]} >
            <View style={style} >
                {children}
            </View>
        </SafeAreaView>
    );
}

export default Screen;
