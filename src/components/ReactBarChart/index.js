import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./index.css";

const data = [
  {
    group_name: "Group A",
    boys: 200,
    girls: 400,
  },
  {
    group_name: "Group B",
    boys: 3000,
    girls: 500,
  },
  {
    group_name: "Group C",
    boys: 1000,
    girls: 1500,
  },
  {
    group_name: "Group D",
    boys: 700,
    girls: 1200,
  },
];

const ReactBarChart = () => {
  const DataFormatter = (number) => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`;
    }
    return number.toString();
  };

  return (
    <div className="bar-chart-container">
      <ResponsiveContainer width="80%" height={500}>
        <BarChart data={data} margin={{ top: 5 }}>
          <XAxis
            dataKey="group_name"
            tick={{ stroke: "blue", strokeWidth: 1 }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{ stroke: "red", strokeWidth: 0 }}
          />
          <Legend
            wrapperStyle={{
              padding: 10,
            }}
          />
          <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="20%" />
          <Bar dataKey="girls" name="Girls" fill="orange" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReactBarChart;
