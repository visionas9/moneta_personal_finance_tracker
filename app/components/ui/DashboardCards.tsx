"use client";
import { TransactionContext } from "@/app/context/ContextProvider";
import { useContext } from "react";
import SumCards from "@/app/components/ui/SumCards";

export default function DashboardCards() {
  const { transactions = [] }: any = useContext(TransactionContext);

  const totalIncome = (transactions ?? [])
    .filter((t: any) => t.type === "income")
    .reduce((sum: number, t: any) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t: any) => t.type === "expense")
    .reduce((sum: number, t: any) => sum + t.amount, 0);

  const totalBalance = totalIncome - totalExpenses;

  const cards = [
    { label: "TOTAL BALANCE", value: `$${totalBalance}`, change: "+12%" },
    { label: "TOTAL INCOME", value: `$${totalIncome}`, change: "+5%" },
    { label: "TOTAL EXPENSES", value: `$${totalExpenses}`, change: "+8%" },
    { label: "SAVINGS RATE", value: "34%", change: "of income" },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 px-10 mt-8">
      {cards.map((card) => (
        <SumCards key={card.label} {...card} />
      ))}
    </div>
  );
}
