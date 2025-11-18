import { useState } from "react";
import Logo from "../../ui/Logo";
import MenuMinimize from "./MenuMinimize";
import NavLinks from "./NavLinks";
import clsx from "clsx";

const Sidebar = () => {
  const [isMinimize, setIsMinimize] = useState(false);
  return (
    // <div className="bg-grey-900 max-lg:row-start-2 max-lg:rounded-tl-2xl max-lg:rounded-tr-2xl max-lg:px-4 max-lg:pt-2 md:pt-2 lg:rounded-tr-2xl lg:rounded-br-2xl lg:pt-[40px] lg:pr-6">
    <div
      style={{
        transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      }}
      className={clsx(
        "ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] bg-grey-900 relative z-600 overflow-hidden transition-all duration-300 ease-in-out max-lg:row-start-2 max-lg:rounded-tl-2xl max-lg:rounded-tr-2xl max-lg:px-4 max-lg:pt-2 md:pt-2 lg:rounded-tr-2xl lg:rounded-br-2xl lg:pt-[40px] lg:pr-6",
        isMinimize ? "lg:w-[120px]" : "lg:w-[300px]",
      )}
    >
      <Logo isMinimize={isMinimize} />
      <NavLinks isMinimize={isMinimize} />
      <MenuMinimize isMinimize={isMinimize} onMinimize={setIsMinimize} />
    </div>
  );
};

export default Sidebar;
