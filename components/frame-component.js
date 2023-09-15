const FrameComponent = () => {
  return (
    <div className='self-stretch h-[679px] flex flex-col items-start justify-between text-center text-5xl text-black font-inter lg:self-stretch lg:w-auto lg:h-auto lg:gap-[72px] md:self-stretch md:w-auto md:flex-col md:gap-[20px] sm:self-stretch sm:w-auto sm:h-auto sm:gap-[0px]'>
      <div className='self-stretch flex flex-row p-5 items-start justify-between md:self-stretch md:w-auto md:h-auto md:flex-row md:gap-[20px] sm:self-stretch sm:w-auto sm:h-auto sm:flex-row sm:gap-[0px]'>
        <b
          className='relative cursor-pointer sm:font-inter sm:text-mid'
          onClick={() => alert('linkOne')}
        >
          link one
        </b>
        <b
          className='relative cursor-pointer sm:font-inter sm:text-mid'
          onClick={() => alert('linkTWo')}
        >
          link Two
        </b>
        <b
          className='relative cursor-pointer sm:font-inter sm:text-mid'
          onClick={() => alert('linkThree')}
        >
          link Three
        </b>
      </div>
      <div className='w-[631px] h-[538px] flex flex-col items-start justify-between lg:self-stretch lg:w-auto md:self-stretch md:w-auto md:flex-col md:gap-[20px] sm:self-stretch sm:w-auto sm:h-auto'>
        <img
          className='self-stretch relative max-w-full overflow-hidden h-[235px] shrink-0 object-cover lg:self-stretch lg:w-auto md:self-stretch md:w-auto md:flex-1 md:h-auto sm:self-stretch sm:w-auto sm:h-auto'
          alt=''
          src='/rectangle-1@2x.png'
        />
        <img
          className='self-stretch relative max-w-full overflow-hidden h-[235px] shrink-0 object-cover lg:self-stretch lg:w-auto lg:flex-1 md:self-stretch md:w-auto md:flex-1 md:h-auto sm:self-stretch sm:w-auto sm:h-auto'
          alt=''
          src='/rectangle-11@2x.png'
        />
      </div>
    </div>
  )
}

export default FrameComponent
