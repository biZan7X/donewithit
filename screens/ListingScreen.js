import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import colors from "../config/color"
import Card from "../components/Card"
import Screen from '../components/Screen';

const listings = [
    {
        id: 1,
        title: "Nice red jacket",
        price: "$100",
        image: require("../assets/jacket.jpg")
    },
    {
        id: 2,
        title: "Couche in good condition",
        price: "$1000",
        image: require("../assets/couch.jpg")
    }
]

const ListingScreen = () => {
    return (
        <Screen style={styles.screen} >
            <FlatList
                data={listings}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <Card title={item.title} subTitle={item.price} image={item.image} />}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    }
})

export default ListingScreen;
