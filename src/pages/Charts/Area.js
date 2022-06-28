import React from "react";
import { ChartsHeader } from "../../components";
import AreaChart from "../../components/Charts/AreaChart";

function Area() {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg  rounded-3xl">
      <ChartsHeader category="Area" title="Inflation Rate in Percentage" />
      <div className="w-full">
        <AreaChart />
      </div>
    </div>
  );
}

export default Area;
