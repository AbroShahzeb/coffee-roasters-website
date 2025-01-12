import imageGranEspresso from "../../../assets/home/desktop/image-gran-espresso.png";
import imagePlanatlo from "../../../assets/home/desktop/image-planalto.png";
import imagePiccollo from "../../../assets/home/desktop/image-piccollo.png";
import imageDanche from "../../../assets/home/desktop/image-danche.png";
import { CollectionItem } from "./CollectionItem";

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
    <section className="mt-[120px] xl:mt-[202px] px-6 pb-[120px] md:pb-[144px] lg:pb-[200px] md:px-10 lg:px-0">
      <div className="relative xl:max-w-[1110px] xl:mx-auto md:h-[96px] xl:h-[150px]">
        <h2 className="text-grey text-[40px] md:text-[96px] xl:text-title-alternate-big leading-[72px] font-black text-center font-fraunces ">
          our collection
        </h2>
        <div className="absolute inset-0  z-10 bg-collection-heading-gradient lg:bg-collection-heading-gradient-large top-3 lg:-mt-[50px] max-h-[200px]"></div>
      </div>

      <div className="mt-[13px] flex flex-col items-center w-full gap-12 md:gap-8 lg:gap-[30px] md:-mt-5 xl:mt-[-80px] md:relative md:z-30 xl:flex-row xl:max-w-[1110px] xl:mx-auto">
        {collection.map((item) => (
          <CollectionItem item={item} />
        ))}
      </div>
    </section>
  );
};
