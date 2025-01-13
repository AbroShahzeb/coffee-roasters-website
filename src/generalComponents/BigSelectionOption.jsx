export const BigSelectionOption = ({
  isSelected = false,
  title = "Option",
  description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  onClick,
}) => {
  return (
    <button
      className={`px-7 py-8 min-h-[140px] md:min-h-[250px] rounded-lg ${
        isSelected
          ? "bg-dark-cyan text-surface"
          : "bg-[#F4F1EB] text-dark-grey-blue"
      } hover:bg-pale-orange transition-all flex flex-col items-start gap-6 cursor-pointer text-left`}
      onClick={() => onClick && onClick(title)}
    >
      <h3 className="text-[24px] leading-[32px] font-fraunces  font-black">
        {title}
      </h3>
      <p className="text-body  font-normal font-barlow text-left">
        {description}
      </p>
    </button>
  );
};
