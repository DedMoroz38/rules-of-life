import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = ({ url, method, body = null, headers = null }) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  console.log(method, url);

  const fetchData = async () => {
    try {
      const response = await axios[method](url, { withCredentials: true });
      setResponse(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { loading, response, error };
};
