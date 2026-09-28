"use client";
import { TransactionContext } from "@/app/context/ContextProvider";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { categoryEmojis } from "@/app/lib/constants";
import { formatMoney } from "@/app/lib/format";
import Link from "next/link";

const capitalise = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

const shortDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

export default function RecentTransactions() {
  // Hooks first, before any early return.
  const context = useContext(TransactionContext);
  const pathname = usePathname();
  if (!context) return null;

  const { transactions, handleDelete, toggleForm, setTransactions } = context;

  function clearAll() {
    if (window.confirm("Delete all transactions? This can't be undone.")) setTransactions([]);
  }
  const onDashboard = pathname === "/";

  // Newest first. The index travels along, because delete works by position
  // in the stored list, not in this sorted copy.
  const sorted = transactions
    .map((transaction, index) => ({ transaction, index }))
    .sort((a, b) => b.transaction.date.localeCompare(a.transaction.date));
  const shown = onDashboard ? sorted.slice(0, 5) : sorted;

  return (
    <div className="flex flex-col bg-surface mx-4 md:mx-10 my-6 md:my-10 p-4 md:px-8 md:py-5 rounded-xl">
      <div className="flex items-center justify-between font-montserrat py-2 md:px-5">
        <h2 className="text-mint-cream font-bold text-lg md:text-xl">
          {onDashboard ? "Recent Transactions" : "All Transactions"}
        </h2>
        {onDashboard && transactions.length > 0 ? (
          <Link
            href="/transactions"
            className="text-sm text-lighter-text hover:text-pumpkin-spice"
          >
            View all →
          </Link>
        ) : null}
        {!onDashboard && transactions.length > 0 ? (
          <button
            onClick={clearAll}
            className="text-sm text-lighter-text hover:text-danger cursor-pointer transition"
          >
            Clear all
          </button>
        ) : null}
      </div>

      {shown.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-10 text-center">
          <p className="text-lighter-text">No transactions yet.</p>
          <button
            onClick={toggleForm}
            className="px-4 py-2 rounded-lg bg-pumpkin-spice text-ink-black font-semibold cursor-pointer transition hover:bg-pumpkin-dark"
          >
            + Add your first one
          </button>
        </div>
      ) : (
        <ul>
          {shown.map(({ transaction: obj, index }) => (
            <li
              key={`${obj.name}-${obj.date}-${index}`}
              className="flex items-center justify-between gap-3 py-3 md:px-5 hover:bg-surface-highlight rounded"
            >
              <div className="flex min-w-0 items-center gap-3 font-montserrat">
                <span className="text-3xl md:text-4xl" aria-hidden>
                  {categoryEmojis[obj.category] ?? "📦"}
                </span>
                <div className="min-w-0">
                  <p className="text-mint-cream truncate">{capitalise(obj.name)}</p>
                  <p className="text-lighter-text text-sm">
                    {capitalise(obj.category)}
                    {/* On a phone the date moves under the name. */}
                    <span className="sm:hidden"> · {shortDate(obj.date)}</span>
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-3 md:gap-5">
                <p className="hidden sm:block font-montserrat text-lighter-text text-sm">
                  {shortDate(obj.date)}
                </p>
                <p
                  className={`font-roboto-mono ${obj.type === "income" ? "text-success" : "text-danger"}`}
                >
                  {obj.type === "income" ? "+" : "-"}
                  {formatMoney(obj.amount)}
                </p>
                <button
                  onClick={() => handleDelete(index)}
                  aria-label={`Delete ${obj.name}`}
                  className="w-8 h-8 rounded-full text-lighter-text cursor-pointer transition hover:bg-danger/20 hover:text-danger"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
