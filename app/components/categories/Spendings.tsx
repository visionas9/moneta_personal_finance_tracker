"use client";
import PieChartCustomizedLabel from "@/app/components/charts/MyPieChart";
import { useContext } from "react";
import { TransactionContext } from "@/app/context/ContextProvider";
import { categoryColors } from "@/app/lib/constants";

export default function SpendingsCategory() {
  const context = useContext(TransactionContext);
  if (!context) return null;

  const { transactions } = context;

  const rawDate =
    transactions.length > 0 ? transactions[transactions.length - 1].date : null;

  const formattedDate = rawDate
    ? new Date(rawDate).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      })
    : "No transactions";

  const spendingsObjects = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc: Record<string, number>, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const categoriesData = Object.entries(spendingsObjects).map(
    ([name, total]) => ({
      name,
      total: total as number,
    }),
  );

  return (
    <div className="w-[45%] bg-surface mt-10 ml-10 py-4 px-4 rounded-xl">
      <div className="flex items-center justify-between font-montserrat">
        <h1 className="text-mint-cream font-bold">Spending by Category</h1>
        <p className="text-sm text-lighter-text">{formattedDate}</p>
      </div>

      <div className="flex items-center gap-8">
        <PieChartCustomizedLabel />

        <div className="w-full">
          {categoriesData.map((category) => (
            <div key={category.name} className="flex items-center gap-4 py-2">
              <p className="text-lighter-text flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-sm inline-block"
                  style={{ backgroundColor: categoryColors[category.name] }}
                ></span>
                {category.name}
              </p>
              <p className="text-roboto-mono text-danger ml-auto">
                -{category.total}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
