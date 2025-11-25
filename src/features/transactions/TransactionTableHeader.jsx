const TransactionTableHeader = () => {
  return (
    <div
      role="row"
      className="hidden w-full grid-cols-[0.43fr_0.176fr_0.176fr_0.216fr] border-b py-3 md:grid"
    >
      <div role="columnheader" className="text-preset-5">
        Recipient / Sender
      </div>
      <div role="columnheader" className="text-preset-5">
        Category
      </div>
      <div role="columnheader" className="text-preset-5">
        Transaction Date
      </div>
      <div role="columnheader" className="text-preset-5 justify-self-end">
        Amount
      </div>
    </div>
  );
};

export default TransactionTableHeader;
