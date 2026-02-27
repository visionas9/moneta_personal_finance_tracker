import TransactionForm from "@/app/components/form/TransactionForm";
import AddTransactionButton from "./AddTransactionButton";

export default function Header() {
  return (
    <div className="flex justify-between py-4 bg-ink-black text-mint-cream">
      <div className="flex flex-1 flex-col items-center justify-center ">
        <h1 className=" font-montserrat font-bold text-4xl">
          <span className="text-pumpkin-spice">Mon</span>eta
        </h1>
        <p className="text-lighter-text">Your personal finance tracker.</p>
      </div>

      <AddTransactionButton />
    </div>
  );
}
