import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

const BASE_URL = "https://hrf-asylum-be-b.herokuapp.com/cases";

/**
 * TODO: Ticket 2:
 * - Use axios to fetch the data
 * - Store the data
 * - Populate the graphs with the stored data
 */
const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState(testData);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useLocalStorage({ graphData, setGraphData });

  const getFiscalData = async () => {
    // TODO: Replace this with functionality to retrieve the data from the fiscalSummary endpoint
      try {
        const response = await axios.get(`${BASE_URL}/fiscalSummary`);
        if (!response.data.yearResults) {
          response.data.yearResults = [];
        }
        return response.data;

      } catch (error) {
        console.error("Trouble fetching fiscal data:", error)
        return null
      }
  };

  const getCitizenshipResults = async () => {
    // TODO: Replace this with functionality to retrieve the data from the citizenshipSummary endpoint
    try {
      const response = await axios.get(`${BASE_URL}/citizenshipSummary`)
      return response.data;
    } catch (error) {
      console.error("Trouble fetching citizenship results", error)
      return null
    }
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  const fetchData = async () => {
    // TODO: fetch all the required data and set it to the graphData state
    try {
      const [fiscalData, citizenshipData] = await Promise.all([
        getFiscalData(),
        getCitizenshipResults()
      ]);

      if (fiscalData && citizenshipData) {
        setGraphData({
          ...fiscalData,
          citizenshipResults: citizenshipData
        });
    }
  } catch (error) {
    console.error("Error fetching data", error);
  } finally {
    setIsDataLoading(false);
  }
};

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () => {
    if (!graphData?.yearResults) return [];
    return graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year));
  }
    

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
