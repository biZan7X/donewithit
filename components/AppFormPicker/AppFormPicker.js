import React from 'react';
import {useFormikContext} from 'formik';

import AppPicker from '../AppPicker.js';
import ErrorMessage from '../ErrorMessage';

function AppFormPicker({items, name, placeholder}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={item => setFieldValue(name, item)}
        numberOfColumns={1}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
