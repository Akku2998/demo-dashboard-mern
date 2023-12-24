import React, { useState } from "react";
import {
  HomePage,
  CustomLineChart,
  CustomAreaChart,
  CustomDatePicker,
  CustomRadarChart,
} from "@/components";
import { useDashboardQuery } from "@/hooks";

export default function Home() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const { data } = useDashboardQuery(
    `api/dashboard/get?${new URLSearchParams({
      startDate: value.startDate || "",
      endDate: value.endDate || "",
    })}`
  );
  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  console.log(data);

  const intensityChart = data?.map((d) => ({
    intensity: d.intensity,
    likelihood: d.likelihood,
    relevance: d.relevance,
    date: d.added,
  }));

  const vsChartData = data?.map((d) => ({
    intensity: d.intensity,
    likelihood: d.likelihood,
    relevance: d.relevance,
    region: d.region,
    date: d.added,
  }));

  const likelihood = data?.map((d) => ({
    likelihood: d.likelihood,
    date: d.added,
  }));

  const relevance = data?.map((d) => ({
    relevance: d.relevance,
    date: d.added,
  }));

  return (
    <HomePage>
      <div className="flex justify-between mb-8">
        <div className="bg-white p-8 rounded shadow-md border border-grey-500">
          <div className="flex justify-between mb-8">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Intensity vs Likelihood vs Relevance
            </h2>
            <CustomDatePicker
              value={value}
              handleValueChange={handleValueChange}
            />
          </div>
          <CustomAreaChart data={vsChartData} />
        </div>
      </div>

      <div className="flex justify-between mb-8">
        <div className="bg-white p-8 rounded shadow-md border border-grey-500">
          <CustomRadarChart data={vsChartData} />
        </div>
        <div className="bg-white p-8 rounded shadow-md border border-grey-500">
          <CustomLineChart data={intensityChart} />
        </div>
      </div>
      <div className="flex justify-between mb-8">
        <div className="bg-white p-8 rounded shadow-md border border-grey-500">
          <CustomLineChart data={intensityChart} />
        </div>
        <div className="bg-white p-8 rounded shadow-md border border-grey-500">
          <CustomLineChart data={intensityChart} />
        </div>
      </div>
    </HomePage>
  );
}
