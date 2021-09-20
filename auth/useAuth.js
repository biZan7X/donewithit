import {useContext} from 'react';
import jwt_decode from 'jwt-decode';

import authStorage from '../api/storage';
import AuthContext from './context';

export const useAuth = () => {
  const {user, setUser} = useContext(AuthContext);

  const logIn = authToken => {
    const user = jwt_decode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return {user, logIn, logOut, setUser};
};
