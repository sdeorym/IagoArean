import { createContext, useCallback, useContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const api = {
  loadData: async () => {
    const response = await fetch("/data/");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  },
};

export const DataProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  // const [last, setLast] = useState(null);
  const getData = useCallback(async () => {
    try {
      setData(await api.loadData());
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    if (data) return;
    getData();
  }, [data]);
  
  return (
    <DataContext.Provider
      value={{
        data,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

export default DataContext;
