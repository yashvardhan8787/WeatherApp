import React, { createContext, useEffect, useState } from "react";
import { getWeatherData } from "../utils/Api";

const Context = createContext();

const AppContext = ({ children }) => {
  const [city, setCity] = useState("delhi");
  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState();
  const [lat ,setLat] =useState();
  const [lon,setLon]=useState();
  const [forcastData, setForcastData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getWeatherData(city);
        setInitialData(data);
        setLat(data?.location?.lat);
        setLon(data?.location?.lon);
        console.log('working');
        console.log(data); // Log the data, not initialData
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  

  return (
    <Context.Provider value={{ loading, initialData , city , setCity,lat,lon ,forcastData, setForcastData}}>
      {children}
    </Context.Provider>
  );
};

export { AppContext, Context };
