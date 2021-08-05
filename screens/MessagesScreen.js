import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import ListItem from '../components/ListItem';
import Screen from "../components/Screen"

const MessagesScreen = () => {

    const messages = [
        {
            id: 1,
            title: "Bizan",
            details: "d1",
            image: require('../assets/mosh.jpg'),
        },
        {
            id: 2,
            title: "Bizan",
            details: "d2",
            image: require('../assets/mosh.jpg'),
        },
        {
            id: 3,
            title: "Bizan",
            details: "d3",
            image: require('../assets/mosh.jpg'),
        },

    ]

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({item}) => (
                    <ListItem 
                        title={item.title}
                        subTitle={item.details}
                        image={item.image}
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({})

export default MessagesScreen;
