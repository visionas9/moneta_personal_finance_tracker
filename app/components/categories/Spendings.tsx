import PieChartCustomizedLabel from "@/app/components/MyPieChart";

const categories = [
  { color: "#f5853f", name: "Housing", value: "720$" },
  { color: "#6247aa", name: "Food", value: "510$" },
  { color: " #a0a8a0", name: "Transport", value: "380$" },
  { color: "#4caf7d", name: "Health", value: "250$" },
  { color: "#e05c5c", name: "Other", value: "360$" },
];

export default function SpendingsCategory() {
  return (
    <div className="w-[45%] bg-surface mt-10 ml-10 py-5 px-8 rounded-xl">
      <div className="flex items-center justify-between font-montserrat">
        <h1 className="text-mint-cream font-bold">Spending by Category</h1>
        <p className="text-sm text-lighter-text">Feb 2026</p>
      </div>

      <div className="flex items-center justify-center ">
        <PieChartCustomizedLabel />

        <div>
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between gap-6"
            >
              <p className="text-lighter-text">
                <span
                  className="w-3 h-3 rounded-sm inline-block ml-5"
                  style={{ backgroundColor: category.color }}
                ></span>
                {category.name}
              </p>
              <p className="text-roboto-mono text-mint-cream">
                {category.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
