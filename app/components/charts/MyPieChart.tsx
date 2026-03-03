"use client";
import { Pie, PieChart, PieLabelRenderProps, LabelList } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { TransactionContext } from "@/app/context/ContextProvider";
import { useContext } from "react";

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
  // Hides the percentage label if it's our "No Data" placeholder
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

export const categoryColors: Record<string, string> = {
  housing: "#f5853f",
  food: "#6247aa",
  transport: "#a0a8a0",
  health: "#4caf7d",
  entertainment: "#c77dff",
  income: "#2ecc71",
  other: "#e05c5c",
};

export default function PieChartCustomizedLabel({
  isAnimationActive = true,
}: {
  isAnimationActive?: boolean;
}) {
  const { transactions }: any = useContext(TransactionContext);

  // 1. Group and sum the expenses safely
  const groupedExpenses = transactions
    .filter((t: any) => t.type === "expense")
    .reduce((acc: any, t: any) => {
      // FIXED: Safely default to 0 to prevent NaN errors
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  // 2. Map to Recharts format
  let chartData = Object.entries(groupedExpenses).map(([name, value]) => ({
    name,
    value: value as number,
    fill: categoryColors[name.toLowerCase()] || "#8884d8",
  }));

  // 3. Fallback for Empty State
  if (chartData.length === 0) {
    chartData = [{ name: "No Data", value: 1, fill: "#e0e0e0" }];
  }

  return (
    <PieChart width={200} height={200}>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        labelLine={false}
        label={renderCustomizedLabel}
        isAnimationActive={isAnimationActive}
      >
        {/* Only shows external labels if we actually have data */}
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
