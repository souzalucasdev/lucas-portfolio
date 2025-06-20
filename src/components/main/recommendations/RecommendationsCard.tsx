import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type RecommendationProps = {
  id: number;
  name: string;
  image: string;
  designation: string;
  view: string;
  linkednURL: string;
};

const RecommendationCard = ({ data }: { data: RecommendationProps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  const truncateText = (text: string, length: number) => {
    if (text.length > length) {
      return text.slice(0, length) + '...';
    }
    return text;
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className='relative'>
      <div className='p-8 h-full bg-white/10 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 border-b-2 border-l-2 border-r-2 border-transparent hover:border-green-500'>
        <Image
          src={data?.image}
          className='absolute z-10 right-10 -top-5 border-green-500 border-[3px] rounded-full m-0'
          alt='recommendator picture'
          width={60}
          height={60}
        />
        <div className='text-white underline italic'>
          <a href={data?.linkednURL} target='_blank' rel='noreferrer'>
            {data?.name}
          </a>
        </div>
        <div className='text-xs text-gray-400 italic mt-1'>
          {data?.designation}
        </div>
        <div className='text-sm mt-2 text-white font-normal'>
          {truncateText(data?.view || '', 150)}
        </div>

        <button
          onClick={toggleModal}
          className='text-green-500 mt-2 text-sm cursor-pointer transition-all duration-500 hover:scale-105 p-1'
        >
          View More
        </button>
      </div>

      {isModalOpen && (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center items-center z-50 p-8 h-screen'>
          <div
            className='bg-black p-6 rounded-lg max-w-lg w-full border border-white h-100 overflow-scroll'
            ref={modalRef}
          >
            <div className='flex justify-end items-center'>
              <button
                onClick={toggleModal}
                className='text-xl font-semibold text-white cursor-pointer'
              >
                X
              </button>
            </div>
            <div className='mt-4 flex flex-col justify-center items-center'>
              <Image
                src={data?.image}
                alt='recommendator picture'
                width={100}
                height={100}
                className='rounded-full'
              />
              <p className='text-lg font-semibold mt-2 text-white'>
                {data?.name}
              </p>
              <p className='text-gray-500 text-sm'>{data?.designation}</p>
              <p className='text-sm mt-2 text-white'>{data?.view}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendationCard;
