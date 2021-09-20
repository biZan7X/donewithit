import {create} from 'apisauce';

import cache from '../utility/cache';
import authStorage from './storage';

const apiClient = create({
  baseURL: 'http://localhost:9000/api',
});

apiClient.addAsyncRequestTransform(async request => {
  const authToken = authStorage.getToken();
  if (!authToken) return;
  request.headers['x-auth-token'] = authToken;
});

const get = apiClient.get;

//^ altering the get()
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    await cache.store(url, response.data); //* caching the response
    return response;
  }

  const data = await cache.get(url); //* retrieving the data from the cache
  return data ? {ok: true, data} : response;
};

export default apiClient;
