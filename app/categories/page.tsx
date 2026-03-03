import IncomeAndExpenses from "../components/categories/IncomeAndExpenses";
import SpendingsCategory from "../components/categories/Spendings";

export default function CategoriesPage() {
  return (
    <div className="flex justify-between">
      <SpendingsCategory />
      <IncomeAndExpenses />
    </div>
  );
}
