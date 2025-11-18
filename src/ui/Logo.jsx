import clsx from "clsx";

const Logo = ({ isMinimize }) => {
  return (
    <img
      src={isMinimize ? "/images/logo-small.svg" : "/images/logo-large.svg"}
      className={clsx(
        "mb-16 hidden h-[21.76px] w-[121.45px] lg:block",
        !isMinimize && "pl-8",
      )}
      alt="logo finance"
    />
  );
};

export default Logo;
