"use client";
import PieChartCustomizedLabel from "@/app/components/charts/MyPieChart";
import { useContext } from "react";
import { TransactionContext } from "@/app/context/ContextProvider";
import { categoryColors } from "@/app/lib/constants";
import { formatMoney } from "@/app/lib/format";

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
    <div className="bg-surface p-4 md:p-6 rounded-xl">
      <div className="flex items-center justify-between gap-3 font-montserrat">
        <h2 className="text-mint-cream font-bold">Spending by Category</h2>
        <p className="text-sm text-lighter-text">{formattedDate}</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
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
              <p className="font-roboto-mono text-danger ml-auto">
                -{formatMoney(category.total)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
