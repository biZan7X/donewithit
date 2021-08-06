import React from 'react';
import {View} from 'react-native';

import styles from "./styles"
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
  } from 'react-native-fontawesome';

const ListItemDeleteAction = () => {
    return (
        <View style={styles.container} >
            <FontAwesome style={{fontSize:25}} icon={SolidIcons.trashAlt} />
        </View>
    );
}

export default ListItemDeleteAction;
