import FrameComponent from "./frame-component";
import FrameComponent1 from "./frame-component1";

const MiddleWrapper = () => {
  return (
    <div className="self-stretch bg-centerpagebg flex flex-col items-start justify-start gap-[20px] text-center text-5xl text-black font-inter lg:w-auto lg:self-stretch lg:h-auto md:self-stretch md:w-auto md:flex-1 md:flex-col md:gap-[0px] sm:self-stretch sm:w-auto sm:flex-1 sm:flex-col sm:gap-[0px]">
      <FrameComponent />
      <FrameComponent1 />
    </div>
  );
};

export default MiddleWrapper;
