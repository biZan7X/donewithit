import React from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

import color from '../config/color';

const UploadScreen = ({visible, progress, done}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar progress={progress} color={color.primary} width={200} />
        ) : (
          <LottieView
            source={require('../assets/animations/done.json')}
            autoPlay
            loop={false}
            style={styles.done}
            onAnimationFinish={done}
          />
        )}
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
  done: {
    width: 150,
  },
});

export default UploadScreen;
