import React from "react";
import { useEffect, useState } from "react";
import { selectToken } from "features/authSlice";
import { useSelector } from "react-redux";

const useFetch = (method, url, body) => {
  const [fetchData, setFetchData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const token = useSelector(selectToken);
  const [HeaderRequest, setHeaderRequest] = useState(null);
  const [isData, setIsData] = useState(false);

  const EditHeaderRequest = () => {
    const newHeaderRequest = {
      method: method,
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
        "Content-Type": "application/json",
      },
      body: body ? body : null,
    };
    setHeaderRequest(newHeaderRequest);
  };
  useEffect(() => {
    const retchRemoteData = async (url) => {
      setLoading(true);
      EditHeaderRequest()
      try {
        const response = await fetch(url, HeaderRequest);
        const fetchData = await response.json();
        setFetchData(fetchData);
        if(fetchData) setIsData(true)
      } catch (err) {
        setError(err);
        setIsData(false)
      }
      setLoading(false);
    };

    retchRemoteData(url);
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    EditHeaderRequest()
    try {
      const response = await fetch(url, HeaderRequest);
      const fetchData = await response.json();
      setFetchData(fetchData);
      if(fetchData) setIsData(true)

    } catch (err) {
      setError(err);
      setIsData(false)

    }
    setLoading(false);
  };


  return { fetchData, loading,isData, error, reFetch };
};

export default useFetch;
