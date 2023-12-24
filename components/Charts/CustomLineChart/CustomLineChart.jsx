import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function CustomLineChart({ data }) {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      // margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="intensity" stroke="#8884d8" dot={false} />
      {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
      {/* <XAxis dataKey="name" /> */}
      {/* <YAxis /> */}
      {/* <Tooltip /> */}
    </LineChart>
  );
}
