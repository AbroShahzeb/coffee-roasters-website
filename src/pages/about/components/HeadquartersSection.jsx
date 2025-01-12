import illustrationUK from "../../../assets/about/desktop/illustration-uk.svg";
import illustrationCanada from "../../../assets/about/desktop/illustration-canada.svg";
import illustrationAustralia from "../../../assets/about/desktop/illustration-australia.svg";

const headQuartersData = [
    {
        id: 0,
        illustration: illustrationUK,
        name: "United Kingdom",
        line1: '68  Asfordby Rd',
        line2: ''
    }
]

export const HeaderQuartersSection = () => {
  return (
    <section className="px-6 md:px-20 xl:max-w-[1045px] xl:ml-[165px] xl:px-0">
      <div className="mb-20 md:mb-10 xl:mb-20">
        <h2 className="text-heading-4 text-grey font-fraunces font-black text-center md:text-left">
          Our Headquarters
        </h2>
      </div>
    </section>
  );
};
