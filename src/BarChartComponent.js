import React, { PureComponent } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function BarChartComponent({ data }) {
  return (
    <BarChart
      fontSize={14}
      width={700}
      height={300}
      data={data}
      margin={{
        top: 15,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={24}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 5, right: 5 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="6 6" />
      <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
  );
}
