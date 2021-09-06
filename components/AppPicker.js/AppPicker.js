import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';

import styles from './styles';
import AppText from '../AppText';
import Screen from '../Screen';
import PickerItem from '../PickerItem';
import {useFormikContext} from 'formik';

const AppPicker = ({
  icons,
  items,
  numberOfColumns = 1,
  placeholder,
  PickerItemComponent = PickerItem,
  selectedItem,
  onSelectItem,
  width = '100%',
  name,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {setFieldValue, values} = useFormikContext();

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, {width}]}>
          {icons && (
            <FontAwesome style={styles.icon} icon={SolidIcons[icons]} />
          )}
          {values[name] ? (
            <AppText customStyle={styles.text}>{values[name].label}</AppText>
          ) : (
            <AppText customStyle={styles.placeholder}>{placeholder}</AppText>
          )}

          <FontAwesome
            style={[styles.icon, {marginRight: 0}]}
            icon={SolidIcons['caret-square-down']}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({item}) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setFieldValue(name, item);
                  setModalVisible(false);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;
