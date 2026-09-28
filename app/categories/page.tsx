import IncomeAndExpenses from "../components/categories/IncomeAndExpenses";
import SpendingsCategory from "../components/categories/Spendings";

export default function CategoriesPage() {
  return (
    <div className="grid gap-6 px-4 md:px-10 mt-6 md:mt-10 pb-10 lg:grid-cols-2">
      <SpendingsCategory />
      <IncomeAndExpenses />
    </div>
  );
}
