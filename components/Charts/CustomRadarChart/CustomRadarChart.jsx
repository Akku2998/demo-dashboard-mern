import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";

export function CustomRadarChart({ data }) {
  return (
    <RadarChart outerRadius={90} width={500} height={300} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="region" />
      <PolarRadiusAxis angle={30} />
      <Radar
        name="Intensity"
        dataKey="intensity"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Radar
        name="Relevence"
        dataKey="relevence"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.6}
      />
      <Radar
        name="Likelihood"
        dataKey="likelihood"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
}
