import React, {useRef} from 'react';
import {ScrollView, View} from 'react-native';

import ImageInput from '../ImageInput/ImageInput';
import styles from './styles';

const ImageInputList = ({imageUris = [], addImage, removeImage}) => {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() =>
          scrollView.current.scrollToEnd({animated: true})
        }>
        <View style={styles.container}>
          {imageUris &&
            imageUris.map(image => (
              <View style={styles.image} key={image}>
                <ImageInput imageUri={image} onChangeImage={removeImage} />
              </View>
            ))}
          <ImageInput onChangeImage={addImage} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageInputList;
