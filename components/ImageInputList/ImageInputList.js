import React from 'react';
import {View} from 'react-native';

import ImageInput from '../ImageInput/ImageInput';
import styles from './styles';

const ImageInputList = ({imageUris = [], addImage, removeImage}) => {
  return (
    <View style={styles.container}>
      {imageUris &&
        imageUris.map(image => (
          <View style={styles.image} key={image}>
            <ImageInput imageUri={image} onChangeImage={removeImage} />
          </View>
        ))}
      <ImageInput onChangeImage={addImage} />
    </View>
  );
};

export default ImageInputList;
