"use client";
import { TransactionContext } from "@/app/context/ContextProvider";
import { useContext } from "react";

export default function AddTransactionButton() {
  const context = useContext(TransactionContext);
  if (!context) return null;

  const { toggleForm } = context;

  return (
    <button
      className="self-center px-4 py-2 bg-pumpkin-spice mr-10 
      border-none rounded cursor-pointer hover:bg-pumpkin-dark "
      onClick={toggleForm}
    >
      + Add Transaction
    </button>
  );
}
