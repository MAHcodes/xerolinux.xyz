import { useState, useEffect } from "react";

const useFetch = (configObj) => {
  const { axiosInstance, method, url, config = {} } = configObj;

  const [resData, setResData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const configString = JSON.stringify(config);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...JSON.parse(configString),
          signal: controller.signal,
        });
        console.log(res.data); // TODO
        setResData(res.data);
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
  }, [axiosInstance, method, url, configString]);

  return { resData, error, loading };
};

export default useFetch;
