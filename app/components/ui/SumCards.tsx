type sumCardsProps = {
  label: string;
  value: string;
  color: string;
};

export default function SumCards({ label, value, color }: sumCardsProps) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center bg-surface px-2 py-4 md:py-5
    gap-2 md:gap-3 text-mint-cream rounded-xl transition hover:bg-surface-highlight"
    >
      <p className="font-nunito text-lighter-text text-xs md:text-sm">{label}</p>
      <p className={`font-roboto-mono text-lg md:text-2xl font-bold break-all ${color}`}>{value}</p>
    </div>
  );
}
