import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import RecommendationCard from './RecommendationsCard';

type Recommendation = {
  id: number;
  name: string;
  image: string;
  designation: string;
  view: string;
  linkednURL: string;
};

const Recommendations = () => {
  const { isLoading, error, data } = useQuery<Recommendation[], Error>({
    queryKey: ['recommendations'],
    queryFn: async () => {
      try {
        const response = await axios.get('/api/recommendations');
        return response.data;
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        throw new Error('Error fetching testimonials');
      }
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching recommendations.</div>;
  }

  return (
    <div className=''>
      <div className='mt-6 text-lg font-bold text-white text-left'>
        Recommendations
      </div>
      <div className='grid w-full h-full mt-6 justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-8 pb-8'>
        {data?.map((recommendation, key) => (
          <RecommendationCard key={key} data={recommendation} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
