const LeftLinks = () => {
  return (
    <div className="self-stretch h-[652px] flex flex-col items-center justify-between text-center text-5xl text-black font-inter lg:w-auto lg:[align-self:unset] lg:h-auto lg:gap-[60px] lg:pt-5 lg:box-border md:w-auto md:[align-self:unset] md:h-auto md:flex-col md:pt-[100px] md:box-border sm:flex-1 sm:gap-[50px] sm:items-center sm:justify-center sm:pt-5 sm:pb-5 sm:box-border">
      <div className="flex flex-row items-start justify-start gap-[40px] md:w-auto md:[align-self:unset] sm:self-stretch sm:w-auto sm:flex-1 sm:gap-[40px]">
        <img
          className="self-stretch relative max-h-full w-[30px] sm:w-[25px] sm:h-[25px]"
          alt=""
          src="/vector.svg"
        />
        <b className="relative lg:flex-1 md:flex-1 sm:text-lg sm:flex-1 sm:self-stretch sm:h-auto">
          TestOne
        </b>
      </div>
      <div className="flex flex-row items-start justify-start gap-[40px] md:w-auto md:[align-self:unset] sm:self-stretch sm:w-auto sm:flex-1 sm:gap-[40px]">
        <img
          className="self-stretch relative max-h-full w-[30px] sm:w-[25px] sm:h-[25px]"
          alt=""
          src="/vector1.svg"
        />
        <b className="relative lg:flex-1 md:flex-1 sm:text-lg sm:flex-1 sm:self-stretch sm:h-auto">
          TestTwo
        </b>
      </div>
      <div className="flex flex-row items-start justify-start gap-[40px] md:w-auto md:[align-self:unset] sm:self-stretch sm:w-auto sm:flex-1 sm:gap-[40px]">
        <img
          className="self-stretch relative max-h-full w-[30px] sm:w-[25px] sm:h-[25px]"
          alt=""
          src="/vector2.svg"
        />
        <b className="relative lg:flex-1 md:flex-1 sm:text-lg sm:flex-1 sm:self-stretch sm:h-auto">
          TestThree
        </b>
      </div>
      <div className="flex flex-row items-start justify-start gap-[40px] md:w-auto md:[align-self:unset] sm:self-stretch sm:w-auto sm:flex-1 sm:gap-[40px]">
        <img
          className="self-stretch relative max-h-full w-[30px] sm:w-[25px] sm:h-[25px]"
          alt=""
          src="/vector3.svg"
        />
        <b className="relative lg:flex-1 md:flex-1 sm:text-lg sm:flex-1 sm:self-stretch sm:h-auto">
          TestFour
        </b>
      </div>
      <div className="flex flex-row items-start justify-start gap-[40px] md:w-auto md:[align-self:unset] sm:self-stretch sm:w-auto sm:flex-1 sm:gap-[40px]">
        <img
          className="self-stretch relative max-h-full w-[30px] sm:w-[25px] sm:h-[25px]"
          alt=""
          src="/vector4.svg"
        />
        <b className="relative lg:flex-1 md:flex-1 sm:text-lg sm:flex-1 sm:self-stretch sm:h-auto">
          TestFive
        </b>
      </div>
    </div>
  );
};

export default LeftLinks;
