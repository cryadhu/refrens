import { useEffect, useState } from "react";
import { api } from "../api";

// assuming only GET method
const useService = <T>(url: string) => {
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    async function invoke() {
      try {
        setLoading(true);
        const data = await api.get(url);
        setResponse(data.data as unknown as T);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }
    invoke();
  }, [url]);

  return { response, loading, error };
};

export default useService;
