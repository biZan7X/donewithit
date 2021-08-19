import React, {useState} from 'react';
import {View, StyleSheet, Button, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import Screen from './components/Screen';
import ImageInput from './components/ImageInput';
import ListingEditScreen from './screens/ListingEditScreen';

const App = () => {
  const [imageUri, setImageUri] = useState(null);

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
    };

    //* LAUNCHING THE IMAGE LIBRARY
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
        setImageUri(response.assets[0].uri); //* grabbing the image from the gallery and storing the location
        console.log('response', JSON.stringify(response));
      }
    });
  };

  const rednerImage = () => {
    if (imageUri)
      return (
        <Image source={{uri: imageUri}} style={{height: 100, width: 100}} />
      );
    else
      return (
        <Image
          source={require('./assets/jacket.jpg')}
          style={{height: 100, width: 100}}
        />
      );
  };

  return (
    <Screen>
      <Button title="Choose an image" onPress={() => chooseImage()} />
      {rednerImage()}
      <ImageInput imageUri={imageUri} setImageUri={setImageUri} />
    </Screen>
  );
};

export default App;
