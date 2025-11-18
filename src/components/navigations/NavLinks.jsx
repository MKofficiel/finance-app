import { NavLink, useLocation } from "react-router";
import { sideBarLinks } from "../../constants";
import clsx from "clsx";

const NavLinks = ({ isMinimize }) => {
  const pathname = useLocation().pathname;
  console.log(pathname);

  console.log(pathname);
  return (
    <nav className="flex items-center md:gap-[8px] lg:flex-col lg:items-start lg:gap-1">
      {sideBarLinks.map(({ label, path, icon }) => {
        const isActive = pathname.includes(path);
        const Icon = icon;

        return (
          // <NavLink
          //   className={clsx(
          //     "flex w-full flex-col items-center gap-1 rounded-tr-lg border-transparent px-4 pt-2 pb-3 font-bold text-gray-300 max-lg:rounded-tl-lg max-lg:border-b-4 lg:flex-row lg:gap-4 lg:rounded-tr-2xl lg:rounded-br-2xl lg:border-l-4 lg:pt-4 lg:pl-8",
          //     isActive && "bg-beige-100 border-green! text-gray-900",
          //   )}
          //   to={path}
          // >
          <NavLink
            className={clsx(
              "flex w-full flex-col items-center gap-1 rounded-tr-lg border-transparent px-4 pt-2 pb-3 font-bold text-gray-300 max-lg:rounded-tl-lg max-lg:border-b-4 lg:grid lg:grid-cols-[auto_1fr] lg:gap-4 lg:rounded-tr-2xl lg:rounded-br-2xl lg:border-l-4 lg:pt-4 lg:pl-8",
              isActive && "bg-beige-100 border-green! text-gray-900",
            )}
            to={path}
          >
            <Icon
              className={clsx(
                "text-grey-300 h-[24px] w-[24px]",
                isActive && "text-green!",
              )}
            />

            <span
              className={clsx(
                "hidden text-[12px] leading-normal whitespace-nowrap transition-opacity duration-300 md:block lg:text-[16px]",
                isMinimize ? "w-0 opacity-0" : "h-auto w-auto opacity-100",
              )}
            >
              {label}
            </span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NavLinks;
