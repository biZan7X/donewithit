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

const AppPicker = ({
  icons,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
  width = '100%',
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, {width}]}>
          {icons && (
            <FontAwesome style={styles.icon} icon={SolidIcons[icons]} />
          )}
          {selectedItem ? (
            <AppText customStyle={styles.text}>{selectedItem.label}</AppText>
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
            renderItem={({item}) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  onSelectItem(item);
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
