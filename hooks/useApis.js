import {useState} from 'react';

export default useApis = apiCall => {
  const [data, setdata] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const res = await apiCall(...args);
    setLoading(false);
    if (!res.ok) return setError(true);

    setError(false);
    setdata(res.data);
  };

  return {data, error, loading, request};
};
