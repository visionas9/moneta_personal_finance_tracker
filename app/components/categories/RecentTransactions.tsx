"use client";
import { TransactionContext } from "@/app/context/ContextProvider";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { categoryEmojis } from "@/app/lib/constants";
import Link from "next/link";

export default function RecentTransactions() {
  const context = useContext(TransactionContext);
  if (!context) return null;

  const { transactions, handleDelete } = context;

  const pathname = usePathname();

  return (
    <div className="flex flex-col items-stretch bg-surface mx-10 mt-10 py-5 px-8 rounded-xl">
      <div className="flex items-center justify-between font-montserrat py-3 px-5">
        <h1 className="text-mint-cream font-bold text-xl">
          Recent Transactions
        </h1>
        {pathname === "/" ? (
          <Link
            href="/transactions"
            className="text-sm text-lighter-text hover:text-pumpkin-spice "
          >
            View all →
          </Link>
        ) : (
          ""
        )}
      </div>

      <div>
        {transactions.map((obj, index) => (
          <div
            key={`${obj.name}-${obj.date}`}
            className="flex items-center justify-between py-3 px-5 hover:bg-surface-highlight rounded"
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
                <button
                  onClick={() => handleDelete(index)}
                  className="font-roboto-mono text-mint-cream"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
