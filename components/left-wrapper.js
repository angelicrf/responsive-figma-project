import LogoComponent from "./logo-component";
import LeftLinks from "./left-links";

const LeftWrapper = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-[136px] text-center text-5xl text-black font-inter lg:self-stretch lg:h-auto lg:gap-[40px] md:gap-[0px] md:flex-[unset] md:self-stretch sm:gap-[0px] sm:flex-[unset] sm:self-stretch">
      <LogoComponent />
      <LeftLinks />
    </div>
  );
};

export default LeftWrapper;
