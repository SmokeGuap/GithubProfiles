import { useState, useEffect } from 'react';

function useFetch(URL) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!URL) return;
    setLoading(true);
    fetch(URL)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [URL]);

  return {
    loading,
    data,
    error,
  };
}
export default useFetch;
