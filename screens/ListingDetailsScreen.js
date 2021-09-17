import React from 'react';
import {View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

import colors from '../config/color';

const ListingDetailsScreen = ({route}) => {
  const listing = route.params;
  return (
    <View>
      <FastImage style={styles.image} source={{uri: listing.images[0].url}} />
      <View style={styles.detailsContainer}>
        <AppText customStyle={styles.title}>{listing.title}</AppText>
        <AppText customStyle={styles.price}>{listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/blue.jpg')}
            title="Johny"
            subTitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    paddingVertical: 20,
  },
});

export default ListingDetailsScreen;
