"use client";

import SimpleBarChart from "@/app/components/MyBarChart";

export default function IncomeAndExpenses() {
  return (
    <div className="w-[45%] bg-surface mt-10 mr-10 py-5 px-8 rounded-xl">
      <div className="flex items-center justify-between font-montserrat">
        <h1 className="text-mint-cream font-bold">Income vs Expenses</h1>
        <p className="text-sm text-lighter-text">Last 6 months</p>
      </div>

      <div>
        <SimpleBarChart />
      </div>
    </div>
  );
}
