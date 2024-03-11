import React from "react";
import "./card.css";
import moment from 'moment';

const ForcastCard = ({ data }) => {
  const dayName = moment(data?.valid_date).format("dddd");

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-img-details">
          <div className="day">
          <span >{dayName}</span>
          <span ><strong>{data?.valid_date}</strong></span>
          </div>
          <span className="image">
            <img
              height="70"
              width="70"
              alt={`Weather ${data?.weather?.description}`}
              src={`https://cdn.weatherbit.io/static/img/icons/${data?.weather?.icon}.png`}
            />
          </span>
        </div>
        <div className="info">
          <span className="description"><strong>{data?.weather.description}</strong></span>
          <span className="temp"><strong>Max Temp: {data?.max_temp}</strong></span>
          <span className="temp"><strong>Min Temp: {data?.min_temp}</strong></span>
        </div>
      </div>
    </div>
  );
};

export default ForcastCard;

