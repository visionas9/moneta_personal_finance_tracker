type sumCardsProps = {
  label: string;
  value: string;
  color: string;
};

export default function SumCards({ label, value, color }: sumCardsProps) {
  return (
    <div
      className=" flex flex-col items-center justify-center bg-surface py-5 
    gap-3 text-mint-cream rounded-xl hover:bg-surface-highlight"
    >
      <p className="font-nunito text-lighter-text text-sm ">{label}</p>
      <p className={`font-roboto-mono text-2xl font-bold ${color}`}>{value}</p>
    </div>
  );
}
