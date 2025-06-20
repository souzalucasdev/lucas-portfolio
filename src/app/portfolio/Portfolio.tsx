import { Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PortfolioCard from './PortfolioCard';

interface PortfolioProps {
  className?: string;
}

interface Technology {
  tech: string;
}

interface PortfolioDataProps {
  id: number;
  projectName: string;
  url: string;
  image: string;
  projectDetail: string;
  technologiesUsed: Technology[];
}

const Portfolio: React.FC<PortfolioProps> = ({ className = '' }) => {
  const { isLoading, error, data } = useQuery<PortfolioDataProps[], Error>({
    queryKey: ['portfolio'],
    queryFn: async () => {
      const response = await axios.get('/api/portfolio');
      return response.data;
    },
  });

  if (isLoading) {
    return <div className='text-white text-center'>Loading...</div>;
  }

  if (error) {
    return (
      <div className='text-red-500 text-center'>Error fetching portfolio.</div>
    );
  }

  return (
    <div
      className={`${className} scrollbar-hidden w-full h-full flex text-white flex-col bg-white/10 rounded-xl p-4`}
    >
      <div className='w-full '>
        <h2 className='mt-6 text-3xl font-bold text-left'>Portfolio</h2>

        <div className='grid w-full mt-6 grid-flow-row md:grid-cols-2 gap-x-4 gap-y-8 pb-8'>
          {data?.map((portfolio) => (
            <PortfolioCard key={portfolio.id} data={portfolio} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
