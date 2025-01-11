export const BigSelectionOption = ({
  isSelected = false,
  title = "Option",
  description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
}) => {
  return (
    <div
      className={`px-7 py-8 min-h-[250px] rounded-lg ${
        isSelected ? "bg-dark-cyan" : "bg-[#F4F1EB]"
      } hover:bg-pale-orange transition-all flex flex-col items-start gap-6 cursor-pointer`}
    >
      <h3 className="text-[24px] leading-[32px] font-fraunces text-dark-grey-blue font-black">
        {title}
      </h3>
      <p className="text-body text-dark-grey-blue font-normal font-barlow">
        {description}
      </p>
    </div>
  );
};
