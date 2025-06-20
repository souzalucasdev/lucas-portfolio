import React from 'react';
import { Button } from '@mui/material';

interface Technology {
  tech: string;
}

export interface PortfolioDataProps {
  id: number;
  projectName: string;
  url: string;
  image: string;
  projectDetail: string;
  technologiesUsed: Technology[];
}

interface PortfolioCardProps {
  data: PortfolioDataProps;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ data }) => {
  return (
    <a
      className='bg-white/10 text-white p-4 rounded-lg shadow-md w-full cursor-pointer transform transition-transform duration-900 hover:scale-105 hover:border hover:border-green-500'
      href={data.url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <img
        src={data.image}
        alt={data.projectName}
        className='w-full h-40 object-cover rounded'
      />
      <h3 className='mt-4 text-xl font-semibold text-white'>
        {data.projectName}
      </h3>
      <p className='mt-2 text-sm text-white'>{data.projectDetail}</p>
      <div className='mt-2 flex flex-wrap gap-2'>
        {data.technologiesUsed.map((tech, index) => (
          <span
            key={index}
            className='bg-green-500 text-black text-xs font-medium px-2 py-1 rounded'
          >
            {tech.tech}
          </span>
        ))}
      </div>
    </a>
  );
};

export default PortfolioCard;
