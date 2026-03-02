import SpendingsCategory from "./components/categories/Spendings";
import IncomeAndExpenses from "./components/categories/IncomeAndExpenses";
import RecentTransactions from "@/app/components/categories/RecentTransactions";
import DashboardCards from "./components/ui/DashboardCards";

export default function MainPage() {
  return (
    <main>
      <DashboardCards />
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
