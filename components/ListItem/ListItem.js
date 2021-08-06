import React from 'react';
import {View,Image, TouchableHighlight} from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import styles from "./styles"
import colors from "../../config/color"
import AppText from '../AppText';

const ListItem = ({image,title,subTitle, onPress,renderRightActions}) => {
    return (
        <Swipeable renderRightActions={renderRightActions} >
            <TouchableHighlight underlayColor={colors.light} onPress={onPress} >
                <View style={styles.container}>
                    <Image style={styles.image} source={image} />
                    <View>
                        <AppText customStyle={styles.title}>{title}</AppText>
                        <AppText customStyle={styles.subTitle}>{subTitle}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}


export default ListItem;
