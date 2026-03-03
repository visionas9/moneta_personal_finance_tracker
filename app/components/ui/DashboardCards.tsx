"use client";
import { TransactionContext } from "@/app/context/ContextProvider";
import { useContext } from "react";
import SumCards from "@/app/components/ui/SumCards";

export default function DashboardCards() {
  const { transactions }: any = useContext(TransactionContext);

  const totalIncome = (transactions ?? [])
    .filter((t: any) => t.type === "income")
    .reduce((sum: number, t: any) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t: any) => t.type === "expense")
    .reduce((sum: number, t: any) => sum + t.amount, 0);

  const savingsRate =
    totalIncome > 0
      ? Math.round(((totalIncome - totalExpenses) / totalIncome) * 100)
      : 0;

  const totalBalance = totalIncome - totalExpenses;

  const cards = [
    {
      label: "TOTAL BALANCE",
      value: `$${totalBalance}`,
      color: totalBalance >= 0 ? "text-success" : "text-danger",
    },
    { label: "TOTAL INCOME", value: `$${totalIncome}`, color: "text-success" },
    {
      label: "TOTAL EXPENSES",
      value: `$${totalExpenses}`,
      color: "text-danger",
    },
    { label: "SAVINGS RATE", value: `${savingsRate}%`, color: "text-warning" },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 px-10 mt-8 ">
      {cards.map((card) => (
        <SumCards key={card.label} {...card} />
      ))}
    </div>
  );
}
