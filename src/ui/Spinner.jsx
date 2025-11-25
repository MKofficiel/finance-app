const Spinner = ({ size = 70 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="mx-auto animate-spin rounded-full border-4 border-[#e4dfd9] border-t-[#b8b2ab]"
    />
  );
};

export default Spinner;
