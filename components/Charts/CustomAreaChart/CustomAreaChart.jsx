import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

export function CustomAreaChart({ data }) {
  return (
    <AreaChart
      width={1150}
      height={400}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorXv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#C04000" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#C04000" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="date" tickFormatter={(d) => new Date(d).toDateString()} />
      <YAxis />
      <Area
        type="monotone"
        dataKey="intensity"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
      <Area
        type="monotone"
        dataKey="likelihood"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />

      <Area
        type="monotone"
        dataKey="relevance"
        stroke="#C04000"
        fillOpacity={1}
        fill="url(#colorXv)"
      />
      <Tooltip
        labelFormatter={(value) => `Date: ${new Date(value).toDateString()}`}
        formatter={(value) => value || 0}
      />
    </AreaChart>
  );
}
