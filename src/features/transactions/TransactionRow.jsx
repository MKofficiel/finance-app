import React from "react";
import { formatDate, formatUSD } from "../../utils/helpers";
import clsx from "clsx";

//  {
//     id: 10,
//     name: "Charlie Electric Company",
//     category: "Bills",
//     date: "1 Aug 2024",
//     amount: -100.0,
//     avatar: "/avatars/electric.png",
//   },
const TransactionRow = ({
  transaction: { id, name, category, transactionDate, amount, avatar },
}) => {
  return (
    <div
      role="row"
      className="grid w-full items-center gap-x-[5.5px] gap-y-[4px] border-b py-4 last:border-0 max-md:grid-cols-[auto_1fr_1fr] max-md:grid-rows-2 md:grid-cols-[0.43fr_0.176fr_0.176fr_0.216fr]"
    >
      <div className="max-md:row-span-2 max-md:flex max-md:items-center md:hidden">
        <img
          src={avatar}
          className="block size-[32px] rounded-full"
          alt={name}
        />
      </div>

      <div className="flex items-center gap-[9.5px]">
        <img
          src={avatar}
          className="hidden size-[32px] rounded-full md:block"
          alt={name}
        />
        <p className="text-preset-4 truncate text-gray-900">{name}</p>
      </div>

      <div className="text-preset-5 truncate max-md:col-start-2 max-md:col-end-3">
        {category}
      </div>

      <div className="text-preset-5 max-md:justify-self-end">
        <p>{formatDate(transactionDate)}</p>
      </div>

      <div className="justify-self-end max-md:col-start-3 max-md:col-end-4 max-md:row-start-1">
        <p
          className={clsx(
            "text-preset-4",
            amount > 0 ? "text-green" : "text-gray-900",
          )}
        >
          {amount > 0 ? `+${formatUSD(amount)}` : formatUSD(amount)}
        </p>
      </div>
    </div>
  );
};

export default TransactionRow;
