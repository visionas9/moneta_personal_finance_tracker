"use client";
import { useContext } from "react";
import { TransactionContext } from "@/app/context/ContextProvider";
import { sampleTransactions } from "@/app/lib/sampleData";

// Shown only on an empty dashboard, so a first visit is not a page of $0s.
export default function WelcomeBanner() {
  const context = useContext(TransactionContext);
  if (!context || !context.isLoaded || context.transactions.length > 0) return null;

  const { setTransactions, toggleForm } = context;

  return (
    <div className="mx-4 md:mx-10 mt-6 md:mt-8 flex flex-col gap-4 rounded-xl border border-pumpkin-spice/40 bg-surface p-5 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="font-montserrat font-bold text-mint-cream">Welcome to Moneta</p>
        <p className="text-sm text-lighter-text">
          Your data stays in this browser. Add your own transactions, or load a few months of
          sample data to see the charts.
        </p>
      </div>
      <div className="flex shrink-0 gap-3">
        <button
          onClick={() => setTransactions(sampleTransactions())}
          className="px-4 py-2 rounded-lg bg-pumpkin-spice text-ink-black font-semibold cursor-pointer transition hover:bg-pumpkin-dark"
        >
          Load sample data
        </button>
        <button
          onClick={toggleForm}
          className="px-4 py-2 rounded-lg border border-lighter-text/40 text-mint-cream cursor-pointer transition hover:border-pumpkin-spice"
        >
          Add my own
        </button>
      </div>
    </div>
  );
}
