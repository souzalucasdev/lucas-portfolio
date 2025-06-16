import Image from 'next/image';
import Footer from '@/components/Footer';

const Main = () => (
  <div className='flex flex-col p-2 col-span-8 bg-black/10'>
    <section id='about' className='py-20 '>
      <div className='px-6 text-center'>
        <h2 className='text-4xl font-semibold text-gray-900'>About Me</h2>
        <p className='mt-4 text-xl text-gray-700'>
          I'm a frontend developer with 3 years of experience developing cutting
          edge interfaces. My experience extends to Next.js, Tailwind and
          Typescript familiarity, being these the technologies I am most
          familiar with.
        </p>
        <div className='mt-8 flex justify-center'></div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Main;
