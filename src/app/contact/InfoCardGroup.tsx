const InfoCardGroup = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4'>
      <div className=' rounded-xl w-full'>
        <div className='flex flex-col bg-black/30 hover:bg-gradient-to-tl hover:from-black/30 hover:to-green-800/30 transition-colors duration-300 p-6  rounded-xl gap-4'>
          <div className='flex justify-between'>
            <span className='font-semibold text-sm text-white'>Country:</span>
            <span className='text-xs text-white/50'>Luxembourg</span>
          </div>
          <div className='flex justify-between'>
            <span className='font-semibold text-sm text-white'>City:</span>
            <span className='text-xs text-white/50'>Luxembourg</span>
          </div>
          <div className='flex justify-between'>
            <span className='font-semibold text-sm text-white'>Company:</span>
            <span className='text-xs text-white/50'>None</span>
          </div>
        </div>
      </div>
      <div className=' rounded-xl w-full'>
        <div className='flex flex-col bg-black/30 hover:bg-gradient-to-tl hover:from-black/30 hover:to-green-800/30 transition-colors duration-300 p-6 rounded-xl gap-4'>
          <div className='flex justify-between'>
            <span className='font-semibold text-sm text-white'>Email:</span>
            <span className='text-xs text-white/50'>
              lucas.lfs.souza@gmail.com
            </span>
          </div>
          <div className='flex justify-between'>
            <span className='font-semibold text-sm text-white'>Linkedin:</span>
            <span className='text-xs text-white/50'>devlucassouza</span>
          </div>
          <div className='flex justify-between'>
            <span className='font-semibold text-sm text-white'>Phone:</span>
            <span className='text-xs text-white/50'>+352 691 624 730</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoCardGroup;
