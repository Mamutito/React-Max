import { useEffect, useState } from "react";

export default function useFetch(fetchFn, initialValue) {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(initialValue);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setFetchedData(data);
        setError({
          message: error.message || "Error fetching data",
        });
      }
      setIsLoading(false);
    };
    fetchData();
  }, [fetchFn]);
  return {
    isLoading,
    fetchedData,
    error,
    setFetchedData,
  };
}
