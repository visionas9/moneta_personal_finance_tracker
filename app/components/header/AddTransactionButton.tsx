"use client";
import { TransactionContext } from "@/app/context/ContextProvider";
import { useContext } from "react";

export default function AddTransactionButton() {
  const context = useContext(TransactionContext);
  if (!context) return null;

  const { toggleForm } = context;

  return (
    <button
      className="shrink-0 px-4 py-2 bg-pumpkin-spice text-ink-black font-semibold rounded-lg cursor-pointer transition hover:bg-pumpkin-dark"
      onClick={toggleForm}
    >
      + Add<span className="hidden sm:inline"> Transaction</span>
    </button>
  );
}
