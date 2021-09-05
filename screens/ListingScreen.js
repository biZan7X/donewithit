import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import colors from '../config/color';

import Card from '../components/Card';
import Screen from '../components/Screen';
import routes from '../navigations/routes';

import listingApi from '../api/listing';

const ListingScreen = ({navigation}) => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    loadListings();
    console.log('listings' + listings);
  }, []);

  const loadListings = async () => {
    const res = await listingApi.getListings();
    setListings(res.data);
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTINGDETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
