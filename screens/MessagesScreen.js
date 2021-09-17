import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
  {
    id: 1,
    title: 'Bizan',
    details: 'd1',
    image: require('../assets/blue.jpg'),
  },
  {
    id: 2,
    title: 'Bizan',
    details: 'd2',
    image: require('../assets/blue.jpg'),
  },
  {
    id: 3,
    title: 'Bizan',
    details: 'd3',
    image: require('../assets/blue.jpg'),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = messgae => {
    //TODO delete the message from the state
    //TODO update it to the server as well

    setMessages(messages.filter(m => m.id !== messgae.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.details}
            image={item.image}
            onPress={() => console.log('message recieved', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
