"use client";
import React from "react";
import { TransactionContext } from "@/app/context/ContextProvider";
import { useContext, useState, useEffect } from "react";


type transactionStates = {
  type: "income" | "expense";
  name: string;
  amount: number;
  category: string;
  date: string;
};

export default function TransactionForm() {
  const { toggleForm, transactions, setTransactions }: any =
    useContext(TransactionContext);
  const [type, setType] = useState<"income" | "expense">("income");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState("Housing");
  const [date, setDate] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newTransaction: transactionStates = {
      type,
      name: name.toLowerCase(),
      amount,
      category: category.toLowerCase(),
      date,
    };
    setTransactions((prevTransaction: transactionStates[]) => [
      ...prevTransaction,
      newTransaction,
    ]);
    toggleForm();
  }

  useEffect(() => {
    console.log(transactions);
  }, [transactions]);

  const inputClass =
    "w-full bg-coffee-bean text-mint-cream rounded-lg px-4 py-2 mt-1 mb-4 border border-lighter-text/20 outline-none focus:border-pumpkin-spice transition";

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 font-roboto-mono">
      <div className="bg-surface rounded-xl p-8 w-[400px] text-roboto-mono">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between text-mint-cream text-2xl py-5">
            <h1>Add Transaction</h1>
            <button
              type="button"
              className="bg-pumpkin-spice p-1 rounded "
              onClick={toggleForm}
            >
              X
            </button>
          </div>

          <span className="text-sm text-lighter-text">
            TYPE
            <div className="flex gap-3 py-2">
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
          </span>

          <div>
            <label htmlFor="name" className="text-sm text-lighter-text">
              NAME
            </label>
            <input
              type="text"
              id="name"
              placeholder="e.g. Rent, Bills"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="amount" className="text-sm text-lighter-text">
              AMOUNT ($)
            </label>
            <input
              type="text"
              id="amount"
              placeholder="0.0"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              autoComplete="off"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="text-sm text-lighter-text">
              CATEGORY
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={inputClass}
              required
            >
              <option value="Housing">Housing</option>
              <option value="Transport">Transport</option>
              <option value="Health">Health</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Income">Income</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="date" className="text-sm text-lighter-text">
              DATE
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={inputClass}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 bg-pumpkin-spice text-mint-cream rounded-lg cursor-pointer hover:bg-pumpkin-dark/80 transition"
          >
            Save Transaction
          </button>
        </form>
      </div>
    </div>
  );
}
