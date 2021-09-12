import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import AppText from '../AppText';
import styles from './styles';

const Card = ({imageUrl, title, subTitle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <FastImage style={styles.image} source={{uri: imageUrl}} />
        <View style={styles.detailsContainer}>
          <AppText customStyle={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText customStyle={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
