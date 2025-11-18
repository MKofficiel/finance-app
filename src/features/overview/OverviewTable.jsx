const OverviewTable = () => {
  return (
    <div className="grid min-h-dvh grid-cols-1 lg:grid-cols-2 lg:grid-rows-[218px_1fr_1fr] lg:gap-6">
      <div className="bg-orange">POTS</div>
      <div className="bg-green lg:col-start-2 lg:row-start-1 lg:row-end-3">
        BUDGETS
      </div>
      <div className="bg-yellow lg:row-span-2">TRANSACTIONS</div>
      <div className="bg-black">RECENT BILLS</div>
    </div>
  );
};

export default OverviewTable;
