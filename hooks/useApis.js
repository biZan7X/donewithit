import {useState} from 'react';

export default useApis = apiCall => {
  const [data, setdata] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const res = await apiCall(...args);
    setLoading(false);

    setError(!res.ok);
    setdata(res.data);

    return res;
  };

  return {data, error, loading, request};
};
