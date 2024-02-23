import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

import "./index.css";

const data = [
  {
    count: 809680,
    language: "Telugu",
  },
  {
    count: 4555697,
    language: "Hindi",
  },
  {
    count: 12345657,
    language: "English",
  },
];

const ReactPieChart = () => (
  <div className="pie-chart">
    <ResponsiveContainer width="80%" height={500}>
      <PieChart>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Telugu" fill="#fecba6" />
          <Cell name="Hindi" fill="#b3d23f" />
          <Cell name="English" fill="#a44c9e" />
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default ReactPieChart;
