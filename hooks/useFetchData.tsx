import axios from "axios";
import { useState } from "react";

// interface UseFetchDataProps {
//   url: string;
//   id?: string;
// }

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (url: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      setData(response?.data.data);
    } catch (error) {
      console.error(error);
      setData([]);
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };
  return { fetchData, data, isLoading, error };
};

export default useFetchData;
