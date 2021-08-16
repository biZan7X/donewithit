import React from 'react';
import {View, Image, TouchableHighlight} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';

import styles from './styles';
import colors from '../../config/color';
import AppText from '../AppText';

const ListItem = ({
  image,
  title,
  subTitle,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent && <IconComponent />}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText customStyle={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText customStyle={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <FontAwesome
            style={{color: colors.medium, fontSize: 25}}
            icon={SolidIcons['caret-square-right']}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;
