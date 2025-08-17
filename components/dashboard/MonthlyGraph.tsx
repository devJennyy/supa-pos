import React from "react";
import SectionTitle from "../ui/section-title";
import { Chart } from "../ui/chart-area";

const MonthlyGraph = () => {
  return (
    <div className="w-full flex-1 flex flex-col gap-4">
      <SectionTitle title="Weekly Profit"/>
      <div className="w-full h-[100px] rounded-xl">
  <Chart />
</div>

    </div>
  );
};

export default MonthlyGraph;
