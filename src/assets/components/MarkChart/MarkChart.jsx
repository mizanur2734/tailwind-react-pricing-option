import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarkChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  // data processing for the chart
  const markChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.student_id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
    };
    const avg = (student.physics + student.chemistry + student.math) / 2;
    student.avg = avg;
    return student;
  });
  console.log(markChartData);

  return (
    <div>
      <BarChart width={500} height={300} data={markChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="avg" fill="yellow"></Bar>
        <Bar dataKey="chemistry" fill="blue"></Bar>
      </BarChart>
    </div>
  );
};

export default MarkChart;
