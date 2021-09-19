import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

const key = 'authToken';

const storeToken = async authToken => {
  try {
    await AsyncStorage.setItem(key, authToken);
  } catch (err) {
    console.log(err);
  }
};

const getToken = async () => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (err) {
    console.log(err);
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    console.log(err);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwt_decode(token) : null;
};

export default {storeToken, getUser, removeToken};
