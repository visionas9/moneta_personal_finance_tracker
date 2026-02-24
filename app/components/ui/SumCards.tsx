type sumCardsProps = {
  label: string;
  value: string;
  change: string;
};

export default function SumCards({ label, value, change }: sumCardsProps) {
  return (
    <div
      className=" flex flex-col items-center justify-center bg-surface py-5 
    gap-3 text-mint-cream rounded-xl "
    >
      <p className="font-nunito text-lighter-text text-sm ">{label}</p>
      <p className="font-roboto-mono text-2xl font-bold">{value}</p>
      <p className="font-roboto-mono text-sm">{change}</p>
    </div>
  );
}
