import React from "react";
import SectionTitle from "../ui/section-title";
import { Chart } from "../ui/chart-area";

const MonthlyGraph = () => {
  return (
    <div className="w-full flex-1 flex flex-col gap-4">
      <SectionTitle title="Categories" variant="secondary" />
      <div className="lg:min-h-[60vh] min-h-[50vh] flex-1 rounded-xl md:min-h-min">
        <Chart />
      </div>
    </div>
  );
};

export default MonthlyGraph;
