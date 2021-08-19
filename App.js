import React, {useState} from 'react';
import {View, StyleSheet, Button, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import Screen from './components/Screen';
import ImageInputList from './components/ImageInputList';
import ListingEditScreen from './screens/ListingEditScreen';

const App = () => {
  const [imageUris, setImageUris] = useState([]);

  const addImage = uri => {
    setImageUris([...imageUris, uri]);
  };

  const removeImage = uri => {
    setImageUris(imageUris.filter(imageUri => imageUri != uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        addImage={addImage}
        removeImage={removeImage}
      />
    </Screen>
  );
};

export default App;
