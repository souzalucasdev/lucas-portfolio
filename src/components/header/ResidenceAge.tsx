const ResidenceAge = () => {
  return (
    <div className='flex flex-col justify-between border-b border-white p-4 text-sm'>
      <div className='flex justify-between'>
        <p className='font-bold px-1'>Country</p>
        <p className='px-1 items-end text-white/40 text-xs'>Luxembourg</p>
      </div>
      <div className='flex justify-between'>
        <p className='font-bold px-1'>City</p>
        <p className='px-1 items-end text-white/40 text-xs'>Luxembourg</p>
      </div>
      <div className='flex justify-between'>
        <p className='font-bold px-1'>Age</p>
        <p className='px-1 items-end text-white/40 text-xs'>29</p>
      </div>
    </div>
  );
};

export default ResidenceAge;
