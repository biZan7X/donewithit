import {StyleSheet} from 'react-native';
import color from '../../config/color';

export default StyleSheet.create({
  container: {
    backgroundColor: color.primary,
    height: 50,
    top: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 2,
  },
  text: {
    color: color.white,
  },
});
