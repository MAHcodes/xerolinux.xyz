import { useState } from "react";
import axios from "axios";

const useFetch = ({ URL }) => {
  const [resData, setResData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  return <div>useFetch</div>;
};

export default useFetch;
