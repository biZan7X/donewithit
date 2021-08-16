import {StyleSheet} from 'react-native';

import colors from '../../config/color';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  icon: {
    fontSize: 25,
    color: colors.medium,
    marginRight: 10,
  },
});
