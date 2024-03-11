import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../context/AppContext';
import axios from 'axios';
import ForcastCard from '../forcastcard/ForcastCard';
import "./forcastSlider.css"

const ForcastSlider = () => {
  const { lon, lat , forcastData, setForcastData} = useContext(Context);
   

  useEffect(() => {
    // Call the function
    fetchForecastData();
  }, [lat, lon]);

  const fetchForecastData = async () => {
    const options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
      params: {
        lat:lat ,
        lon: lon ,
        units: 'metric',
      },
      headers: {
        'X-RapidAPI-Key': '15f1623b3bmshe8ee42041e0a654p102db9jsn734228227335',
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setForcastData(response?.data?.data || []);
      console.log(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='slider'>
      {forcastData.map((forecast, index) => (
        <ForcastCard key={index} data={forecast} />
      ))}
    </div>
  );
};

export default ForcastSlider;
