'use client';

import Footer from '@/components/main/Footer';
import { ReactTyped } from 'react-typed';
import Expertise from './Expertise';
import { Button } from '@mui/material';

const openAngleBracket = '<';
const closingAngleBracket = '>';

interface MainProps {
  className?: string;
}
const Main: React.FC<MainProps> = ({ className }) => (
  <div
    className={`${className} flex flex-col min-h-screen lg:p-4 w-full rounded-xl scrollbar-hidden`}
  >
    <section id='' className='flex-grow bg-white/10'>
      <div
        className='w-full h-50 bg-cover bg-no-repeat bg-center flex flex-col'
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className='bg-black/60 p-4 m-3 h-full rounded-xl'>
          <h2 className='text-4xl font-bold text-white'>CHECK THIS OUT!</h2>
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
          <Button variant='contained'>Explore</Button>
        </div>
      </div>
      <div className='px-2 lg:px-6 mt-6 text-center flex flex-col'>
        <h3 className='text-left text-lg font-semibold text-white flex-start'>
          My Expertise
        </h3>
        <div className='flex justify-between mt-4 grid lg:grid-cols-3 grid-cols-1 gap-4'>
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
