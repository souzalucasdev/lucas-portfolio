const ResidenceAge = () => {
  return (
    <div className='p-4'>
      <div className='flex flex-col justify-between border-b border-white pb-4 text-sm'>
        <div className='flex justify-between'>
          <p className='font-bold px-1 text-white'>Country</p>
          <p className='px-1 items-end text-custom-gray text-xs'>Luxembourg</p>
        </div>
        <div className='flex justify-between'>
          <p className='font-bold px-1 text-white'>City</p>
          <p className='px-1 items-end text-custom-gray text-xs'>Luxembourg</p>
        </div>
        <div className='flex justify-between'>
          <p className='font-bold px-1 text-white'>Age</p>
          <p className='px-1 items-end text-custom-gray text-xs'>29</p>
        </div>
      </div>
    </div>
  );
};

export default ResidenceAge;
