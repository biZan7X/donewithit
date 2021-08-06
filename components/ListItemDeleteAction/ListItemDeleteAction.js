import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';

import styles from "./styles"
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
  } from 'react-native-fontawesome';

const ListItemDeleteAction = ({onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress} >
            <View style={styles.container} >
                <FontAwesome style={{fontSize:25}} icon={SolidIcons.trashAlt} />
            </View>
        </TouchableWithoutFeedback>
        
    );
}

export default ListItemDeleteAction;
