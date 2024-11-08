import axios from "axios";
import { useState } from "react";

// interface UseFetchDataProps {
//   url: string;
//   id?: string;
// }

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (url: string) => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response?.data);
    } catch (error) {
      console.error(error);
      setData([]);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };
  return { fetchData, data, loading, error };
};

export default useFetchData;
