import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const AnimationActivity = ({visible = false}) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        source={require('../../assets/animations/loader.json')}
        autoPlay={true}
        loop={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    opacity: 0.8,
    zIndex: 1,
  },
});

export default AnimationActivity;
