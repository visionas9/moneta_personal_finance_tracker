"use client";
import {
  Pie,
  PieChart,
  PieLabelRenderProps,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
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
  if (
    name === "No Data" ||
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
    <PieChart width={300} height={300}>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        labelLine={false}
        label={renderCustomizedLabel}
        isAnimationActive={isAnimationActive}
      >
        {chartData[0].name !== "No Data" && (
          <LabelList
            dataKey="name"
            position="outside"
            offset={15}
            fill="#555"
            stroke="none"
          />
        )}
      </Pie>
      <RechartsDevtools />
    </PieChart>
  );
}
