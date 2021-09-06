import React from 'react';
import LottieView from 'lottie-react-native';

const AnimationActivity = ({visible = false}) => {
  if (!visible) return null;

  return (
    <LottieView
      source={require('../../assets/animations/loader.json')}
      autoPlay={true}
      loop={true}
    />
  );
};

export default AnimationActivity;
