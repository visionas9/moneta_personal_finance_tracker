import SumCards from "@/app/components/ui/SumCards";
import SpendingsCategory from "./components/categories/Spendings";
import IncomeAndExpenses from "./components/categories/IncomeAndExpenses";
import RecentTransactions from "@/app/components/categories/RecentTransactions";

const cards = [
  { label: "TOTAL BALANCE", value: "$4,280", change: "+12%" },
  { label: "TOTAL INCOME", value: "$6,500", change: "+5%" },
  { label: "TOTAL EXPENSES", value: "$2,220", change: "+8%" },
  { label: "SAVINGS RATE", value: "34%", change: "of income" },
];

export default function MainPage() {
  return (
    <main>
      <div className="grid grid-cols-4 gap-6 px-10 mt-8">
        {cards.map((card) => (
          <SumCards key={card.label} {...card} />
        ))}
      </div>

      <div className="flex items-stretch gap-6">
        <SpendingsCategory />
        <IncomeAndExpenses />
      </div>

      <div>
        <RecentTransactions />
      </div>
    </main>
  );
}
