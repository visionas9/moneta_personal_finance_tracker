"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { TransactionContext } from "@/app/context/ContextProvider";
import { useContext } from "react";

// #endregion
const SimpleBarChart = () => {
  const context = useContext(TransactionContext);
  if (!context) return null;

  const { transactions } = context;

  const today = new Date();

  const monthlyData = Array.from({ length: 6 }, (_, i) => {
    const date = new Date(today.getFullYear(), today.getMonth() - i, 1);

    return {
      name: date.toLocaleDateString("en-US", { month: "short" }),
      monthIndex: date.getMonth(),
      year: date.getFullYear(),
      income: 0,
      expenses: 0,
    };
  }).reverse();

  if (transactions && transactions.length > 0) {
    transactions.forEach((transaction) => {
      const date = new Date(transaction.date);
      const month = date.getMonth();
      const year = date.getFullYear();

      const entry = monthlyData.find(
        (m) => m.monthIndex === month && m.year === year,
      );

      if (entry) {
        if (transaction.type === "income") {
          entry.income += transaction.amount;
        } else if (transaction.type === "expense") {
          entry.expenses += transaction.amount;
        }
      }
    });
  }

  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: "700px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={monthlyData}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="rgba(160,168,160,0.2)" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip
        contentStyle={{ background: "#2a1f26", border: "none", borderRadius: 8 }}
        cursor={{ fill: "rgba(255,255,255,0.05)" }}
      />
      <Legend />
      <Bar
        dataKey="income"
        fill="#4caf7d"
        radius={[10, 10, 0, 0]}
      />
      <Bar
        dataKey="expenses"
        fill="#e05c5c"
        radius={[10, 10, 0, 0]}
      />
    </BarChart>
  );
};

export default SimpleBarChart;
