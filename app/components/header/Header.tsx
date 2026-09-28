import AddTransactionButton from "./AddTransactionButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-ink-black text-mint-cream">
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-10 md:py-4">
        <div>
          <p className="font-montserrat font-bold text-2xl md:text-4xl">
            <span className="text-pumpkin-spice">Mon</span>eta
          </p>
          <p className="hidden sm:block text-sm text-lighter-text">
            Your personal finance tracker.
          </p>
        </div>

        <AddTransactionButton />
      </div>
    </header>
  );
}
