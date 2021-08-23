import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';

import colors from '../config/color';

const NewListingButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <FontAwesome
          icon={SolidIcons['plus-square']}
          style={{color: colors.white, fontSize: 35}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 28,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
});

export default NewListingButton;
