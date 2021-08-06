import React from 'react';
import {View} from 'react-native';

import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
  } from 'react-native-fontawesome';

const Icon = ({name,size=40,backgroundColor="#000",iconColor="#fff"}) => {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size/2,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center"
        }} >
            <FontAwesome style={{color: iconColor,fontSize:size*0.5}} icon={SolidIcons[name]} />
        </View>
    );
}

export default Icon;
