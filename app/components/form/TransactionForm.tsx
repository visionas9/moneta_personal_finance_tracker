"use client";
import React from "react";
import { TransactionContext } from "@/app/context/ContextProvider";
import { useContext, useEffect, useState } from "react";
import type { transactionStates } from "@/app/types";

const CATEGORIES = ["Housing", "Food", "Transport", "Health", "Entertainment", "Income", "Other"];

const today = () => new Date().toISOString().slice(0, 10);

export default function TransactionForm() {
  // Hooks first, before any early return.
  const context = useContext(TransactionContext);
  const [type, setType] = useState<"income" | "expense">("expense");
  const [name, setName] = useState("");
  // Kept as the typed text, so "12." can become "12.50" instead of snapping back.
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Housing");
  const [date, setDate] = useState(today);
  const [error, setError] = useState("");

  const toggleForm = context?.toggleForm;

  // Escape closes the form, like any dialog.
  useEffect(() => {
    if (!toggleForm) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && toggleForm();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggleForm]);

  if (!context) return null;
  const { setTransactions } = context;

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const value = Number(amount.replace(",", "."));

    if (!Number.isFinite(value) || value <= 0) {
      setError("Enter an amount above 0.");
      return;
    }

    const newTransaction: transactionStates = {
      type,
      name: name.trim().toLowerCase(),
      amount: Math.round(value * 100) / 100,
      category: category.toLowerCase(),
      date,
    };
    setTransactions((prevTransaction) => [...prevTransaction, newTransaction]);
    context?.toggleForm();
  }

  const inputClass =
    "w-full bg-coffee-bean text-mint-cream rounded-lg px-4 py-2 mt-1 mb-4 border border-lighter-text/20 outline-none focus:border-pumpkin-spice transition";

  const typeButton = (value: "income" | "expense", label: string, active: string) => (
    <button
      type="button"
      aria-pressed={type === value}
      onClick={() => setType(value)}
      className={`flex-1 py-2 rounded-lg border cursor-pointer transition ${type === value ? active : "border-lighter-text/40 text-lighter-text"}`}
    >
      {label}
    </button>
  );

  return (
    // A tap on the dimmed background closes the form; a tap inside does not.
    <div
      className="fixed inset-0 bg-black/60 flex items-end sm:items-center justify-center z-50 font-roboto-mono"
      onClick={context.toggleForm}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-transaction-title"
        className="bg-surface w-full sm:max-w-md max-h-[90dvh] overflow-y-auto rounded-t-2xl sm:rounded-xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex items-center justify-between text-mint-cream pb-4">
            <h2 id="add-transaction-title" className="text-xl sm:text-2xl">
              Add Transaction
            </h2>
            <button
              type="button"
              aria-label="Close"
              className="w-9 h-9 rounded-full text-lighter-text hover:bg-surface-highlight hover:text-mint-cream transition cursor-pointer"
              onClick={context.toggleForm}
            >
              ✕
            </button>
          </div>

          <p className="text-sm text-lighter-text">TYPE</p>
          <div className="flex gap-3 py-2 mb-2">
            {typeButton("expense", "↓ Expense", "bg-danger/20 border-danger text-danger")}
            {typeButton("income", "↑ Income", "bg-success/20 border-success text-success")}
          </div>

          <label htmlFor="name" className="text-sm text-lighter-text">
            NAME
          </label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Rent, Groceries"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            className={inputClass}
            required
          />

          <label htmlFor="amount" className="text-sm text-lighter-text">
            AMOUNT ($)
          </label>
          <input
            type="text"
            inputMode="decimal"
            id="amount"
            placeholder="0.00"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setError("");
            }}
            autoComplete="off"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? "amount-error" : undefined}
            className={`${inputClass} ${error ? "border-danger mb-1" : ""}`}
            required
          />
          {error ? (
            <p id="amount-error" className="text-sm text-danger mb-4">
              {error}
            </p>
          ) : null}

          <label htmlFor="category" className="text-sm text-lighter-text">
            CATEGORY
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={inputClass}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

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

          <button
            type="submit"
            disabled={!name.trim() || !amount || !date}
            className="w-full mt-4 py-3 bg-pumpkin-spice text-ink-black font-semibold rounded-lg cursor-pointer transition hover:bg-pumpkin-dark disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Save Transaction
          </button>
        </form>
      </div>
    </div>
  );
}
