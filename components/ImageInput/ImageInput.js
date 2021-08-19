import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';

import styles from './styles';

const ImageInput = ({imageUri, onChangeImage}) => {
  //* LAUNCHING THE IMAGE LIBRARY
  const chooseImage = () => {
    const options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'photo',
      quality: 0.5,
    };

    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        alert('The image selection was cancelled');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        onChangeImage(response.assets[0].uri); //* grabbing the image from the gallery and storing the location
        console.log('response', JSON.stringify(response));
      }
    });
  };

  const handlePress = () => {
    if (!imageUri) chooseImage();
    else
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        {
          text: 'Yes',
          onPress: () => onChangeImage(imageUri),
        },
        {
          text: 'No',
        },
      ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <FontAwesome style={styles.icon} icon={SolidIcons['camera-retro']} />
        )}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;
