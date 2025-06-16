import Image from 'next/image';

const Header = () => (
  <div className='p-2 col-span-3'>
    <Image
      src='/lucas-profile.jpeg'
      alt='Lucas Souza'
      className='w-48 h-48 rounded-full shadow-lg'
      width={1000}
      height={1000}
    />
    <section
      className='p-2'
      style={{ backgroundImage: 'url(/path/to/your/background.jpg)' }}
    >
      <div className='h-full flex flex-col justify-center items-center bg-black bg-opacity-50'>
        <h1 className='text-white text-5xl font-bold'>Hi, I'm Lucas!</h1>
        <p className='text-white text-lg mt-4'>A passionate developer</p>
        <a
          href='#projects'
          className='mt-6 px-8 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition-colors'
        >
          See My Projects
        </a>
      </div>
    </section>
  </div>
);

export default Header;
