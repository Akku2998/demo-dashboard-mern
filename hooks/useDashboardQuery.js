import { useEffect, useState } from "react";
import { fetchData } from "@/services";

export function useDashboardQuery(apiUrl) {
  const [data, setData] = useState();

  const fetchRequest = async (apiUrl) => {
    const data = await fetchData(apiUrl);
    setData(data);
  };

  useEffect(() => {
    fetchRequest(apiUrl);
  }, [apiUrl]);

  return { data, setData };
}
