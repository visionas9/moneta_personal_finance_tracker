"use client";
import {
  Pie,
  PieChart,
  PieLabelRenderProps,
  ResponsiveContainer,
} from "recharts";
import { TransactionContext } from "@/app/context/ContextProvider";
import { useContext } from "react";
import { categoryColors } from "@/app/lib/constants";

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}: PieLabelRenderProps & { name?: string }) => {
  // Small slices would print their percentages on top of each other.
  if (
    name === "No Data" ||
    (percent ?? 0) < 0.06 ||
    cx == null ||
    cy == null ||
    innerRadius == null ||
    outerRadius == null
  ) {
    return null;
  }
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const ncx = Number(cx);
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const ncy = Number(cy);
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > ncx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieChartCustomizedLabel({
  isAnimationActive = true,
}: {
  isAnimationActive?: boolean;
}) {
  const context = useContext(TransactionContext);
  if (!context) return null;

  const { transactions } = context;

  const groupedExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc: Record<string, number>, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  let chartData = Object.entries(groupedExpenses).map(([name, value]) => ({
    name,
    value: value as number,
    fill: categoryColors[name.toLowerCase()] || "#8884d8",
  }));

  if (chartData.length === 0) {
    chartData = [{ name: "No Data", value: 1, fill: "#e0e0e0" }];
  }

  return (
    <PieChart
      style={{ width: "100%", maxWidth: 260, aspectRatio: 1 }}
      responsive
    >
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        labelLine={false}
        stroke="#2a1f26"
        label={renderCustomizedLabel}
        isAnimationActive={isAnimationActive}
      >
      </Pie>
    </PieChart>
  );
}
