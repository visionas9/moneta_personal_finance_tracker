const data = [
  {
    emoji: "🏠",
    type: "Rent Payment",
    category: "Housing",
    date: "Feb 01",
    transaction: "-$1,200",
    isIncome: false,
  },
  {
    emoji: "💼",
    type: "Salary",
    category: "Income",
    date: "Feb 01",
    transaction: "+$4,500",
    isIncome: true,
  },
  {
    emoji: "🍔",
    type: "Groceries",
    category: "Food",
    date: "Feb 05",
    transaction: "-$145",
    isIncome: false,
  },
  {
    emoji: "🚌",
    type: "Monthly Pass",
    category: "Transport",
    date: "Feb 07",
    transaction: "-$85",
    isIncome: false,
  },
  {
    emoji: "💻",
    type: "Freelance Work",
    category: "Income",
    date: "Feb 10",
    transaction: "+$2,000",
    isIncome: true,
  },
];

export default function RecentTransactions() {
  return (
    <div className="flex flex-col items-stretch bg-surface mx-10 mt-10 py-5 px-8 rounded-xl">
      <div className="flex items-center justify-between font-montserrat py-3 px-5">
        <h1 className="text-mint-cream font-bold text-xl">
          Recent Transactions
        </h1>
        <p className="text-sm text-lighter-text">View all →</p>
      </div>

      <div>
        {data.map((obj): any => (
          <div
            key={obj.type}
            className="flex items-center justify-between py-3 px-5 hover:bg-pumpkin-dark rounded"
          >
            <div className="flex items-center justify-start gap-3 font-montserrat">
              <span className="text-4xl">{obj.emoji}</span>
              <div className="flex flex-col ">
                <p className="text-mint-cream">{obj.type}</p>
                <p className="text-lighter-text text-sm">{obj.category}</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-5">
                <p className="font-montserrat text-lighter-text text-sm">
                  {obj.date}
                </p>
                <p
                  className={`font-roboto-mono ${obj.isIncome ? "text-success" : "text-danger"}`}
                >
                  {obj.transaction}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
