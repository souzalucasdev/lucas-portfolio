import Image from 'next/image';

const AvatarWithInfo = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-4 bg-second-dark p-4 rounded-t-xl sticky top-0 z-20'>
      <Image
        src='/lucas-profile.jpeg'
        alt='Lucas Souza'
        className=' rounded-full shadow-lg'
        width={100}
        height={100}
      />
      <p className='font-bold p-1 mt-3 text-white'>Lucas Souza</p>
      <p className='p-1 text-sm text-center text-white'>
        React | NextJS | Typescript | Tailwind
      </p>
    </div>
  );
};

export default AvatarWithInfo;
