"use client";

import SimpleBarChart from "@/app/components/charts/MyBarChart";

export default function IncomeAndExpenses() {
  return (
    <div className="bg-surface p-4 md:p-6 rounded-xl">
      <div className="flex items-center justify-between gap-3 font-montserrat mb-4">
        <h2 className="text-mint-cream font-bold">Income vs Expenses</h2>
        <p className="text-sm text-lighter-text">Last 6 months</p>
      </div>

      <div>
        <SimpleBarChart />
      </div>
    </div>
  );
}
