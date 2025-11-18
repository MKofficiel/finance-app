import BalanceCard from "./BalanceCard";

const summaryData = [
  {
    id: 1,
    label: "Current Balance",
    amount: "$4,836.00",
    variant: "dark",
  },
  {
    id: 2,
    label: "Income",
    amount: "$3,814.25",
    variant: "default",
  },
  {
    id: 3,
    label: "Expenses",
    amount: "$1,700.50",
    variant: "default",
  },
];

const OverviewSummary = () => {
  return (
    <div className="mb-8 grid grid-cols-1 gap-y-3 md:grid-cols-3 md:gap-x-6">
      {summaryData.map(({ id, label, amount, variant }) => (
        <BalanceCard key={id} label={label} amount={amount} variant={variant} />
      ))}
    </div>
  );
};

export default OverviewSummary;
