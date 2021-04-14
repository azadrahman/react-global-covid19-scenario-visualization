import React, { useState } from "react";
import PieChartComponent from "./PieChartComponent";
import BarChartComponent from "./BarChartComponent";

export default function Form() {
  const [chart, setChart] = useState("");
  const [data, setData] = useState([]);
  const [caseDate, setCaseDate] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  // fetch api data
  const getData = async () => {
    const url = "https://api.covid19api.com/summary";

    const res = await fetch(url);
    const apiData = await res.json();

    const data = Object.entries(apiData.Global).reduce((arr, [key, value]) => {
      arr.push({
        name: key,
        value
      });

      return arr;
    }, []);
    data.pop();
    setData(data);
  };

  // onSubmit handle
  const onSubmit = e => {
    e.preventDefault();
    getData();
    setIsSubmit(true);
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <label>Choose Your Chart Type :</label>
        <select
          value={chart}
          name="chart"
          onChange={e => setChart(e.target.value)}
        >
          <option value="">Select chart</option>
          <option value="pie-chart">Pie Chart</option>
          <option value="bar-chart">Bar Chart</option>
        </select>
        <br />
        <br />
        <label>Result Type :</label>
        <select
          value={caseDate}
          name="case"
          onChange={e => setCaseDate(e.target.value)}
        >
          <option value=""> --Select-- </option>
          <option value="today-case">Today cases</option>
          <option value="yesterday-case">Yesterday cases</option>
          <option value="week-case">1 week ago cases</option>
        </select>
        <br />
        <br />
        <button type="submit" className="btn">
          Check
        </button>
      </form>
      {isSubmit && Rendering()}
    </div>
  );

  // rendering the charts
  function Rendering() {
    if (chart === "pie-chart") {
      if (caseDate === "today-case") {
        return <PieChartComponent data={data} />;
      }
      if (caseDate === "yesterday-case") {
        return (
          //<PieChartComponent data={data}/>
          <h4 className="error">only today case available</h4>
        );
      }
      if (caseDate === "week-case") {
        return (
          //<PieChartComponent data={data}/>
          <h4 className="error">only today case available</h4>
        );
      }
    } else if (chart === "bar-chart") {
      if (caseDate === "today-case") {
        return <BarChartComponent data={data} />;
      }
      if (caseDate === "yesterday-case") {
        return (
          //<PieChartComponent data={data}/>
          <h4 className="error">only today case available</h4>
        );
      }
      if (caseDate === "week-case") {
        return (
          //<PieChartComponent data={data}/>
          <h4 className="error">only today case available</h4>
        );
      }
    }
    return <h4 className="error">Please Select Types</h4>;
  }
}
