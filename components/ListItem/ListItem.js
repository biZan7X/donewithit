import React from 'react';
import {View,Image} from 'react-native';

import styles from "./styles"
import AppText from '../AppText';

const ListItem = ({image,title,subTitle}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
                <AppText customStyle={styles.title}>{title}</AppText>
                <AppText customStyle={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}


export default ListItem;
