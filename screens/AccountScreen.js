import React, {useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

import colors from '../config/color';
import routes from '../navigations/routes';

import AuthContext from '../auth/context';
import authStorage from '../api/storage';

const menuItems = [
  {
    title: 'My list',
    icon: {
      name: 'list-alt',
      backgroundColor: colors.primary,
    },
    targetScreen: '',
  },
  {
    title: 'My email',
    icon: {
      name: 'paper-plane',
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

const AccountScreen = ({navigation}) => {
  const {user, setUser} = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    authStorage.removeToken();
  };
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require('../assets/blue.jpg')}
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
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={() => (
          <Icon name="sign-out-alt" backgroundColor="#ffe66d" />
        )}
        onPress={handleLogout}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.white,
  },
});

export default AccountScreen;
