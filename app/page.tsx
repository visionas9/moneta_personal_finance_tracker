import SpendingsCategory from "./components/categories/Spendings";
import IncomeAndExpenses from "./components/categories/IncomeAndExpenses";
import RecentTransactions from "@/app/components/categories/RecentTransactions";
import DashboardCards from "./components/ui/DashboardCards";
import WelcomeBanner from "./components/ui/WelcomeBanner";

export default function MainPage() {
  return (
    <main>
      <WelcomeBanner />
      <DashboardCards />
      <div className="grid gap-6 px-4 md:px-10 mt-6 md:mt-10 lg:grid-cols-2">
        <SpendingsCategory />
        <IncomeAndExpenses />
      </div>

      <div>
        <RecentTransactions />
      </div>
    </main>
  );
}
