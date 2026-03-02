"use client";
import PieChartCustomizedLabel from "@/app/components/charts/MyPieChart";
import { useContext } from "react";
import { TransactionContext } from "@/app/context/ContextProvider";

export default function SpendingsCategory() {
  const { transactions = [] }: any = useContext(TransactionContext);

  // 1. Get the raw date string from the latest transaction
  const rawDate =
    transactions.length > 0 ? transactions[transactions.length - 1].date : null;

  // 2. Format it to "Month YYYY"
  const formattedDate = rawDate
    ? new Date(rawDate).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
        timeZone: "UTC", // Use UTC to prevent "day-shifting" bugs
      })
    : "No transactions";

  const spendingsObjects = transactions
    .filter((t: any) => t.type === "expense")
    .reduce((acc: any, t: any) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const categoriesData = Object.entries(spendingsObjects).map(
    ([name, total]) => ({
      name,
      total: total as number,
    }),
  );

  const categoryColors: Record<string, string> = {
    housing: "#f5853f",
    food: "#6247aa",
    transport: "#a0a8a0",
    health: "#4caf7d",
    entertainment: "#c77dff",
    income: "#2ecc71",
    other: "#e05c5c",
  };

  return (
    <div className="w-[45%] bg-surface mt-10 ml-10 py-5 px-8 rounded-xl">
      <div className="flex items-center justify-between font-montserrat">
        <h1 className="text-mint-cream font-bold">Spending by Category</h1>
        <p className="text-sm text-lighter-text">{formattedDate}</p>
      </div>

      <div className="flex items-center justify-center ">
        <PieChartCustomizedLabel />

        <div>
          {categoriesData.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between gap-8 py-2"
            >
              <p className="text-lighter-text">
                <span
                  className="w-3 h-3 rounded-sm inline-block mr-3"
                  style={{ backgroundColor: categoryColors[category.name] }}
                ></span>
                {category.name}
              </p>
              <p className="text-roboto-mono text-danger">-{category.total}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
