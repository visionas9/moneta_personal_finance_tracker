import type { transactionStates } from "@/app/types";

// Five months of believable spending, dated back from today, so the charts
// have something to show a first-time visitor.
const MONTHLY: Omit<transactionStates, "date">[] = [
  { type: "income", name: "salary", amount: 3200, category: "income" },
  { type: "expense", name: "rent", amount: 1150, category: "housing" },
  { type: "expense", name: "groceries", amount: 236.4, category: "food" },
  { type: "expense", name: "metro card", amount: 45, category: "transport" },
  { type: "expense", name: "cinema", amount: 18.5, category: "entertainment" },
  { type: "expense", name: "pharmacy", amount: 27.9, category: "health" },
  { type: "expense", name: "dinner out", amount: 64, category: "food" },
];

// Day of the month each entry falls on, in the same order as MONTHLY.
const DAYS = [1, 2, 6, 9, 14, 19, 23];

function localDate(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function sampleTransactions(): transactionStates[] {
  const today = new Date();
  const result: transactionStates[] = [];

  for (let back = 4; back >= 0; back--) {
    MONTHLY.forEach((entry, i) => {
      const date = new Date(today.getFullYear(), today.getMonth() - back, DAYS[i]);
      // Nothing in the future: this month only gets what has already happened.
      if (date > today) return;
      // A little month-to-month variation, so the bars are not identical.
      const amount =
        entry.type === "income"
          ? entry.amount
          : Math.round(entry.amount * (0.85 + ((back * 7 + i) % 5) * 0.07) * 100) / 100;
      result.push({ ...entry, amount, date: localDate(date) });
    });
  }

  return result;
}
