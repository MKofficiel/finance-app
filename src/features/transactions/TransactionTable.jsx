import Spinner from "../../ui/Spinner";
import TransactionRow from "./TransactionRow";
import TransactionsTableOperations from "./TransactionsTableOperations";
import TransactionTableHeader from "./TransactionTableHeader";
import { useTransactions } from "./useTransaction";

const TransactionTable = () => {
  const { data: transactions, isPending } = useTransactions();

  if (isPending) return <Spinner />;
  return (
    <div className="mb-6 w-full rounded-xl bg-white px-4 py-6 md:mb-8 md:p-8 lg:px-10">
      <TransactionsTableOperations />
      <TransactionTableHeader />

      <div className="grid grid-cols-1">
        {transactions.map((transaction) => (
          <TransactionRow key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default TransactionTable;
