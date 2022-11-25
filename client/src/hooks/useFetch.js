import { useEffect, useState } from "react";
import { selectToken } from "features/authSlice";
import { useSelector } from "react-redux";

const useFetch = (type, url, body) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const token = useSelector(selectToken);

  const setHeaderRequest = {
    method: type,
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
      "Content-Type": "application/json",
    },
    body: body ? body : null,
  };
  useEffect(async () => {
    const fetchData = async (url) => {
      setLoading(true);
      try {
        const response = await fetch(url, setHeaderRequest);
        const data = await response.json();
        setData(data);
      } catch (e) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData(url);
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, setHeaderRequest);
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
