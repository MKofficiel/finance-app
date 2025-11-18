import clsx from "clsx";

const BalanceCard = ({ label, amount, variant = "default" }) => {
  return (
    <div
      className={clsx(
        "space-y-3 rounded-xl px-5 py-5 md:px-6 md:py-6",
        variant === "default" ? "bg-white" : "bg-grey-900",
      )}
    >
      <p
        className={clsx(
          "text-[14px] leading-normal",
          variant === "default" ? "text-grey-500" : "text-white",
        )}
      >
        {label}
      </p>
      <p
        className={clsx(
          "text-[32px] leading-[1.2] font-bold",
          variant === "default" ? "text-grey-900" : "text-white",
        )}
      >
        {amount}
      </p>
    </div>
  );
};

export default BalanceCard;
