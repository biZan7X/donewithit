import React from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import * as Progress from 'react-native-progress';

import AppText from '../components/AppText';
import color from '../config/color';

const UploadScreen = ({visible, progress}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar progress={progress} color={color.primary} width={200} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UploadScreen;
