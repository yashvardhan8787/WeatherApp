import React from "react";
import { Context } from "../../context/AppContext";
import { useContext } from "react";
import "./visualdata.css"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const VisualData = () => {
  const { forcastData} = useContext(Context);
  

  return (
    <div>
      <h3>weather forcast of next fifteen days </h3>
     <div className="chart">
     <LineChart width={1200} height={190} data={forcastData}>
        <CartesianGrid strokeDasharray="8 8" />
        <XAxis dataKey="datetime" />
        <YAxis />
        <Tooltip content="temp"/>
        <Legend />
        <Line
          type="monotone"
          dataKey="temp"
          stroke="#8884d8"
        />
      </LineChart>
     </div>
    </div>
  );
};

export default VisualData;
