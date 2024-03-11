import React, { useContext } from "react";
import "./WeatherDetail.css";
import { Context } from "../../context/AppContext";

const WeatherDetail = () => {
  const date = new Date();
  const options = { weekday: "long" };
  const today = date.toLocaleString("en-US", options);
  const { initialData } = useContext(Context);

  return (
    <div className="WeatherDetail">
      <div className="detail">
        <div className="temp">
          <div>
            <img
              src={initialData?.current?.condition?.icon}
              className="weatherlogo"
              alt=""
            />
          </div>
          <div className="tempretaure">{initialData?.current?.temp_c} <span>&#176;</span>C</div>
         
        </div>

        <div className="otherdetails">
          <div className="Precipitation">
            Precipitation:{initialData?.current?.precip_in}%
          </div>
          <div className="humidity">
            Humidity:{initialData?.current?.humidity}%
          </div>
          <div className="windspeed">
            wind:{initialData?.current?.wind_mph}mph
          </div>
        </div>
      </div>




      <div className="weather">
        <div className="weatherheading">Weather</div>
        <div className="day">{initialData?.location?.name}</div>
        <div className="day">{today}</div>
        <div className="weather-conditon">
          {initialData?.current?.condition?.text}
        </div>
      </div>
    </div>
  );
};

export default WeatherDetail;
