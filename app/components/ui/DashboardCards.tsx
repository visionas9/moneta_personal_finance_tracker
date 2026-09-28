"use client";
import { TransactionContext } from "@/app/context/ContextProvider";
import { useContext } from "react";
import SumCards from "@/app/components/ui/SumCards";
import { formatMoney } from "@/app/lib/format";

export default function DashboardCards() {
  const context = useContext(TransactionContext);
  if (!context) return null;

  const { transactions } = context;

  const totalIncome = (transactions ?? [])
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const savingsRate =
    totalIncome > 0
      ? Math.round(((totalIncome - totalExpenses) / totalIncome) * 100)
      : 0;

  const totalBalance = totalIncome - totalExpenses;

  const cards = [
    {
      label: "TOTAL BALANCE",
      value: formatMoney(totalBalance),
      color: totalBalance >= 0 ? "text-success" : "text-danger",
    },
    { label: "TOTAL INCOME", value: formatMoney(totalIncome), color: "text-success" },
    {
      label: "TOTAL EXPENSES",
      value: formatMoney(totalExpenses),
      color: "text-danger",
    },
    { label: "SAVINGS RATE", value: `${savingsRate}%`, color: "text-warning" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 px-4 md:px-10 mt-6 md:mt-8">
      {cards.map((card) => (
        <SumCards key={card.label} {...card} />
      ))}
    </div>
  );
}
