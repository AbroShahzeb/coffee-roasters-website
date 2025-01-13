export const StepCircle = ({ circleFill = "#FEFCF7" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
    >
      <circle
        cx="15.5"
        cy="15.5"
        r="14.5"
        fill={circleFill}
        stroke="#0E8784"
        stroke-width="2"
      />
    </svg>
  );
};
