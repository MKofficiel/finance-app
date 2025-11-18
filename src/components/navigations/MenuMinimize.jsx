import clsx from "clsx";

const MenuMinimize = ({ onMinimize, isMinimize }) => {
  return (
    <div className="hidden h-[calc(70dvh-80px)] w-full lg:flex lg:items-end">
      <button
        onClick={() => onMinimize((prev) => !prev)}
        className="flex min-h-14 w-full cursor-pointer items-center gap-4 px-8"
      >
        <img
          src="/images/icon-minimize-menu.svg"
          className="h-[24px] w-[24px]"
          alt=""
        />

        <span
          className={clsx(
            "text-[16px] leading-normal font-bold text-nowrap transition-opacity duration-200",
            isMinimize ? "w-0 opacity-0" : "w-auto opacity-100",
          )}
        >
          Minimize Menu
        </span>
      </button>
    </div>
  );
};

export default MenuMinimize;
