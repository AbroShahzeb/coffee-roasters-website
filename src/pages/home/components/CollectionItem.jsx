export const CollectionItem = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col items-center text-center text-dark-grey-blue md:flex-row md:justify-center md:gap-[36px] xl:gap-0  md:text-left xl:flex-col lg:text-center w-full"
    >
      <div className=" flex items-center justify-center">
        <img
          src={item.image}
          className="w-[200px] h-[151px] md:w-[255px] md:h-[193px]  xl:h-[183px] xl:w-auto xl:ml-2"
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
  );
};
