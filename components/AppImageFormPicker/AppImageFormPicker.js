import React from 'react';
import {useFormikContext} from 'formik';
import {View} from 'react-native';

import ImageInputList from '../ImageInputList';
import ErrorMessage from '../ErrorMessage';

const AppImageFormPicker = ({name}) => {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  const imageUris = values[name];

  const addImage = uri => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const removeImage = uri => {
    setFieldValue(
      name,
      imageUris.filter(imageUri => imageUri != uri),
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        addImage={addImage}
        removeImage={removeImage}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppImageFormPicker;
