"use client";
import { TransactionContext } from "@/app/context/ContextProvider";
import { useContext, useState } from "react";

export default function TransactionForm() {
  const { toggleForm }: any = useContext(TransactionContext);
  const [type, setType] = useState<"income" | "expense">("income");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // save data
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-surface rounded-xl p-8 w-[400px] text-roboto-mono">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <h1>Add Transaction</h1>
            <button onClick={toggleForm}>X</button>
          </div>
          <div className="flex gap-3">
            <div
              onClick={() => setType("income")}
              className={`flex-1 text-center py-2 rounded-lg border cursor-pointer transition ${type === "income" ? "bg-success/20 border-success text-success" : "border-lighter-text text-lighter-text"}`}
            >
              ↑ Income
            </div>
            <div
              onClick={() => setType("expense")}
              className={`flex-1 text-center py-2 rounded-lg border cursor-pointer transition ${type === "expense" ? "bg-danger/20 border-danger text-danger" : "border-lighter-text text-lighter-text"}`}
            >
              ↓ Expense
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
