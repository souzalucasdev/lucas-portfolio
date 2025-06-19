const InfoCardGroup = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4'>
      <div className='bg-black p-6 w-full rounded-xl'>
        <div className='flex justify-between'>
          <span className='font-bold'>Country:</span>
          <span>Luxembourg</span>
        </div>
        <div className='flex justify-between'>
          <span className='font-bold'>City:</span>
          <span>Luxembourg</span>
        </div>
        <div className='flex justify-between'>
          <span className='font-bold'>Company:</span>
          <span>None</span>
        </div>
      </div>
      <div className='bg-black p-6 w-full rounded-xl'>
        <div className='flex justify-between'>
          <span className='font-bold'>Country:</span>
          <span>Luxembourg</span>
        </div>
        <div className='flex justify-between'>
          <span className='font-bold'>City:</span>
          <span>Luxembourg</span>
        </div>
        <div className='flex justify-between'>
          <span className='font-bold'>Company:</span>
          <span>None</span>
        </div>
      </div>
    </div>
  );
};
export default InfoCardGroup;
