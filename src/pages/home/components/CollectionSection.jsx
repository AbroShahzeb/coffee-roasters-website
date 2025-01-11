import imageGranEspresso from "../../../assets/home/desktop/image-gran-espresso.png";
import imagePlanatlo from "../../../assets/home/desktop/image-planalto.png";
import imagePiccollo from "../../../assets/home/desktop/image-piccollo.png";
import imageDanche from "../../../assets/home/desktop/image-danche.png";

const collection = [
  {
    id: 0,
    title: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
    image: imageGranEspresso,
  },
  {
    id: 1,
    title: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    image: imagePlanatlo,
  },
  {
    id: 2,
    title: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry ",
    image: imagePiccollo,
  },
  {
    id: 3,
    title: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes ",
    image: imageDanche,
  },
];

export const CollectionSection = () => {
  return (
    <section className="mt-[120px] xl:mt-[202px] px-6 md:px-10 lg:px-0">
      <div className="relative xl:max-w-[1110px] xl:mx-auto">
        <h2 className="text-grey text-[40px] md:text-[96px] lg:text-title-alternate-big leading-[72px] font-black text-center font-fraunces ">
          our collection
        </h2>
        <div className="absolute inset-0 top-1/2 lg:-translate-y-1/2 z-10 bg-collection-heading-gradient lg:h-[196px]"></div>
      </div>

      <div className="mt-[13px] flex flex-col items-center w-full gap-12 md:gap-8 lg:gap-[30px] md:-mt-5 xl:mt-0 md:relative md:z-30 xl:flex-row xl:max-w-[1110px] xl:mx-auto">
        {collection.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center text-dark-grey-blue md:flex-row md:justify-center md:gap-[36px] xl:gap-0  md:text-left xl:flex-col lg:text-center w-full"
          >
            <div className=" flex items-center justify-center">
              <img
                src={item.image}
                className="w-[200px] h-[151px] md:w-[255px] md:h-[193px]  xl:h-[193px] xl:w-auto"
              />
            </div>
            <div className="mt-6 md:mt-0 lg:mt-[72px]">
              <h3 className="text-heading-4 font-fraunces font-black ">
                {item.title}
              </h3>
              <p className="mt-4 md:mt-6 text-body max-w-[282px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
