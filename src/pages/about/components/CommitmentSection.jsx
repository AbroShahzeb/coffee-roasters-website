import imageCommitmentMobile from "../../../assets/about/mobile/image-commitment.jpg";
import imageCommitmentTablet from "../../../assets/about/tablet/image-commitment.jpg";
import imageCommitmentDesktop from "../../../assets/about/desktop/image-commitment.jpg";

export const CommitmentSection = () => {
  return (
    <section className="px-6 md:px-10 lg:px-20 mt-[120px] mb-[200px] md:mt-[152px] md:mb-[313px] lg:mt-[168px] lg:mb-[256px] flex flex-col gap-12 md:flex-row md:items-center md:gap-[69px] xl:gap-[125px] md:justify-between xl:max-w-[1110px] xl:mx-auto xl:px-0">
      <div className="w-full h-[400px] md:h-[470px] md:w-[281px] lg:w-[445px] lg:h-[520px] rounded-lg  relative overflow-hidden flex-shrink-0 ">
        {/* Image for Mobile Screens */}
        <img
          src={imageCommitmentMobile}
          alt="Guy making Coffee"
          className="absolute top-0 sm:bottom-0 sm:top-auto left-1/2 -translate-x-1/2 rounded-lg md:hidden h-full w-auto"
        />

        {/* Image for Tablet Screens */}
        <img
          src={imageCommitmentTablet}
          alt="Guy making Coffee"
          className="absolute top-0 left-1/2 -translate-x-1/2 rounded-lg hidden md:block lg:hidden "
        />

        {/* Image for Desktop Screens */}
        <img
          src={imageCommitmentDesktop}
          alt="Guy making Coffee"
          className="absolute top-0  left-0 rounded-lg hidden  lg:block"
        />
      </div>

      <div className="flex flex-col items-center text-center gap-[30px] md:items-start md:text-left">
        <h2 className="text-[32px] leading-[48px] font-fraunces font-black text-dark-grey-blue">
          Our commitment
        </h2>
        <p className="text-[15px] leading-[25px] font-normal text-dark-grey-blue/80">
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </section>
  );
};
