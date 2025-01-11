export const Button = ({
  variant = "primary",
  label = "Button",
  className = "",
  disabled = false,
}) => {
  const variants = {
    primary:
      "py-4 px-8 rounded-md bg-dark-cyan text-[18px] leading-[25px] font-fraunces font-black text-surface  hover:bg-[#66D2CF] transition-all disabled:bg-[#E2DEDB]",
  };
  return (
    <button className={`${variants[variant]} ${className}`} disabled={disabled}>
      {label && label}
    </button>
  );
};
