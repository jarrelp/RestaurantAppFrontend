import React from "react";
import { AreaBarLineChartData } from "../data/ChartData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  return (
    <ResponsiveContainer width="99%" height="99%">
      <BarChart
        data={AreaBarLineChartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#ADC5A2" />
        <Bar dataKey="amt" stackId="a" fill="#888CB6" />
        <Bar dataKey="uv" fill="#AB9976" />
      </BarChart>
    </ResponsiveContainer>
  );
}
