'use client';

import Image from 'next/image';
import Footer from '@/components/main/Footer';
import { ReactTyped } from 'react-typed';
import Expertise from './Expertise';

const openAngleBracket = '<';
const closingAngleBracket = '>';
const Main = () => (
  <div className='flex flex-col min-h-screen p-4 w-full rounded-xl overflow-scroll scrollbar-hidden'>
    <section id='' className='flex-grow bg-white/10'>
      <div
        className='w-full h-50 bg-cover bg-no-repeat bg-center flex flex-col'
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className='bg-black/60 p-4 m-3 h-full rounded-xls'>
          <h2 className='text-4xl font-bold text-custom-green-500'>
            CHECK THIS OUT!
          </h2>
          <p>
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
                'I also have experience with Tailwind CSS!',
              ]}
              typeSpeed={50} // Adjust speed of typing effect
              backSpeed={30} // Adjust backspacing speed
              backDelay={1000} // Delay before typing backwards
              startDelay={500} // Delay before typing starts
              loop // Loop the typing effect
            />
            <span>
              {`${openAngleBracket}/`}
              <span style={{ color: '#1FDF64' }} className='font-bold'>
                div
              </span>
              {`${closingAngleBracket}`}
            </span>
          </p>
        </div>
      </div>
      <div className='px-6 mt-6 text-center flex flex-col'>
        <h3 className='text-left text-lg font-semibold text-white flex-start'>
          My Expertise
        </h3>
        <div className='flex justify-between mt-4 grid grid-cols-3 gap-4'>
          <Expertise
            title={'React Development'}
            description={
              'I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.'
            }
          />
          <Expertise
            title={'NextJS Framework'}
            description={
              'React DevelopmentReact DevelopmentReact DevelopmentReact DevelopmentReact Development'
            }
          />
          <Expertise
            title={'UX, Figma and CSS Libraries'}
            description={
              'React DevelopmentReact DevelopmentReact DevelopmentReact DevelopmentReact Development'
            }
          />
          <Expertise
            title={'UX, Figma and CSS Libraries'}
            description={
              'React DevelopmentReact DevelopmentReact DevelopmentReact DevelopmentReact Development'
            }
          />
        </div>

        <div className='mt-8 flex justify-center'></div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Main;
