'use client';

import Footer from '@/components/main/Footer';
import { ReactTyped } from 'react-typed';
import Expertise from './Expertise';
import { Button } from '@mui/material';
import Recommendations from './recommendations/Recommendations';
// import Image from 'next/image';
import { useRef } from 'react';

const openAngleBracket = '<';
const closingAngleBracket = '>';

interface MainProps {
  className?: string;
}

const Main: React.FC<MainProps> = ({ className }) => {
  const expertiseRef = useRef<HTMLDivElement>(null);
  const scrollToSection = () => {
    if (expertiseRef.current) {
      expertiseRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <div
      className={`${className} flex flex-col h-full w-full rounded-xl scrollbar-hidden bg-white/10`}
    >
      <section id='' className='flex-grow'>
        <div
          className='w-full h-50 bg-cover bg-no-repeat bg-center flex flex-col relative'
          style={{
            backgroundImage: "url('/background.png')",
          }}
        >
          <div className='bg-black/60 p-4 m-3 h-full rounded-xl'>
            <h2 className='text-4xl font-bold text-white'>HELLO, VISITOR!</h2>
            <p className='mb-4 text-white'>
              <span>
                {`${openAngleBracket}`}
                <span style={{ color: '#1FDF64' }} className='font-bold'>
                  div
                </span>
                {`${closingAngleBracket}`}
              </span>
              <ReactTyped
                strings={[
                  'I am a React developer!',
                  'I have NextJS experience.',
                  'I also have Tailwind experience!',
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1000}
                startDelay={500}
                loop
              />
              <span>
                {`${openAngleBracket}/`}
                <span style={{ color: '#1FDF64' }} className='font-bold'>
                  div
                </span>
                {`${closingAngleBracket}`}
              </span>
            </p>
            <Button variant='contained' onClick={scrollToSection}>
              Explore
            </Button>
          </div>
          {/* <Image
          alt='lucas memoji'
          src='/memoji1.png'
          height={150}
          width={150}
          className='absolute bottom-0 right-30 mb-4 mr-4 hidden lg:block'
        /> */}
        </div>
        <div
          className='px-2 lg:px-6 text-center flex flex-col'
          ref={expertiseRef}
        >
          <h3 className='mt-6 text-left text-lg font-semibold text-white flex-start'>
            My Expertise
          </h3>
          <div className='flex justify-between mt-4 grid lg:grid-cols-3 grid-cols-1 gap-4'>
            <Expertise
              title={'React'}
              description={
                'With 2.5 years of experience in building React applications, I have developed a strong understanding of component-based architecture, state management, and front-end optimization. Through my past work experiences, I have ensured seamless user experiences, responsive designs, and efficient performance. I am also familiar with server and client components, enhancing scalability and maintainability.'
              }
            />
            <Expertise
              title={'JavaScript'}
              description={
                'At the start of my coding journey, I focused on mastering JavaScript fundamentals, which accelerated my path to React, its most popular library. My solid understanding of JavaScript has not only made learning React smoother but also enables me to quickly adapt to other libraries and frameworks with ease.'
              }
            />
            <Expertise
              title={'NextJS'}
              description={
                'My experience with Next.js has been growing rapidly. In my most recent role, I gained a strong foundation in this powerful framework. I am proud to say that I have successfully built my first Next.js application, which happens to be this website itself, showcasing my progress and newfound skills.'
              }
            />
            <Expertise
              title={'Figma'}
              description={
                "As a React developer with 2.5 years of experience, I understand the importance of Figma for frontend development. Familiarity with Figma's design-to-development workflow, component libraries, and design systems is crucial. I have hands-on experience using Figma to collaborate with designers, ensuring efficient UI implementation and smooth project handoffs."
              }
            />
            <Expertise
              title={'Tailwind CSS'}
              description={
                "I'm proficient in using Tailwind CSS to accelerate development. Its utility-first approach allows for rapid prototyping and custom UI design without writing custom CSS. With my experience, I can quickly build responsive and scalable layouts, ensuring efficient styling while maintaining a clean, maintainable codebase for React applications."
              }
            />
          </div>

          <Recommendations />

          <div className='mt-8 flex justify-center'></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Main;
