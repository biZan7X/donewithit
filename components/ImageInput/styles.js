import {StyleSheet} from 'react-native';

import colors from '../../config/color';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 100,
  },
  icon: {
    color: colors.medium,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
