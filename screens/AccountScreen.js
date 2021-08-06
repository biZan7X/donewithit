import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

import colors from '../config/color';

const menuItems = [
  {
    title: 'My list',
    icon: {
      name: 'list-alt',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My email',
    icon: {
      name: 'paper-plane',
      backgroundColor: colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="Bizan"
          subTitle="biswanathtewari.me"
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponent={() => (
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              )}
            />
          )}
        />
      </View>
      <ListItem title="Log Out" IconComponent={() => <Icon name="sign-out-alt" backgroundColor="#ffe66d" />} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.white,
  }
});

export default AccountScreen;
