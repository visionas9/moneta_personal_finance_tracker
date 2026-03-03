"use client";
import { TransactionContext } from "@/app/context/ContextProvider";
import { useContext } from "react";
import type { transactionStates } from "../form/TransactionForm";

export default function RecentTransactions() {
  const { transactions }: any = useContext(TransactionContext);

  console.log(transactions);

  const categoryEmojis: Record<string, string> = {
    housing: "🏠",
    food: "🍔",
    transport: "🚌",
    health: "🏥",
    entertainment: "🎭",
    income: "💼",
    other: "⺟",
  };

  return (
    <div className="flex flex-col items-stretch bg-surface mx-10 mt-10 py-5 px-8 rounded-xl">
      <div className="flex items-center justify-between font-montserrat py-3 px-5">
        <h1 className="text-mint-cream font-bold text-xl">
          Recent Transactions
        </h1>
        <p className="text-sm text-lighter-text">View all →</p>
      </div>

      <div>
        {transactions.map((obj: any) => (
          <div
            key={`${obj.name}-${obj.date}`}
            className="flex items-center justify-between py-3 px-5 hover:bg-pumpkin-dark rounded"
          >
            <div className="flex items-center justify-start gap-3 font-montserrat">
              <span className="text-4xl">{categoryEmojis[obj.category]}</span>
              <div className="flex flex-col ">
                <p className="text-mint-cream">
                  {obj.name.charAt(0).toUpperCase() + obj.name.slice(1)}
                </p>
                <p className="text-lighter-text text-sm">
                  {obj.category.charAt(0).toUpperCase() + obj.category.slice(1)}
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-5">
                <p className="font-montserrat text-lighter-text text-sm">
                  {new Date(obj.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </p>
                <p
                  className={`font-roboto-mono ${obj.type === "income" ? "text-success" : "text-danger"}`}
                >
                  ${obj.amount}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
