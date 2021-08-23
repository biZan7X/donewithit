import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import AppText from '../AppText';
import styles from './styles';

const Card = ({image, title, subTitle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
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
