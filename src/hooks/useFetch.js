import { useState, useEffect } from "react";

const useFetch = (configObj) => {
  const { axiosInstance, method, url, config = {} } = configObj;

  const [resData, setResData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...config,
          signal: controller.signal,
        });
        console.log(res); // TODO
        setResData(res);
      } catch (err) {
        console.log(err); // TODO
        setError(err);
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return { resData, error, loading };
};

export default useFetch;
