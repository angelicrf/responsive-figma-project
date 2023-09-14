import LeftWrapper from "./left-wrapper";

const LeftContainer = () => {
  return (
    <div className="self-stretch bg-leftculpagebg w-[310px] flex flex-row py-0 px-[15px] box-border items-center justify-start text-center text-5xl text-black font-inter lg:w-auto lg:self-stretch lg:h-auto md:w-auto md:self-stretch md:h-auto md:flex-col sm:self-stretch sm:w-auto sm:h-auto sm:flex-col sm:gap-[9px] sm:items-center sm:justify-center">
      <LeftWrapper />
    </div>
  );
};

export default LeftContainer;
