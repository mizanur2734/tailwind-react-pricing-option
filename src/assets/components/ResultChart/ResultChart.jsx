import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  {
    id: "stu_0000001",
    name: "Alice Rahman",
    class: 10,
    math: 88,
    english: 76,
    science: 91,
    history: 69,
    physics: 85,
    chemistry: 92,
  },
  {
    id: "stu_0000002",
    name: "Bashir Ahmed",
    class: 10,
    math: 72,
    english: 81,
    science: 79,
    history: 85,
    physics: 78,
    chemistry: 83,
  },
  {
    id: "stu_0000003",
    name: "Chowdhury Nila",
    class: 10,
    math: 93,
    english: 90,
    science: 97,
    history: 87,
    physics: 96,
    chemistry: 94,
  },
];

const ResultChart = () => {
  return (
    <div className="h-screen">
      <LineChart width={500} height={500} data={resultData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey={"chemistry"}></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;
