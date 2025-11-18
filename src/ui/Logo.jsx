const Logo = ({ isMinimize }) => {
  return (
    <img
      src={isMinimize ? "/images/logo-small.svg" : "/images/logo-large.svg"}
      className="mb-16 hidden  lg:block lg:pl-8"
      alt="logo finance"
    />
  );
};

export default Logo;
