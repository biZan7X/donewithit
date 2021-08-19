import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';

import styles from './styles';

const ImageInput = ({imageUri}) => {
  return (
    <View style={styles.container}>
      {!imageUri && (
        <FontAwesome style={styles.icon} icon={SolidIcons['camera-retro']} />
      )}
      {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
    </View>
  );
};

export default ImageInput;
