export const Button = ({
  variant = "primary",
  label = "Button",
  className = "",
  disabled = false,
}) => {
  const variants = {
    primary:
      "py-4 px-[75.5px] rounded-md bg-dark-cyan text-lg leading-[25px] font-fraunces font-black text-surface flex items-center justify-center hover:bg-[#66D2CF] transition-all disabled:bg-[#E2DEDB]",
  };
  return (
    <button className={`${variants[variant]} ${className}`} disabled={disabled}>
      {label && label}
    </button>
  );
};
