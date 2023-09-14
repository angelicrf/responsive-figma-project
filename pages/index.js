import LeftContainer from "../components/left-container";
import MiddleWrapper from "../components/middle-wrapper";
import RImage from "../components/r-image";

const DashboardFrame = () => {
  return (
    <div className="relative bg-background-page w-full overflow-hidden flex flex-col items-start justify-start lg:w-auto lg:[align-self:unset] lg:h-auto lg:gap-[0px] md:w-auto md:[align-self:unset] md:h-auto md:flex-col md:gap-[0px] sm:w-auto sm:[align-self:unset] sm:h-auto sm:flex-col">
      <div className="self-stretch h-[1024px] flex flex-row items-start justify-start lg:flex-1 md:self-stretch md:w-auto md:flex-1 md:flex-row md:min-h-[1600px] sm:self-stretch sm:w-auto sm:flex-1 sm:flex-col sm:gap-[0px]">
        <LeftContainer />
        <div className="flex flex-row items-start justify-start lg:flex-1 lg:self-stretch lg:h-auto lg:gap-[0px] md:flex-1 md:flex-col sm:self-stretch sm:w-auto sm:h-auto sm:flex-col sm:gap-[40px] ipad-29:self-stretch ipad-29:w-auto ipad-29:flex-col">
          <MiddleWrapper />
          <div className="bg-rpanelpgbg h-[1021px] flex flex-col items-start justify-between relative lg:w-auto lg:[align-self:unset] md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:self-stretch sm:w-auto sm:flex-col sm:gap-[0px]">
            <RImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFrame;
